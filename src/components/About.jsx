import React from "react";
import AboutImage from "../assets/about-bg.png";

function About() {
    return (
        <div className="relative w-full h-[400px]">
            <img
            className="w-full h-full object-cover"
            src={AboutImage}
            alt="About Netflix"
            />

            <div className="absolute top-1/2 right-16 transform -translate-y-1/2 text-right text-white space-y-4 max-w-xl z-10">
            <h1 className="text-2xl font-semibold">Looking for company assets?</h1>
            <p className="text-base">
                Get more images and information about Netflix on our company site.
            </p>
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Go to About Netflix
            </button>
            </div>
        </div>

    )
}
export default About;