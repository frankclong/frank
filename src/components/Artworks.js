import React from "react";
import {ARTWORKS} from "../artData"; 

function compareArtDate(a, b) {
    if (a.year > b.year) {
        return 1;
    }
    else if (a.year < b.year) {
        return -1;
    }
    else {
        if (a.month > b.month) {
            return 1;
        }
        else if (a.month < b.month) {
            return -1;
        }
        else {
            return 0;
        }
    }
}

export default function Artworks() {
    return (
        <section id="drawing">
            <div className = "bg-gray-800 text-center px-5 py-5">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Artwork
                </h1>

                {ARTWORKS.sort(compareArtDate).reverse().map(artwork => (
                    <div key={artwork.caption} className = "flex items-center justify-center mb-4">
                        <div className="bg-gray-600 shadow-md rounded-md p-8 max-w-2xl">
                            <div className="flex justify-center items-center mb-2">
                                <img src={artwork.image} alt={artwork.caption} className="h-96 w-auto object-cover"/>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center text-gray-100">{artwork.caption}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}