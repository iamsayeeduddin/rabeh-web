'use client'
import React from "react";
import Slider from "react-slick";
import useFonts from "@/utils/useFonts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StrategicPartnerships = () => {
  const fonts = useFonts();

<<<<<<< HEAD
  const logos = [
    { src: "/group.png", alt: "Logo 1" },
    { src: "/image2446.png", alt: "Logo 2" },
    { src: "/image2445.png", alt: "Logo 3" },
    { src: "/image2441.png", alt: "Logo 4" },
    { src: "/image2444.png", alt: "Logo 5" },
    { src: "/image2443.png", alt: "Logo 6" },
    { src: "/image2439.png", alt: "Logo 7" },
    { src: "/image2442.png", alt: "Logo 8" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },  
      },
    ],
  };

  return (
    <div className={`gap-[16px] md:p-[16px] ${fonts.spaceG.className}`}>
      <div className="md:p-12 p-5 flex flex-col items-center justify-center">
        <h2 className="text-[48px] text-secondary">Strategic Partnerships</h2>
        <p className="text-[20px] text-secondary mt-2">
          Partnerships, bodies, and institutions that deal with a lawyer platform to provide you with the best services.
        </p>
      </div>
      <div className="w-full mt-10 p-5 mb-10 ">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="w-full flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-[125px] h-[100px] object-contain"
              />
            </div>
          ))}
        </Slider>
=======
      <div className="flex md:flex-row flex-col md:gap-[12px] mt-10 w-full md:h-[132px] justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-full mb-5 flex justify-center items-center">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
>>>>>>> 91f509d6370cc4bbd31674259870e948335af3f4
      </div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center border border-gray-300 transition-opacity duration-200 hover:opacity-75 absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center border border-gray-300 transition-opacity duration-200 hover:opacity-75 absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

export default StrategicPartnerships;
