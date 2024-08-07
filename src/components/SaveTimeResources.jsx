import React from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";

const SaveTimeResources = () => {
  const fonts = useFonts();
  return (
    <div className={"flex flex-col p-[72px] bg-white " + fonts.inter.className}>
      <div className="justify-start text-lg font-medium text-[#737373]">
        Reduce Engineering Effort
      </div>
      <div className="justify-start text-[40px] font-bold mt-5">
        Save Time and Resources
      </div>
      <div className="justify-start text-sm mt-5">
        Stop compromising between billing needs and engineering bandwidth. With
        Finto’s prebuilt interfaces and billing components
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className=" bg-white col-span-2 flex flex-row shadow-custom  m-5  pt-10 px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col gap-[24px] pr-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
              Diversification of the investment portfolio
            </div>
            <div className="text-left font-inter text-sm ml-10 mr">
              Achieve your goals by diversifying your investment channels in an
              environment <br /> with high transparency of information,
              digitized performance governance and minimizing risks under direct
              supervision of regulatory authorities in the experimental
              environment of financial <technology className=""></technology>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Image src="/Group427321207.png" width={400} height={391} />
          </div>
        </div>
        <div className="m-5  bg-white  pt-12 px-0 pb-0 rounded-[30px] gap-0 border-2 border-[#EFF7FA]">
          <div className="flex flex-col gap-[24px] pr-20 bg-white">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
              Opportunities in different sectors
            </div>
            <div className="text-left font-inter text-sm mx-10 mb-10">
              "Invest in diverse sectors: AI, cybersecurity, telemedicine,
              biotech, renewable energy, sustainable real estate, eco-friendly
              goods, fintech, EdTech, gaming, AgriTech, and autonomous vehicles.
              Consider a platform for entrepreneurs to pitch ideas and access
              funding and mentorship. "
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 ">
        <div className="m-5  bg-white  pt-12 px-0 pb-0 rounded-[30px] gap-0 border-2 border-[#EFF7FA]">
          <div className="flex flex-col gap-[24px] pr-20 bg-white">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
              Owning stakes in projects and companies{" "}
            </div>
            <div className="text-left font-inter text-sm mx-10 mb-10">
              Invest in promising projects and small to medium-sized companies
              engaged in innovative and emerging economic activities.
            </div>
          </div>
        </div>
        <div className=" bg-white col-span-2 flex flex-row shadow-custom  m-5 h-[343px] pt-10 px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col gap-[24px] pr-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left font-inter  mx-10 ">
              Involved in corporate growth and opportunities
            </div>
            <div className="text-left font-inter text-sm mx-10">
              Support and invest in promising companies and opportunities to
              achieve your development and investment ambitions, fostering
              growth and innovation across various sectors and driving long-term
              success.
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Image
              src="/halfLogo.png"
              width={250}
              height={200}
              className="rounded-br-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTimeResources;
