'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const CardSlider = () => {
  // Sample card images
  const cardImages = [
    '/ncb.png',
    '/sc.png',
    '/amara.png',
    '/bank.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + cardImages.length) % cardImages.length
    );
  };

  return (
    <div className="relative mt-10">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardImages.map((src, index) => (
            <div key={index} className="w-[340px] h-[210px] bg-[#2E334B] rounded-[16px] flex justify-center items-center p-4 m-2">
              <Image
                src={src}
                alt={`Card Image ${index + 1}`}
                width={266} 
                height={150} 
                className="object-contain opacity-50"  
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider Buttons */}
      <div className="flex justify-end mt-4">
        <button
          onClick={prevCard}
          className="w-[44px] h-[44px] rounded-full flex justify-center items-center border border-gray-400 opacity-40 mr-2"
        >
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9998 20.9069L8.47984 14.3869C7.70984 13.6169 7.70984 12.3569 8.47984 11.5869L14.9998 5.06689" stroke="#FCFDFE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={nextCard}
          className="w-[44px] h-[44px] rounded-full flex justify-center items-center border border-gray-400 opacity-40"
        >
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.91016 20.9069L15.4302 14.3869C16.2002 13.6169 16.2002 12.3569 15.4302 11.5869L8.91016 5.06689" stroke="#FCFDFE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
