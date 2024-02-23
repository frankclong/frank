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
                <br></br>
                
                <div className = "flex items-center justify-center space-x-5 mr-4 ml-4">
                    <img src={CROCHET_DIR + "lion1.jpeg"} alt="Part 1" className="object-cover w-1/3"/>
                    <img src={CROCHET_DIR + "lion2.jpg"} alt="Part 2" className="object-cover w-1/3"/>
                    <img src={CROCHET_DIR + "lion3.jpg"} alt="Part 3" className="object-cover w-1/3"/>
                </div>
            </div>
        </section>
    )
}