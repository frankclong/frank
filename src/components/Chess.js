import React, { useState, useEffect } from 'react';

const token = 'lip_5muroQrpPxYzLwhRs59J';

export default function Chess() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://lichess.org/api/account', {
            headers: {Authorization : 'Bearer ' + token}
        })
          .then(response => response.json())
          .then(responseJson => {
            setData(responseJson);
            console.log(responseJson);
        })
          .catch(error => console.error(error));
      }, []);

    return (
        <section id="chess">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Chess
                </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div>
                        <h2>Username:</h2>
                        <p>{data ? data['username'] : "Loading..."}</p>
                    </div>
                    <div>
                        <h2>Bullet</h2>
                        <p>{data ? data['perfs']['bullet']['rating'] : "Loading..."}</p>
                    </div>
                    <div>
                        <h2>Blitz</h2>
                        <p>{data ? data['perfs']['blitz']['rating'] : "Loading..."}</p>
                    </div>
                    <div>
                        <h2>Rapid</h2>
                        <p>{data ? data['perfs']['rapid']['rating'] : "Loading..."}</p>
                    </div>
                </div>
            </div>
        </section>
    );
    
}