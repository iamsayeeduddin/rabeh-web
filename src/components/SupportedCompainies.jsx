import React from "react";
import CardSlider from "./CardSliderBlack";
import useFonts from "@/utils/useFonts";

const SupportedCompainies = () => {
  const fonts = useFonts();
  return (
    <div className="bg-secondary h-max-[653px] w-max-[] p-[75px]  ">
      <div className="grid grid-cols-2 ">
        <div className={"text-white text-start font-inter font-bold px-20 text-[32px] " + fonts.spaceG.className}>
          Supported more than 150+ companies worldwide
        </div>
        <div className={"text-[#7F879E] font-medium text-start font-inter px-20 text-lg " + fonts.inter.className}>
          We&apos;ve worked with hundreds of companies that have made jobify a platform to get employees for them. Interested in becoming a partner?
          <div className="text-white texxt-start text-[18px] mt-5 underline">Register Partner</div>
        </div>
      </div>

      <CardSlider />
    </div>
  );
};

export default SupportedCompainies;
