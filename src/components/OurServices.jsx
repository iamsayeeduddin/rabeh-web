"use client";
import React, { useState } from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";

const OurServices = () => {
  const [activeCard, setActiveCard] = useState(null);
  const fonts = useFonts();

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <section
      className={`flex justify-between items-start py-10 h-max-[659px] px-24 mt-10 ${fonts.inter.className}`}
    >
      <div className="flex flex-col w-1/2">
        <h2 className={`text-3xl font-semibold ${fonts.spaceG.className}`}>
          Our Services
        </h2>
        <p className="text-gray-600 mb-8 mt-5">
          Consolidate A/R: Unify revenue from all online sales channels,
          simplifying financial management.
        </p>
        <div
          className={`flex items-start space-x-4 p-4 border-l-2 ${
            activeCard === 0 ? "border-primary" : "border-[#CFD3DE]"
          }`}
          onClick={() => handleCardClick(0)}
        >
          <div className="flex-shrink-0">
            <div className=" ">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5217_8462)">
                  <path
                    d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
                    fill="#7860DC"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M23 31L16 35V19L23 15M23 31L30 35M23 31V15M30 35L36 31V15L30 19M30 35V19M30 19L23 15"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5217_8462"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5217_8462"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5217_8462"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Track Services</h3>
            <p className="text-[#6C7278]">
              Track Services and Set Aside Money in Real-Time Reservations;
              Easily manage bookings, track services, and allocate funds on the
              spot, ensuring a seamless experience for your clients.
            </p>
            <a
              href="#"
              className="text-primary flex items-center space-x-1 mt-2"
            >
              <span>Learn more</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`flex items-start space-x-4 p-4 border-l-2 ${
            activeCard === 1 ? "border-primary" : "border-[#CFD3DE]"
          }`}
          onClick={() => handleCardClick(1)}
        >
          <div className="flex-shrink-0">
            <div className="">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5217_8475)">
                  <path
                    d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
                    fill="#00B8D9"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M31.7453 29C32.5362 27.8661 33 26.4872 33 25C33 24.4851 32.9444 23.9832 32.8389 23.5M20.2547 29C19.4638 27.8662 19 26.4872 19 25C19 21.134 22.134 18 26 18C26.4221 18 26.8355 18.0374 27.2371 18.109M30.4999 20.5L25.9999 25M36 25C36 30.5228 31.5228 35 26 35C20.4772 35 16 30.5228 16 25C16 19.4772 20.4772 15 26 15C31.5228 15 36 19.4772 36 25ZM27 25C27 25.5523 26.5523 26 26 26C25.4477 26 25 25.5523 25 25C25 24.4477 25.4477 24 26 24C26.5523 24 27 24.4477 27 25Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5217_8475"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5217_8475"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5217_8475"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Customized Itinerary Planning
            </h3>
            <p className="text-[#6C7278]">
              Rabeh provides travel agencies with a powerful tool for creating
              and sharing customized itineraries for their clients.
            </p>
            <a
              href="#"
              className="text-primary flex items-center space-x-1 mt-2"
            >
              <span>Learn more</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`flex items-start space-x-4 p-4 border-l-2 ${
            activeCard === 2 ? "border-primary" : "border-[#CFD3DE]"
          }`}
          onClick={() => handleCardClick(2)}
        >
          <div className="flex-shrink-0">
            <div className="">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5217_8488)">
                  <path
                    d="M2 11C2 5.47715 6.47715 1 12 1H40C45.5229 1 50 5.47715 50 11V39C50 44.5229 45.5228 49 40 49H12C6.47715 49 2 44.5228 2 39V11Z"
                    fill="#00B8D9"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M18 34L18 17M18 26H25.4C25.9601 26 26.2401 26 26.454 25.891C26.6422 25.7951 26.7951 25.6422 26.891 25.454C27 25.2401 27 24.9601 27 24.4V17.6C27 17.0399 27 16.7599 26.891 16.546C26.7951 16.3578 26.6422 16.2049 26.454 16.109C26.2401 16 25.9601 16 25.4 16H19.6C19.0399 16 18.7599 16 18.546 16.109C18.3578 16.2049 18.2049 16.3578 18.109 16.546C18 16.7599 18 17.0399 18 17.6V26ZM27 18H33.4C33.9601 18 34.2401 18 34.454 18.109C34.6422 18.2049 34.7951 18.3578 34.891 18.546C35 18.7599 35 19.0399 35 19.6V26.4C35 26.9601 35 27.2401 34.891 27.454C34.7951 27.6422 34.6422 27.7951 34.454 27.891C34.2401 28 33.9601 28 33.4 28H28.6C28.0399 28 27.7599 28 27.546 27.891C27.3578 27.7951 27.2049 27.6422 27.109 27.454C27 27.2401 27 26.9601 27 26.4V18Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5217_8488"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5217_8488"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5217_8488"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Real-Time Group Management
            </h3>
            <p className="text-[#6C7278]">
              For travel agencies handling group bookings, Rabeh offers
              real-time group management features. Agencies can efficiently
              manage group reservations, track group member information, and
              communicate updates instantly.
            </p>
            <a
              href="#"
              className="text-primary flex items-center space-x-1 mt-2"
            >
              <span>Learn more</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-end mt-8 ">
        <Image
          src="/assets/image.png"
          alt="Our Services Image"
          width={500}
          height={500}
          className="rounded-3xl mt-5"
        />
      </div>
    </section>
  );
};

export default OurServices;
