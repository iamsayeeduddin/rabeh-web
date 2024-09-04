import React from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";

const SaveTimeResources = () => {
  const fonts = useFonts();
  return (
    <div className={"flex flex-col md:p-[72px] p-5 bg-white " + fonts.inter.className}>
      <div className="justify-start text-lg font-medium text-[#737373]">Reduce Engineering Effort</div>
      <div className="justify-start text-[40px] font-bold mt-5">Save Time and Resources</div>
      <div className="justify-start text-sm mt-5">
        Stop compromising between billing needs and engineering bandwidth. With Finto’s prebuilt interfaces and billing components
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 mt-6">
        <div className=" bg-white col-span-2 flex md:flex-row shadow-custom  m-5  md:pt-10 md:px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col md:gap-[24px] md:pr-20 ">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-center md:text-left font-inter m-5 md:mx-10 md:w-[400px]">
              Diversification of the investment portfolio
            </div>  
            <div className=" md:text-left text-center font-inter text-sm md:ml-10 m-5  md:w-[400px]  ">
              Achieve your goals by diversifying your investment channels in an environment <br /> with high transparency of information, digitized
              performance governance and minimizing risks under direct supervision of regulatory authorities in the experimental environment of
              financial <technology className=""></technology>
            </div>
          </div>
          <div className="hidden md:flex items-end justify-end "> 
            <img src="/Group427321207.png " width={400} height={391} />
          </div>
        </div>
        <div className="bg-white col-span-1 flex md:flex-row   m-5  md:pt-10 md:px-0 pb-0 rounded-[30px] gap-0 relative border-2 border-[#EFF7FA] ">
          <div className="flex flex-col  md:pr-20 bg-white">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-center md:text-left font-inter m-5 md:mx-10">
              Opportunities in different sectors
            </div>
            <div className="md:text-left text-center font-inter text-sm md:ml-10 m-5 mb-10 md:items">
              &quot;Invest in diverse sectors: AI, cybersecurity, telemedicine, biotech, renewable energy, sustainable real estate, eco-friendly
              goods, fintech, EdTech, gaming, AgriTech, and autonomous vehicles. Consider a platform for entrepreneurs to pitch ideas and access
              funding and mentorship.&ldquo;
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 mt-6">
      <div className=" bg-white col-span-1 flex md:flex-row   m-5  md:pt-10 md:px-0 pb-0 rounded-[30px] gap-0 relative border-2 border-[#EFF7FA] ">
          <div className="flex flex-col md:gap-[24px] md:pr-20 ">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-center md:text-left font-inter m-5 md:mx-10">
             Owning stakes in projects and companies{" "}
            </div>
            <div className=" text-center md:text-left font-inter text-sm mx-10 mb-10">
              Invest in promising projects and small to medium-sized companies engaged in innovative and emerging economic activities.
            </div>
          </div>
        </div>
        <div className=" bg-white col-span-2 flex flex-row shadow-custom  m-5  pt-10 px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col gap-[24px] pr-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10  md:w-[400px] ">
              Involved in corporate growth and opportunities
            </div>
            <div className="text-left font-inter text-sm mx-10 mb-5 md:w-[510px]">
              Support and invest in promising companies and opportunities to achieve your development and investment ambitions, fostering growth and
              innovation across various sectors and driving long-term success.
            </div>
          </div>
          <div className="hidden md:flex items-end justify-end "> 
    
            <img src="/halfLogo.png" width={250} height={220} className="rounded-br-[30px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTimeResources;
