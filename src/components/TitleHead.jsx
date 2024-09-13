import useFonts from "@/utils/useFonts";
import React from "react";

function TitleHead({ title, desc }) {
  const fonts = useFonts();
  return (
    <div className="py-12 px-6 sm:py-16 sm:px-10 md:py-24 md:px-20 bg-[url('/assets/title-bg.png')] bg-[length:300px_100px] rtl:bg-none md:bg-auto ltr:bg-right-top rtl:bg-left-top bg-no-repeat">
      <div className="max-w-full md:max-w-7xl">
        <div className="max-w-full sm:max-w-3xl">
          <h5 className={"text-[#004677] text-4xl sm:text-5xl md:text-7xl font-bold pb-4 " + fonts.spaceG.className}>{title}</h5>
          <p className={"text-[#475467] text-base sm:text-lg md:text-xl " + fonts.urbanist.className}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default TitleHead;
