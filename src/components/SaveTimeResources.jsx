import React from "react";
import Image from "next/image";

const SaveTimeResources = () => {
  return (
    <div className="flex flex-col p-[72px] bg-white">
      <div className="justify-start text-sm">Reduce Engineering Effort</div>
      <div className="justify-start text-[40px] font-inter mt-5">
        Save Time and Resources
      </div>
      <div className="justify-start text-sm mt-5">
        Stop compromising between billing needs and engineering bandwidth. With
        Finto’s prebuilt interfaces and billing components
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className=" bg-white col-span-2 flex flex-row shadow-custom  m-5 h-[343px] pt-10 px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col gap-[24px] pr-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
              Diversification of the investment portfolio
            </div>
            <div className="text-left font-inter text-sm mx-10">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo .
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Image src="/Group427321207.png" width={400} height={391} />
          </div>
        </div>
        <div className="m-5  bg-white h-[343px] pt-12 px-0 pb-0 rounded-[30px] gap-0 border-2 border-[#EFF7FA]">
          <div className="flex flex-col gap-[24px] pr-20 bg-white">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
              Opportunities in different sectors
            </div>
            <div className="text-left font-inter text-sm mx-10">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo .
            </div>
          </div>
        </div>
      </div>



      <div className="grid grid-cols-3 gap-6 ">
        <div className="m-5  bg-white h-[343px] pt-12 px-0 pb-0 rounded-[30px] gap-0 border-2 border-[#EFF7FA]">
          <div className="flex flex-col gap-[24px] pr-20 bg-white">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
            Owning stakes in projects and companies            </div>
            <div className="text-left font-inter text-sm mx-10">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo .
            </div>
          </div>
        </div>
        <div className=" bg-white col-span-2 flex flex-row shadow-custom  m-5 h-[343px] pt-10 px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col gap-[24px] pr-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
            Involved in corporate growth and opportunities
            </div>
            <div className="text-left font-inter text-sm mx-10">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo .
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Image src="/halfLogo.png" width={250} height={200} className="rounded-br-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTimeResources;
