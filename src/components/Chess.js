import React, { useState, useEffect } from 'react';

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
                    
                <br></br>

                <div className="flex items-center justify-center mb-2">
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
            </div>
        </section>
    );
    
}