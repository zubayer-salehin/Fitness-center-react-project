import React from 'react';
import banner from "../../../images/Banner/banner.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='position-relative'>
            <div className="banner-picture">
                <img src={banner} alt="" />
            </div>
            <div className="banner-title-description position-absolute positionSet" >
                <h1 className='banner-title'>Build A Perfect Health Growth</h1>
                <h1 className='banner-meaning-words'>Solution For Moving Better And <br /> Living A Healthier Life</h1>
                <p className='banner-desc'>I Provide Impairing Training And Best Fitness Motivations and <br /> High Quality Equipments,Best Instructors & Training.I Offer <br /> Exclusive Services To Build Health With Professionals</p>
                <button className='discover-more'>Discover More</button>
            </div>
        </div>
    );
};

export default Banner;