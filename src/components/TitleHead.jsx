import useFonts from "@/utils/useFonts";
import React from "react";

function TitleHead({ title, desc }) {
  const fonts = useFonts();
  return (
    <div className="py-24 px-28 bg-[url('/assets/title-bg.png')] bg-right-top bg-no-repeat">
      <div className="max-w-7xl">
        <div className="max-w-3xl">
          <h5 className={"text-[#004677] text-7xl font-bold pb-4 " + fonts.spaceG.className}>{title}</h5>
          <p className={"text-[#475467] text-xl " + fonts.urbanist.className}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default TitleHead;
