
import React from "react";
import { WINES } from "../wineData";

export default function Wine() {
    return (
        <section id="wine">
            <div className="bg-red-950 container px-5 py-5 mx-auto text-center lg:px-40 text-white">   
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Wine
                </h1>
                <p>Currently tasting through various red wine varieties/regions! Would be super open for recommendations.</p>
                <p>Chilean Carmenere, Cab sauv, Grenache from Rhone, Garnacha from Spain, Merlot, Nebbiolo, Pinot Noir, Sangiovese, South African Pinotage, Syrah from Rhone</p>
                <br></br>

                {WINES.map(wine => (
                    <div className = "flex items-center justify-center mb-4">
                    <div className="bg-red-900 shadow-md rounded-md p-8 max-w-2xl w-full">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-1/2 mr-4">
                                <img src={wine.image} alt={wine.name} className="object-cover"/>
                            </div>
                            
                            <div className="justify-center">
                                <h1 className="text-2xl font-semibold mb-4">{wine.name}</h1>
                                <ul className="list-none pl-0 mb-4">
                                    <li>{wine.region}</li>
                                    <li>{wine.vintage}</li>
                                    <li>{wine.variety}</li>
                                    <li>${wine.priceCAD}</li>
                                </ul>
                                <p>{wine.notes}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}

                </div>
        </section>
    )
}