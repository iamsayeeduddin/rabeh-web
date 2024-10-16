"use client";

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustedBy = ({ locale }) => {
  const controls = useAnimation();
  const t = useTranslations();


  const logos = [
    { src: "/assets/logos/pif.jpg", alt: "Logo 1" },
    { src: "/assets/logos/kaust.jpg", alt: "Logo 2" },
    { src: "/assets/logos/snb.jpg", alt: "Logo 3" },
    { src: "/assets/logos/vision.jpg", alt: "Logo 4" },
    { src: "/assets/logos/raed.jpg", alt: "Logo 5" },
    { src: "/assets/logos/impact24.png", alt: "Logo 6" },
    { src: "/assets/logos/TechInvest.jpg", alt: "Logo 7" },
    { src: "/assets/logos/khwarizmi.jpg", alt: "Logo 8" },
    { src: "/assets/logos/seedra.jpg", alt: "Logo 9" },
    { src: "/assets/logos/sukna.jpg", alt: "Logo 10" },
    { src: "/assets/logos/sadu.jpg", alt: "Logo 11" },
    { src: "/assets/logos/nama.jpg", alt: "Logo 12" },
    { src: "/assets/logos/salica.jpg", alt: "Logo 13" },
    { src: "/assets/logos/waad.jpg", alt: "Logo 14" },
    { src: "/assets/logos/core.jpg", alt: "Logo 15" },
    { src: "/assets/logos/s3.jpg", alt: "Logo 16" },
    { src: "/assets/logos/sharaka.jpg", alt: "Logo 17" },









  ];


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const fonts = useFonts();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 1500,
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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="py-[24px] px-5 md:px-[72px] flex flex-col justify-center items-center gap-5  md:justify-between md:gap-0"
    >
      <div
        className={`text-[#A3A3A3] text-center md:text-left ltr:md:text-left rtl:md:text-right text-lg font-medium mb-4 md:mb-10 ${
          locale === "en" ? fonts.inter.className : ""
        }`}
      >
        {t("trustedByTxt")}
      </div>

      <div className="w-full ">
      <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="w-full flex justify-center items-center">
              <img src={logo.src} alt={logo.alt}  className="w-2/3 h-[100px] md:h-[200px] object-contain" />
            </div>
          ))}
        </Slider>
      </div>

     
    </motion.section>
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

export default TrustedBy;
