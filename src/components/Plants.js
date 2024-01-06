import React from "react";
import {PLANTS} from "../plantData";

function PlantNotes({notes}) {
    if (notes.length > 0) {
        return <p>{notes}</p>
    }
    else {
        return;
    }
}

function PlantImage({plant}) {
    return  (
        <div className="flex-shrink-0 w-1/2">
            <img src={plant.image} alt={plant.commonName} className="object-cover"/>
        </div>);
}

function PlantDesc({plant}) {
    return (
        <div className="justify-center w-1/2">
            <h1 className="text-2xl font-semibold mb-4">{plant.nickname}</h1>
            <ul className="list-none pl-0 mb-4">
                <li>{plant.commonName}</li>
                <li className="italic">{plant.scientificName}</li>
            </ul>
            <PlantNotes notes={plant.notes}/>
        </div>
    )
}

function PlantCard({plant, index}) {
    if (index % 2 == 0) {
        return (
            <div className="flex items-center space-x-4">
                <PlantImage plant={plant}/>
                <PlantDesc plant={plant}/>
            </div>
        );
    }
    else {
        return (
            <div className="flex items-center space-x-4">
                <PlantDesc plant={plant}/>
                <PlantImage plant={plant}/>
            </div>
        );
    }
}

export default function plant() {
    return (
        <section id="plants">
            <div className="bg-emerald-950 px-5 py-5 mx-auto text-center lg:px-40 text-white">   
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Plants
                </h1>
                {PLANTS.map((plant, index) => (
                    <div key={plant.name} className = "flex items-center justify-center mb-4">
                    <div className="bg-emerald-900 shadow-md rounded-md p-8 max-w-2xl w-full">
                        <PlantCard plant={plant} index={index}/>   
                    </div>
                    </div>
                ))}

                </div>
        </section>
    )
}