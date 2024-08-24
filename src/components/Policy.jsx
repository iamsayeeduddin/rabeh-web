import React from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";
import Link from "next/link";

const cardData = [
  {
    imageSrc: "/image2452.png",
    width: 242,
    height: 242,
    title: "Compliance with legal provisions and controls",
    description:
      "At Alliance Finance, we comply with the controls and provisions of Islamic Sharia, by appointing a Sharia committee to provide... Advice, periodic review, Sharia oversight of operations, and review and approval of contracts and documents Policies and procedures, to comply with Sharia controls and standards.",
  },
  {
    imageSrc: "/assets/logos/cma.jpg",
    width: 400,
    height: 70,
    title: "Authorized by the Capital Market Authority",
    description:
      "Under Licensing procedures to obtain the license from the Capital Market Authority, Authorized by the Capital Market Authority to practice financial technology activity in securities business",
  },
];

const Policy = () => {
  const fonts = useFonts();
  return (
    <div className={"flex flex-col md:p-[100px] p-5 bg-white " + fonts.inter.className}>
      <div className="justify-start text-[40px] font-inter mt-5">Policy</div>
      <div className="text-[18px] text-start text-[#737373] max-w-3xl">
        Rabeh Financial Company is under the permit procedures of the Capital Market Authority and under the supervision of the Central Bank of Saudi
        Arabia to test its innovative products in the experimental environment (Sandbox) for more.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 mt-10">
        {cardData.map((card, index) => (
          <div key={index} className="max-w-[568px] p-[16px] border border-[#E5E5E5] rounded-md">
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-center">
                <div className="h-[350px] w-[536px] px-[5px] border border-[#E5E5E5] bg-[#FAFAFA]  flex items-center justify-center overflow-hidden">
                  <img src={card.imageSrc} alt="Compliance" width={card.width} height={card.height} className="object-contain" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="mt-2 text-gray-700">{card.description}</p>
              </div>
              <div className="mt-4 ">
                <Link href="/under-construction" className="bg-primary w-fit text-white px-4 py-2 rounded-[4px] text-sm flex items-center">
                  Learn More
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 10.9634H15.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 5.71338L15.25 10.9634L10 16.2134" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
