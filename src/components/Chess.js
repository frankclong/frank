import React, { useState, useEffect } from 'react';
import moment from "moment";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

const RenderNoShape = (props)=>{ 
    return null; 
}

const NUM_DAYS_HISTORY = 30;

const token = 'lip_5muroQrpPxYzLwhRs59J';
const CHESS_DOT_COM_USERNAME = "dragonsp";

const LICHESS_TIME_CONTROL_MAP = {
    "Rapid" : "rapid",
    "Blitz" : "blitz",
    "Bullet" : "bullet"
}

const CHESS_DOT_COM_TIME_CONTROL_MAP = {
    "Rapid" : "chess_rapid",
    "Blitz" : "chess_blitz",
    "Bullet" : "chess_bullet"
}

const TIME_CONTROLS = ["Bullet", "Blitz", "Rapid"]

function RatingChart(today, ratingMap, minRating, maxRating) {
    // Add current rating to end and get min time for ticks
    let minTime = today.getTime() / 1000
    for (const data of Object.values(ratingMap)) {
        if (data.length > 0) {
            let current = {'rating' : data[data.length -1]["rating"],
                'time' : today.getTime() / 1000
            }
            data.push(current)

            minTime = Math.min(minTime, data[0]['time'])
        }
      }

    var ratingTicks = []
    const interval = 50
    let initRating = (Math.floor(minRating / interval) - 1) * interval
    let finalRating = (Math.ceil(maxRating / interval)) * interval
    while (initRating <= finalRating) {
        ratingTicks.push(initRating);
        initRating += interval
    }

    var dateTicks = []
    let initTime = today.getTime() / 1000
    while (initTime > minTime) {
        dateTicks.push(Math.ceil(initTime))
        initTime -= (3600 * 24 * 7); // 1 Week
    }

    return (
        <ResponsiveContainer width="100%" height={500}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" 
            domain={[dateTicks[dateTicks.length - 1], dateTicks[0]]} allowDataOverflow 
            dataKey="time" name="Date" 
            tickFormatter={unixTime => moment(unixTime * 1000).format("DD-MM-YY")}
            ticks={dateTicks} />
          <YAxis type="number" 
            domain={["auto", "auto"]} 
            dataKey="rating" 
            name="Rating" 
            ticks={ratingTicks} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Rapid" data={ratingMap["rapid"]} fill="#137d39" line={{strokeWidth: 2}} shape={<RenderNoShape />} />
          <Scatter name="Blitz" data={ratingMap["blitz"]} fill="#34eb77" line={{strokeWidth: 2}} shape={<RenderNoShape />} />
          <Scatter name="Bullet" data={ratingMap["bullet"]} fill="#a6ffc6" line={{strokeWidth: 2}} shape={<RenderNoShape />} />
        </ScatterChart>
      </ResponsiveContainer>
    )
}

function LichessRatingChart() {
    const [ratingHistoryData, setRatingHistoryData] = useState(null);
    useEffect(() => {
        fetch('https://lichess.org/api/user/' + CHESS_DOT_COM_USERNAME + '/rating-history')
          .then(response => response.json())
          .then(responseJson => {
            setRatingHistoryData(responseJson);
        })
          .catch(error => console.error(error));
      }, []);

    const ratingMap = {
        "bullet" : [],
        "blitz" : [],
        "rapid" : [],
    }
    let [minRating, maxRating] = [Number.MAX_SAFE_INTEGER, 0];
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - NUM_DAYS_HISTORY)
    if (ratingHistoryData) {
        ratingHistoryData.forEach(data => {
            let timeControl = data["name"].toLowerCase();
            if (timeControl in ratingMap) {
                let points = data["points"]
                points.forEach(point => {
                        let pointDate = new Date(point[0], point[1], point[2])
                        if (pointDate >= pastDate) {
                            let rating = point[3]
                            let endTime = pointDate.getTime()

                            ratingMap[timeControl].push({
                                "rating" : rating,
                                "time" : endTime
                            })
                            minRating = Math.min(minRating, rating)
                            maxRating = Math.max(maxRating, rating)
                        }
    
                    }
                )

                // Handle empty rating map
                if (ratingMap[timeControl].length === 0) {
                    let currentRating = points[points.length - 1][3];
                    ratingMap[timeControl].push({
                        "rating" : currentRating,
                        "time" : pastDate.getTime() / 1000
                    })
                    minRating = Math.min(minRating, currentRating)
                    maxRating = Math.max(maxRating, currentRating)
                }
            }
        })
    }
    return RatingChart(today, ratingMap, minRating, maxRating)
}

function ChessComRatingChart() {
    const [thisMonthData, setThisMonthData] = useState(null);
    const [pastMonthData, setPastMonthData] = useState(null);
    
    // Get rating history
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - NUM_DAYS_HISTORY)
    const thisMonth = today.getMonth() + 1;
    const pastMonth = pastDate.getMonth() + 1;
    const thisYear = today.getFullYear();
    const pastYear = pastDate.getFullYear();

    // Get this month's archive
    useEffect(() => {
        fetch('https://api.chess.com/pub/player/' + CHESS_DOT_COM_USERNAME + '/games/' + thisYear + '/' + String(thisMonth).padStart(2, '0'))
          .then(response => response.json())
          .then(responseJson => {
            setThisMonthData(responseJson);
        })
          .catch(error => console.error(error));
      });

    // Get last month's archive if different
    useEffect(() => {
        if (thisMonth !== pastMonth) {
            fetch('https://api.chess.com/pub/player/' + CHESS_DOT_COM_USERNAME + '/games/' + pastYear + '/' + String(pastMonth).padStart(2, '0'))
                .then(response => response.json())
                .then(responseJson => {
                setPastMonthData(responseJson);
            })
                .catch(error => console.error(error));
        }
        });


    // Initialize data
    const ratingMap = {
        "bullet" : [],
        "blitz" : [],
        "rapid" : [],
    }

    let [minRating, maxRating] = [Number.MAX_SAFE_INTEGER, 0];

    // list of dictionaries with keys of value (rating) and time (unix)
    if (pastMonthData != null) {
        let games = pastMonthData["games"]
        games.forEach(game => {
            let timeControl = game["time_class"]
            if (timeControl in ratingMap) {
                let endTime = game["end_time"]
                let rating = game["white"]["username"] === CHESS_DOT_COM_USERNAME ? game["white"]["rating"] : game["black"]["rating"]
                ratingMap[timeControl].push({
                    "rating" : rating,
                    "time" : endTime
                })
                minRating = Math.min(minRating, rating)
                maxRating = Math.max(maxRating, rating)
            }
        }); 
    }

    if (thisMonthData != null) {
        let games = thisMonthData["games"]
        games.forEach(game => {
            let timeControl = game["time_class"]
            if (timeControl in ratingMap) {
                let endTime = game["end_time"]
                let rating = game["white"]["username"] === CHESS_DOT_COM_USERNAME ? game["white"]["rating"] : game["black"]["rating"]
                ratingMap[timeControl].push({
                    "rating" : rating,
                    "time" : endTime
                })
                minRating = Math.min(minRating, rating)
                maxRating = Math.max(maxRating, rating)
            }
            
        }); 
    }

    // TODO handle empty data - if no games played for 2 months

    return RatingChart(today, ratingMap, minRating, maxRating)
}

export default function Chess() {
    const [lichessData, setLichessData] = useState(null);
    const [chessDotComData, setChessDotComData] = useState(null);

    useEffect(() => {
        fetch('https://lichess.org/api/account', {
            headers: {Authorization : 'Bearer ' + token}
        })
          .then(response => response.json())
          .then(responseJson => {
            setLichessData(responseJson);
        })
          .catch(error => console.error(error));
      }, []);
      
    useEffect(() => {
        fetch('https://api.chess.com/pub/player/' + CHESS_DOT_COM_USERNAME + '/stats')
          .then(response => response.json())
          .then(responseJson => {
            setChessDotComData(responseJson);
        })
          .catch(error => console.error(error));
      }, []);

    return (
        <section id="chess">
            <div className="bg-stone-900 px-5 py-10 mx-auto text-center lg:px-40">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Chess
                </h1>
                <div className="flex items-center justify-center mb-2">
                    <img src="./lichess.png" alt="lichess" className="w-10 h-10 rounded-full" />
                    <h2 className="text-lg font-semibold ml-4">Lichess</h2>
                </div>

                <p className="text-xl font-bold mb-4">
                    <a href="https://lichess.org/@/dragonsp" className="text-white-500" target="_blank" rel="noreferrer">
                        {lichessData ? lichessData['username'] : "Loading..."}
                        </a>
                </p>
                <div className="flex justify-center mx-auto mb-2">
                    {
                        TIME_CONTROLS.map(timeControl => (
                            <div key={"lichess" + timeControl} className="flex-shrink-0 mr-4">
                                <span className="font-semibold">{timeControl}</span>
                                <span className="ml-2">{lichessData ? lichessData['perfs'][LICHESS_TIME_CONTROL_MAP[timeControl]]['rating'] : "Loading..."}</span>
                            </div>
                        ))
                    }
                </div>
                <LichessRatingChart></LichessRatingChart>

                <div className="mt-6 flex items-center justify-center mb-2">
                    <img src="./chesscom.png" alt="chess.com" className="w-7 h-10" />
                    <h2 className="text-lg font-semibold ml-4">Chess.com</h2>
                </div>

                <p className="text-xl font-bold mb-4">
                    <a href="https://www.chess.com/member/dragonsp" className="text-white-500" target="_blank" rel="noreferrer">
                        {CHESS_DOT_COM_USERNAME}
                        </a>
                </p>
                <div className="flex justify-center mx-auto mb-2">
                    {
                        TIME_CONTROLS.map(timeControl => (
                            <div key={"chessDotCom" + timeControl} className="flex-shrink-0 mr-4">
                                <span className="font-semibold">{timeControl}</span>
                                <span className="ml-2">{chessDotComData ? chessDotComData[CHESS_DOT_COM_TIME_CONTROL_MAP[timeControl]]['last']['rating'] : "Loading..."}</span>
                            </div>
                        ))
                    }
                </div>
                <ChessComRatingChart></ChessComRatingChart>
            </div>
        </section>
    );
    
}