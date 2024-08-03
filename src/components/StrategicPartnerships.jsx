import React from 'react';
import Image from 'next/image';

const logos = [
  { src: "/group.png", alt: "Logo 1", width: 125.37, height: 100 },
  { src: "/image2446.png", alt: "Logo 2", width: 125.37, height: 100 },
  { src: "/image2445.png", alt: "Logo 3", width: 107.92, height: 100 },
  { src: "/image2441.png", alt: "Logo 4", width: 117, height: 100 },
  { src: "/image2444.png", alt: "Logo 4", width: 131.59, height: 100 },
  { src: "/image2443.png", alt: "Logo 4", width: 131.59, height: 100 },
  { src: "/image2439.png", alt: "Logo 5", width: 131.59, height: 100 },
  { src: "/image2442.png", alt: "Logo 6", width: 137.11, height: 100 },
  // Add more logos as needed
];

const StrategicPartnerships = () => {
  return (
    <div className='gap-[16px] p-[16px]'>
      <div className="p-12 flex flex-col items-center justify-center">
        <div className="text-[48px] text-secondary">Strategic Partnerships</div>
        <div className="text-[20px] text-secondary mt-2">
          Partnerships, bodies and institutions that deal with a lawyer platform to provide you with the best services.
        </div>
      </div>

      <div className="flex flex-row gap-[12px] mt-10 w-full h-[132px] justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-[1556px] h-[100px] ml-[80px] flex justify-center items-center">
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategicPartnerships;
