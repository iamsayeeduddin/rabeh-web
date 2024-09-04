import React from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";
const RestAssured = () => {
  const fonts = useFonts();
  return (
    <div className={"flex flex-col md:flex-row bg-secondary text-white  " + fonts.inter.className}>
      <div className="flex-1 md:mr-8   pt-[128px] pb-[128px] pl-[80px] pr-[80px]">
        <h2 className={"text-4xl font-bold mb-4 " + fonts.spaceG.className}>Rest Assured</h2>
        <p className={"mt-8 "}>All Financing And Investment Campaigns In Rabeh Are Compatible With Islamic Sharia And Regulations</p>
        <div className="flex md:space-x-8 mt-[48px] flex-col md:flex-row gap-5  ">
          <div className="text-start border-l-0 ">
            <div className="text-3xl font-bold">132+</div>
            <div>
              Completed Projects<br></br> & Opportunities
            </div>
          </div>
          <div className="text-start  md:pl-10 md:border-l-2 border-l-white">
            <div className="text-3xl font-bold">85</div>
            <div>Entrepreneurs</div>
          </div>
          <div className="md:text-start   md:pl-10 md:border-l-2 md:border-l-white">
            <div className="text-3xl font-bold">150M</div>
            <div>Investors</div>
          </div>
        </div>
      </div>

      <div className="flex-1  ">
        <img src="/image-1.png" alt="Investment Projects" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default RestAssured;
