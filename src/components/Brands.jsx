"use client";
import React from "react";
import Slider from "react-slick";
import useFonts from "@/utils/useFonts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const fonts = useFonts();

  const brandImages = [
    { src: "/sabic.png", alt: "Sabic" },
    { src: "/Image3.png", alt: "Image3" },
    { src: "/samba.png", alt: "Samba" },
    { src: "/nyad.png", alt: "Nyad" },
    { src: "/mobily.png", alt: "Mobily" },
    { src: "/sabb.png", alt: "SABB" },
    { src: "/tasnee.png", alt: "Tasnee" },
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
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={"md:p-[10px] " + fonts.spaceG.className}>
      <div className="md:p-12 p-5 flex flex-col items-center justify-center">
        <div className="text-[36px] text-secondary font-medium">Trusted by thousands of top brands</div>
      </div>

      <div className="w-full mt-10 mb-10   p-0">
        <Slider {...settings}>
          {brandImages.map((logo, index) => (
            <div key={index} className="flex justify-center items-center  h-[40px] md:w-[155px] md:h-[60px]">
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
            </div>
          ))}
        </Slider>
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
      className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center border border-gray-300 transition-opacity duration-200 hover:opacity-75 absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

export default Brands;
