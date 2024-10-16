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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="py-[24px] px-[72px] flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between md:gap-0"
    >
      <div
        className={`text-[#A3A3A3] text-center md:text-left ltr:md:text-left rtl:md:text-right text-lg font-medium mb-4 md:mb-0 ${
          locale === "en" ? fonts.inter.className : ""
        }`}
      >
        {t("trustedByTxt")}
      </div>

      <div className="w-full  md:hidden">
        <Slider {...sliderSettings}>
          <div className="flex justify-center items-center  py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
            <img src="/assets/logos/pif.jpg" alt="Logo 1" width={150} />
          </div>
          <div className="flex justify-center items-center py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
            <img src="/assets/logos/kaust.jpg" alt="Logo 2" width={150} />
          </div>
          <div className="flex justify-center items-center py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
            <img src="/assets/logos/vision.jpg" alt="Logo 3" width={150} />
          </div>
          <div className="flex justify-center items-center py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
            <img src="/assets/logos/raed.jpg" alt="Logo 4" width={150} />
          </div>
        </Slider>
      </div>

      <div className="hidden md:flex md:gap-5">
        <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
          <img src="/assets/logos/pif.jpg" alt="Logo 1" width={150} />
        </div>
        <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
          <img src="/assets/logos/kaust.jpg" alt="Logo 2" width={150} />
        </div>
        <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
          <img src="/assets/logos/vision.jpg" alt="Logo 3" width={150} />
        </div>
        <div className="py-5 px-10 hover:shadow-2xl hover:scale-125 transition-all">
          <img src="/assets/logos/raed.jpg" alt="Logo 4" width={150} />
        </div>
      </div>
    </motion.section>
  );
};

export default TrustedBy;
