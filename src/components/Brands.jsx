import React from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";

const Brands = () => {
  // Array of brand image sources with custom width and height
  const brandImages = [
    { src: "/sabic.png", width: 100, height: 40 }, // Custom width and height
    { src: "/Image3.png", width: 80, height: 30 },
    { src: "/samba.png", width: 90, height: 35 },
    { src: "/nyad.png", width: 110, height: 45 },
    { src: "/mobily.png", width: 95, height: 38 },
    { src: "/sabb.png", width: 100, height: 40 },
    { src: "/tasnee.png", width: 85, height: 32 },
  ];

  const fonts = useFonts();

  return (
    <div className={" p-[10px] " + fonts.spaceG.className}>
      <div className="p-12 flex flex-col items-center justify-center">
        <div className="text-[36px] text-secondary font-medium">Trusted by thousands of top brands</div>
      </div>

      <div className="flex flex-row gap-[12px] mt-10 w-full h-[132px] justify-center">
        {brandImages.map((logo, index) => (
          <div key={index} className="w-[1556px] h-[100px] ml-[80px] flex justify-center items-center">
            <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
