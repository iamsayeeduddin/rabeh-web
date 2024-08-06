import React from "react";
import CardSlider from "./CardSlider";
import useFonts from "@/utils/useFonts";
import Link from "next/link";
const InvestmentOpportunities = () => {
  const fonts = useFonts();
  const cards = [
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 1",
      issueNumber: "28990",
      amount: "60,897.34",
      daysLeft: "29",
      progress: 70,
      annualReturn: "+3,50%",
      returnOnInvestment: "+3,50%",
      dueDate: "12/2/2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 2",
      issueNumber: "28991",
      amount: "50,897.34",
      daysLeft: "20",
      progress: 60,
      annualReturn: "+3,60%",
      returnOnInvestment: "+3,60%",
      dueDate: "10/2/2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 3",
      issueNumber: "28992",
      amount: "70,897.34",
      daysLeft: "25",
      progress: 80,
      annualReturn: "+3,70%",
      returnOnInvestment: "+3,70%",
      dueDate: "11/2/2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 4",
      issueNumber: "28992",
      amount: "70,897.34",
      daysLeft: "25",
      progress: 80,
      annualReturn: "+3,70%",
      returnOnInvestment: "+3,70%",
      dueDate: "11/2/2024",
    },
  ];
  return (
    <div class=" bg-[#FAFAFA] w-min-[1440px] h-auto pt-[96px] pr-[72px] pb-[112px] pl-[72px] flex-row gap-[64px] ">
      <div class="font-inter text-[18px] font-medium leading-[27px] text-left my-5">Unleash Investment</div>
      <div class="font-inter text-[48px] font-semibold leading-[57.6px] tracking-[-0.01em] text-left my-5">Investment opportunities</div>
      <div class="font-inter text-[18px] font-normal leading-[27px] text-left my-5 max-w-2xl text-[#737373]">
        It offers services for fundraising, equity exchange, and business enhancement, and facilitates funds and financing and all kinds of support
        before, during, and after services.
      </div>
      <div className="py-2 w-full flex justify-start">
        <div
          className={"mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer w-fit px-1 py-3 font-semibold border border-[#EAECF0] " + fonts.urbanist.className}
        >
          <span className={`px-3 py-2 rounded-md ${true ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Just Launched</span>
          <span className={`px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Early Stage</span>
          <span className={`px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Late Stage</span>
          <span className={`px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Completed Projects</span>
        </div>
      </div>
      <div className={"flex items-center justify-center " + fonts.spaceG.className}>
        <CardSlider cards={cards} />
      </div>
      <div className={"flex items-center justify-center text-primary mt-7 " + fonts.spaceG.className}>
        <Link href="/under-construction">More Investment</Link>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
