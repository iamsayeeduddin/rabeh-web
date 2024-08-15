import React from "react";
import useFonts from "@/utils/useFonts";

const Brands = () => {
  const brandImages = [
    { src: "/sabic.png", width: 100, height: 40 },
    { src: "/Image3.png", width: 80, height: 30 },
    { src: "/samba.png", width: 90, height: 35 },
    { src: "/nyad.png", width: 110, height: 45 },
    { src: "/mobily.png", width: 95, height: 38 },
    { src: "/sabb.png", width: 100, height: 40 },
    { src: "/tasnee.png", width: 85, height: 32 },
  ];

  const fonts = useFonts();

  return (
    <div className={" md:p-[10px] " + fonts.spaceG.className}>
      <div className="md:p-12 p-5 flex flex-col items-center justify-center">
        <div className="text-[36px] text-secondary font-medium">Trusted by thousands of top brands</div>
      </div>

      <div className="flex md:flex-row flex-col gap-[12px] mt-10 w-full md:h-[132px] justify-center ">
        {brandImages.map((logo, index) => (
          <div key={index} className="md:w-[1556px] md:h-[100px] md:ml-[80px] flex justify-center items-center mt-5">
            <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
