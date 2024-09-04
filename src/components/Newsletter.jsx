import useFonts from "@/utils/useFonts";
import React from "react";

const Newsletter = () => {
  const fonts = useFonts();
  return (
    <div className={"gap-[16px] md:p-[16px] mb-5 text-center md:text-[none]  " + fonts.spaceG.className}>
      <div className="md:p-12 p-5 flex flex-col items-center justify-center ">
        <div className="text-[36px] text-secondary">Sign up for our newsletter</div>
        <div className="text-[20px] text-[#616B82] mt-2">Be the first to know about releases and industry news and insights.</div>
      </div>

      <div className="flex flex-col md:flex-row  items-center justify-center mt-3 ">
        <div className="flex p-5 md:p-0 flex-col  items-start w-[360px]">
          <input type="text" placeholder="Enter your email" className="w-full h-[48px] border border-secondary rounded-[8px] p-5 mt-3" />
          <div className="text-[14px] text-gray-500 mt-1 w-full">We care about your data in our privacy policy</div>
        </div>
        <button className="text-xl bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-[8px] ml-5">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
