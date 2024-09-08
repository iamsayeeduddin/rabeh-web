"use client";
import React, { useCallback } from "react";
import useFonts from "@/utils/useFonts";
import { motion, useAnimation } from "framer-motion";
import { useTranslations } from "next-intl";

const WhyRabeh = () => {
  const t = useTranslations();
  const fonts = useFonts();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const handleMouseEnter = useCallback((controls) => {
    controls.start({
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, []);

  const handleMouseLeave = useCallback((controls) => {
    controls.start({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, []);

  return (
    <div className="flex flex-col mt-5 pt-20 md:h-max-[659px] md:px-24 px-5">
      <div className={"text-4xl  " + fonts.spaceG.className + " flex items-center justify-center"}>{t("whyPartnerWithRABEH")}</div>
      <div className={"flex md:flex-row flex-col mt-5 " + fonts.inter.className}>
        <div className="flex justify-between ml-0   md:m-8 mt-5 ">
          <div
            className="w-[389px] h-[363px] p-8 gap-6 rounded-[30px] flex flex-col items-start justify-center bg-white hover:shadow-custom transition-all border-2 duration-750 border-[#F0F6F9]"
            onMouseEnter={() => handleMouseEnter(controls1)}
            onMouseLeave={() => handleMouseLeave(controls1)}
          >
            <motion.div animate={controls1} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M45.1954 33.5533V33.0533V10.8533C45.1954 9.59724 45.0244 8.63144 44.7414 7.94649C44.4594 7.26396 44.0847 6.89896 43.6889 6.75039C43.2929 6.60171 42.7692 6.62971 42.1053 6.95715C41.4394 7.28559 40.6724 7.89825 39.8426 8.84013L45.1954 33.5533ZM45.1954 33.5533H45.6954H55.2229C57.3231 33.5533 58.4308 34.2 58.7871 34.9895C59.1431 35.7785 58.8954 37.0358 57.5003 38.611L57.4991 38.6124L36.6249 62.354L36.6249 62.354L34.1586 65.1595C33.3286 66.1016 32.5615 66.7144 31.8955 67.0429C31.2316 67.3703 30.7079 67.3983 30.3119 67.2496C29.9161 67.101 29.5414 66.736 29.2594 66.0535C28.9764 65.3686 28.8054 64.4028 28.8054 63.1467V40.9467V40.4467H28.3054H18.7779C16.6777 40.4467 15.57 39.8 15.2138 39.0105C14.8577 38.2215 15.1054 36.9642 16.5005 35.389L16.5017 35.3876L37.3759 11.646L37.3759 11.646L39.8422 8.84051L45.1954 33.5533Z"
                  fill="#7860DC"
                  stroke="#7860DC"
                />
              </svg>
            </motion.div>
            <h2 className="text-3xl mb-4">{t("aiAnalytics")}</h2>
            <p className="text-[18px]">{t("manageClients")}</p>
          </div>
        </div>
        <div className="flex justify-center md:m-8 mt-5 ">
          <div
            onMouseEnter={() => handleMouseEnter(controls2)}
            onMouseLeave={() => handleMouseLeave(controls2)}
            className="  w-[389px] h-[363px] p-8 gap-6 rounded-[30px]  flex flex-col items-start justify-center bg-white hover:shadow-custom transition-all border-2 border-[#F0F6F9]"
          >
            <motion.div animate={controls2} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.625 42.3958C29.625 45.3867 31.9375 47.7917 34.7742 47.7917H40.5708C43.0375 47.7917 45.0417 45.695 45.0417 43.0742C45.0417 40.2683 43.8084 39.2509 41.9892 38.6034L32.7083 35.3658C30.8892 34.7183 29.6559 33.7317 29.6559 30.895C29.6559 28.305 31.66 26.1775 34.1266 26.1775H39.9233C42.76 26.1775 45.0725 28.5825 45.0725 31.5734"
                  stroke="#7860DC"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M37.333 23.125V50.875" stroke="#7860DC" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M68.1667 37C68.1667 54.02 54.3533 67.8333 37.3333 67.8333C20.3133 67.8333 6.5 54.02 6.5 37C6.5 19.98 20.3133 6.16666 37.3333 6.16666"
                  stroke="#7860DC"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M52.75 9.25V21.5833H65.0833" stroke="#7860DC" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M68.1667 6.16666L52.75 21.5833" stroke="#7860DC" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <h2 className="text-3xl mb-4">{t("paymentsAndTransfers")}</h2>
            <p className="text-[18px]">{t("accessSalesMaterials")}</p>
          </div>
        </div>
        <div className="flex justify-center md:m-8 mt-5 ">
          <div
            onMouseEnter={() => handleMouseEnter(controls3)}
            onMouseLeave={() => handleMouseLeave(controls3)}
            className="  w-[389px] h-[363px] p-8 gap-6 rounded-[30px]  flex flex-col items-start justify-center bg-white hover:shadow-custom transition-all border-2 border-[#F0F6F9]"
          >
            <motion.div animate={controls3} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M63.875 29.2917C68.5 29.2917 68.5 30.8333 68.5 33.9167V40.0833C68.5 43.1667 68.5 44.7083 63.875 44.7083"
                  stroke="#7860DC"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.5007 24.6667L25.6732 32.375C24.4707 34.4408 25.9507 37 28.3249 37H35.4165C37.7907 37 39.2707 39.5592 38.099 41.625L31.5007 49.3333"
                  stroke="#7860DC"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.2507 58.5833C9.91732 58.5833 6.83398 55.5 6.83398 43.1667V30.8333C6.83398 18.5 9.91732 15.4167 22.2507 15.4167"
                  stroke="#7860DC"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.75 15.4167C53.0833 15.4167 56.1667 18.5 56.1667 30.8333V43.1667C56.1667 55.5 53.0833 58.5833 40.75 58.5833"
                  stroke="#7860DC"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <h2 className="text-3xl mb-4">{t("decisionSupportTools")}</h2>
            <p className="text-[18px]">{t("brexAPI")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRabeh;
