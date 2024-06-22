import React from "react";

const CROCHET_DIR = './crochet/';

export default function Crochet() {
    return (
        <section id="crochet" className="bg-amber-700">
            <div className="px-5 py-5 mx-auto text-center lg:px-40 text-white lg:w-2/3">   
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Crochet
                </h1>
                <div>
                    <p className="mx-auto leading-relaxed text-base">I first started wanting to learn how to crochet because I wanted to make a little volleyball amigurami for my friend. 
                        My first attempt was a disaster. 
                        I bought a cheap hook and yarn just to get started but it proved to be too difficult. Thus I put this project on hold indefinitely. 
                        Months later, I saw a Woobles kit on sale and thought it might be a good opportunity to try my hand again and that began the birth of Sebastian the Lion!</p>
                </div>
                
                <div className = "mt-6 flex items-center justify-center space-x-5 mr-4 ml-4">
                    <img src={CROCHET_DIR + "lion1.jpeg"} alt="Part 1" className="object-cover w-1/3"/>
                    <img src={CROCHET_DIR + "lion2.jpg"} alt="Part 2" className="object-cover w-1/3"/>
                    <img src={CROCHET_DIR + "lion3.jpg"} alt="Part 3" className="object-cover w-1/3"/>
                </div>

                <div>
                    <p className="mt-6 mx-auto leading-relaxed text-base">
                        My second attempt at the volleyball! I was trying to base it off of the classic Molten volleyballs, but the swirl-like nature of the bands of color was difficult to reproduce. 
                        In order to get the desired effect, I would have needed to do a lot of color switching back and forth for each piece. It felt a bit too ambitious for me as an amateur so I decided to keep it simpler but still have 
                        a partial swirl effect. There wasn't a specific amigurami for this, so I had to design my own. I referenced a separate volleyball amigurami for the cube idea and lots of videos about switching colors. 
                        I'm quite proud of how it turned out in the end!
                    </p>
                </div>

                <div className = "flex items-center justify-center space-x-5 mr-4 ml-4">
                    <img src={CROCHET_DIR + "crochet_vball_1.jpg"} alt="Volleyball Part 1" className="object-contain h-96 w-96"/>
                    <img src={CROCHET_DIR + "crochet_vball_2.jpg"} alt="Volleyball Part 2" className="object-contain h-96 w-56"/>
                </div>
            </div>
        </section>
    )
}