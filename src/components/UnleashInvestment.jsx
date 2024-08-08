import React from "react";
import Image from "next/image";
import ApplePlaystore from "./ApplePlaystore";
import useFonts from "@/utils/useFonts";

const UnleashInvestment = () => {
  const fonts = useFonts();
  return (
    <div className={"flex flex-col md:flex-row  text-secondary mt-5 " + fonts.urbanist.className}>
      <div className="flex-1 md:mr-8   pt-[128px] pb-[128px] pl-[80px] pr-[80px]">
        <h2 className="text-5xl text-inter font-semibold mb-4 ">Unleash Investment and grow businesses</h2>
        <div className="flex  mt-[48px] ">
          <div className="text-start text-[#475467]  text-xl border-l-0 ">
            <div>Stop compromising between billing needs and engineering bandwidth. With Finto’s prebuilt interfaces and billing components</div>
          </div>
        </div>
        <div className=" ">
          <ApplePlaystore />
        </div>
      </div>

      <div className="flex-1 h-[579px] bg-white p-8 md:p-16 mt-8 md:mt-0 relative ">
        <img src="/Content.png" alt="Investment Projects" width={576} height={400} />
      </div>
    </div>
  );
};

export default UnleashInvestment;
