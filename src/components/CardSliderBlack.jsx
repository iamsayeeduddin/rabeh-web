"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const CardSlider = () => {
  const cardImages = ["/ncb.png", "/sc.png", "/amara.png", "/bank.png", "/ncb.png", "/sc.png", "/amara.png", "/bank.png"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const totalCards = cardImages.length;
  const displayCards = [...cardImages, ...cardImages, ...cardImages];

  useEffect(() => {
    if (currentIndex === totalCards) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 300);
    }

    if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalCards - 1);
      }, 300);
    }
  }, [currentIndex, totalCards]);

  const nextCard = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevCard = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="flex" ref={containerRef}>
        <div
          className={`flex transition-transform duration-300 ${isTransitioning ? "transform" : ""}`}
          style={{ transform: `translateX(-${(currentIndex + totalCards) * 356}px)` }} // Adjust the translation by the card width + margin
        >
          {displayCards.map((src, index) => (
            <div key={index} className="w-[340px] h-[210px] bg-[#2E334B] rounded-[16px] flex justify-center items-center p-4 m-2">
              <img src={src} alt={`Card Image ${(index % totalCards) + 1}`} width={266} height={150} className="object-contain opacity-50" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={prevCard} className="w-[44px] h-[44px] rounded-full flex justify-center items-center border border-gray-400 opacity-40 mr-2">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.9998 20.9069L8.47984 14.3869C7.70984 13.6169 7.70984 12.3569 8.47984 11.5869L14.9998 5.06689"
              stroke="#FCFDFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button onClick={nextCard} className="w-[44px] h-[44px] rounded-full flex justify-center items-center border border-gray-400 opacity-40">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.91016 20.9069L15.4302 14.3869C16.2002 13.6169 16.2002 12.3569 15.4302 11.5869L8.91016 5.06689"
              stroke="#FCFDFE"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
