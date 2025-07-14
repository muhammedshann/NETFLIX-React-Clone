import React from 'react';
import BannerImage from '../assets/banner.png';
import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <img src={BannerImage} alt="Banner"  />
            <h1>Discover stories and <br /> experiences to share with India.</h1>
            <input 
                type="text" 
                placeholder="Search for Netflix title and news" 
                className="w-full max-w-md px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
            />
            
        </div>
    )
}
export default Banner;