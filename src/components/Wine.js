
import React from "react";
import { WINES } from "../wineData";

function WineImage({wine}) {
    return  (
        <div className="flex-shrink-0 w-1/2">
            <img src={wine.image} alt={wine.name} className="object-cover"/>
        </div>);
}

function WineDesc({wine}) {
    let priceText;
    if (wine.priceCAD === -1) {
        priceText = "Gift"
    }
    else {
        priceText = "$" + wine.priceCAD;
    }

    return (
        <div className="justify-center">
            <h1 className="text-2xl font-semibold mb-4">{wine.name}</h1>
            <ul className="list-none pl-0 mb-4">
                <li>{wine.region}</li>
                <li>{wine.vintage}</li>
                <li>{wine.variety}</li>
                <li>{priceText}</li>
            </ul>
            <p>{wine.notes}</p>
        </div>
    )
}

function WineCard({wine, index}) {
    if (index % 2 === 0) {
        return (
            <div className="flex items-center space-x-4">
                <WineImage wine={wine}/>
                <WineDesc wine={wine}/>
            </div>
        );
    }
    else {
        return (
            <div className="flex items-center space-x-4">
                <WineDesc wine={wine}/>
                <WineImage wine={wine}/>
            </div>
        );
    }
}

export default function Wine() {
    return (
        <section id="wine">
            <div className="bg-red-950 px-5 py-5 mx-auto text-center lg:px-40 text-white">   
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Wine
                </h1>
                <p>Currently tasting through various red wine varieties/regions. Open to recommendations!</p>
                <p>Reds I want to try: Canadian Cab Sauv/Cab Franc/Pinot Noir, South African Cab Sauv,
                    Burgundy (Pinot Noir), Bordeaux Merlot, Bordeaux Cab Franc, Syrah from Northern Rhone, 
                    Nebbiolo, Sangiovese</p>
                <p>In the cellar: Canadian Cab Sauv, Bordeaux Cab sauv (x2), GSM blend from Southern Rhone</p>
                <br></br>

                {WINES.map((wine, index) => (
                    <div key={wine.name} className = "flex items-center justify-center mb-4">
                    <div className="bg-red-900 shadow-md rounded-md p-8 max-w-2xl w-full">
                        <WineCard wine={wine} index={index}/>   
                    </div>
                    </div>
                ))}

                </div>
        </section>
    )
}