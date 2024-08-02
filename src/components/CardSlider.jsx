"use client";
import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-custom.css';  // Make sure this file is present

const CardSlider = ({ cards, onInvestClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className=" ">
            <ProjectCard 
              {...card} 
              onInvestClick={() => onInvestClick(card.projectName)} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const {  onClick } = props;
  return (
    <div
      className={` bg-white rounded-full p-2 shadow-lg flex items-center justify-center border border-gray-300 transition-opacity duration-200 hover:opacity-75 absolute top-1/2 right-0 transform -translate-y-1/2 z-10`}
      onClick={onClick}
    >
      <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={` bg-white rounded-full p-2 shadow-lg flex items-center justify-center border border-gray-300 transition-opacity duration-200 hover:opacity-75 absolute top-1/2 left-0 transform -translate-y-1/2 z-10`}
      onClick={onClick}
    >
      <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

export default CardSlider;
