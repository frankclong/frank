import React, { useMemo } from "react";
import { TRAVELS } from "../travelData";

// Function to dynamically require images from a specific folder
const loadTravelImages = (folderName) => {
    try {
        // Use require.context to dynamically load all jpg images from the folder
        // When new images are added, webpack will include them on rebuild
        const context = require.context("../travel", true, /\.jpg$/);
        const folderImages = context
            .keys()
            .filter((key) => key.includes(`/${folderName}/`))
            .map((key) => context(key));
        
        return folderImages;
    } catch (error) {
        console.warn(`Could not load images from travel/${folderName}:`, error.message);
        return [];
    }
};

const TravelEntry = React.memo(function TravelEntry({ trip }) {
    const images = useMemo(() => loadTravelImages(trip.folderName), [trip.folderName]);

    if (images.length === 0) {
        return null;
    }

    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold mb-6 text-white">{trip.tripName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {images.map((image, i) => (
                    <div key={`${trip.folderName}-${i}`} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 bg-gray-800 will-change-transform">
                        <img
                            src={image}
                            alt={`${trip.tripName} ${i + 1}`}
                            loading="lazy"
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
});

function Travel() {
    return (
        <section id="travel">
            <div className="bg-blue-950 px-5 py-10 mx-auto lg:px-40 text-white">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12 text-center text-white">
                    Travel
                </h1>

                <div className="mx-auto max-w-7xl">
                    {TRAVELS.map((trip) => (
                        <TravelEntry key={trip.tripName} trip={trip} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Travel;