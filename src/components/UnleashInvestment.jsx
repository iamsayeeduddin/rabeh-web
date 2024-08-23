"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import ApplePlaystore from "./ApplePlaystore";
import useFonts from "@/utils/useFonts";

const UnleashInvestment = () => {
  const fonts = useFonts();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div className={"flex flex-col md:flex-row text-secondary md:mt-5 m-5 " + fonts.urbanist.className}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1 md:mr-8 pt-[128px] pb-[128px] md:px-[80px] p-5"
      >
        <h2 className="text-5xl text-inter font-semibold mb-4">Unleash Investment and grow businesses</h2>
        <div className="flex mt-[48px]">
          <div className="text-start text-[#475467] text-xl border-l-0">
            <div>Stop compromising between billing needs and engineering bandwidth. With Finto’s prebuilt interfaces and billing components</div>
          </div>
        </div>
        <div className="hover:cursor-pointer">
          <ApplePlaystore />
        </div>
      </motion.div>

      <motion.div
        className="flex-1 h-[579px] bg-white p-8 md:p-16 mt-8 md:mt-0 relative"
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img src="/Content.png" alt="Investment Projects" width={576} height={400} />
      </motion.div>
    </div>
  );
};

export default UnleashInvestment;
