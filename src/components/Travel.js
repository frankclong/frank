import React from "react";
import { TRAVELS } from "../travelData";

const NUM_COLUMNS = 3

function TravelEntry({trip}) {
    const importAllImages = (requireContext) => {
        return requireContext.keys().map(requireContext);
      };
    console.log(trip.imgDir)
    // const images = importAllImages(require.context(trip.imgDir, false, /\.jpg$/));

    // const images = importAllImages(require.context('${trip.imgDir}' , false, /\.jpg$/));


    let images = [];
    try {
      // Dynamically require all .jpg files from the folder
      var fpath = '../travel/argentina-2024';
    //   images = importAllImages(require.context(`${fpath}`, false, /\.jpg$/));
      images = importAllImages(require.context(`${fpath}`, false, /\.jpg$/));
    } catch (error) {
      console.error(`Error loading images from folder "${trip.imgDir}":`, error.message);
    }

    return (
        <div className="grid grid-cols-5">
            {images.map((image, i) => (
                <img src={image} alt={i} className="object-contain"></img>
            ))
            }

        </div>
    )
}

function Travel() {
    return (
        <section id="travel">
            <div className="bg-blue-950 px-5 py-5 mx-auto text-center lg:px-40 text-white">   
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Travel
                </h1>

                {TRAVELS.map((trip) => (
                    <div key={trip.tripName} className = "flex items-center justify-center mb-4">
                    <div className="bg-blue-900 shadow-md rounded-md p-8 max-w-2xl w-full">
                        <TravelEntry trip={trip}/>   
                    </div>
                    </div>
                ))}
            
            </div>
        </section>
    )
}

export default Travel;