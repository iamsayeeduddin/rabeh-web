"use client";

import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";

const WhatCustomerSays = ({ locale }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const testimonials = [
    {
      title: "Small Business Owner",
      description:
        "Thanks to Rabeh, I was able to expand my small business beyond my wildest dreams. The exposure and funding we received through their platform were game-changers. The entire process was smooth, and the Rabeh team was always there to guide us.",
      name: "Emily S.",
      position: "Small Business Owner",
      imageUrl: "/user3.png",
    },
    {
      title: "Non-Profit Director",
      description:
        "Rabeh helped our non-profit organization raise the necessary funds to launch our community project. Their platform made it easy to reach out to potential donors and share our mission. We couldn't have done it without their amazing support!",
      name: "Michael L.",
      position: "Non-Profit Director",
      imageUrl: "/user1.png",
    },
    {
      title: "App Developer",
      description:
        "As an app developer, securing funding can be challenging. Rabeh made it possible for us to get the backing we needed to launch our app successfully. The platform's reach and the team's dedication were key to our fundraising success.",
      name: "Sarah K.",
      position: "App Developer",
      imageUrl: "/user2.png",
    },
    {
      title: "Innovative Product Creator",
      description:
        "Rabeh was the perfect partner for our crowdfunding campaign. The exposure and support we received helped us surpass our funding goals. Their commitment to helping innovators like us is evident in every step of the process.",
      name: "David M.",
      position: "Innovative Product Creator",
      imageUrl: "/user3.png",
    },
    {
      title: "Social Entrepreneur",
      description:
        "Rabeh provided the platform and resources we needed to bring our social enterprise to life. Their team was supportive and responsive, and the crowdfunding campaign exceeded our expectations. We're now making a positive impact, thanks to Rabeh.",
      name: "Lisa P.",
      position: "Social Entrepreneur",
      imageUrl: "/user3.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={"flex flex-col md:p-[72px] p-5 bg-white " + fonts.inter.className}>
      <div className="justify-start text-lg text-medium text-[#737373]">{t("testimonials")}</div>
      <div className="justify-start text-5xl font-semibold font-inter mt-5">{t("whatCustSay")}</div>

      <div className="w-full mt-10 p-0">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="box-border flex flex-col items-start p-10 gap-[32px] bg-white border border-[#E5E5E5] shadow-[0px_4px_11px_-1px_rgba(10,10,10,0.04)] rounded-lg"
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
            >
              <p className="text-lg font-medium leading-[24px] text-left">&quot;{testimonial.description}&ldquo;</p>
              <div className="flex items-center mt-4">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4 bg-[#D9F6C6]" />
                <div>
                  <p className="text-[14px] font-inter font-medium">{testimonial.name}</p>
                  <p className="text-[12px] text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
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

export default WhatCustomerSays;
