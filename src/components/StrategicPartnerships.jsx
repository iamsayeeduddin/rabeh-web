import React from "react";
import useFonts from "@/utils/useFonts";

const logos = [
  { src: "/group.png", alt: "Logo 1", width: 125.37, height: 100 },
  { src: "/image2446.png", alt: "Logo 2", width: 125.37, height: 100 },
  { src: "/image2445.png", alt: "Logo 3", width: 107.92, height: 100 },
  { src: "/image2441.png", alt: "Logo 4", width: 117, height: 100 },
  { src: "/image2444.png", alt: "Logo 4", width: 131.59, height: 100 },
  { src: "/image2443.png", alt: "Logo 4", width: 131.59, height: 100 },
  { src: "/image2439.png", alt: "Logo 5", width: 131.59, height: 100 },
  { src: "/image2442.png", alt: "Logo 6", width: 137.11, height: 100 },
];

const StrategicPartnerships = () => {
  const fonts = useFonts();
  return (
    <div className={"gap-[16px] md:p-[16px] " + fonts.spaceG.className}>
      <div className="md:p-12 p-5 flex flex-col items-center justify-center">
        <div className="text-[48px] text-secondary">Strategic Partnerships</div>
        <div className="text-[20px] text-secondary mt-2">
          Partnerships, bodies and institutions that deal with a lawyer platform to provide you with the best services.
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:gap-[12px] mt-10 w-full md:h-[132px] justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-full mb-5 flex justify-center items-center">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategicPartnerships;
