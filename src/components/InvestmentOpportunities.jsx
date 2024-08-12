import React from "react";
import CardSlider from "./CardSlider";
import useFonts from "@/utils/useFonts";
import Link from "next/link";
const InvestmentOpportunities = () => {
  const fonts = useFonts();
  const cards = [
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami",
      issueNumber: "3276389",
      amount: "60,897.43",
      daysLeft: "70%",
      progress: 70,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "25-11-2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Information",
      issueNumber: "4378174",
      amount: "50,998.78",
      daysLeft: "89%",
      progress: 89,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "16-10-2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "TripPay LLC",
      issueNumber: "8743567",
      amount: "89,323.78",
      daysLeft: "82%",
      progress: 82,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "29-10-2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Robotics",
      issueNumber: "9845672",
      amount: "41,948.78",
      daysLeft: "59%",
      progress: 59,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "19-12-2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Nasia",
      issueNumber: "3582918",
      amount: "63,287.73",
      daysLeft: "77%",
      progress: 77,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "21-12-2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "RMOZ",
      issueNumber: "2145623",
      amount: "50,998.78",
      daysLeft: "77%",
      progress: 77,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "11-12-2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Picnic",
      issueNumber: "2145623",
      amount: "91,128.78",
      daysLeft: "93%",
      progress: 93,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "04-11-2024",
    },  
  ];
  return (
    <div class=" bg-[#FAFAFA] w-full h-auto md:pt-[96px] md:pr-[72px] md:pb-[112px] md:pl-[72px] md:flex-row md:gap-[64px] p-5 ">
      <div class="font-inter text-[18px] font-medium leading-[27px] text-left my-5">Unleash Investment</div> 
      <div class="font-inter text-[48px] font-semibold leading-[57.6px] tracking-[-0.01em] text-left my-5">Investment opportunities</div>
      <div class="font-inter text-[18px] font-normal leading-[27px] text-left my-5 max-w-2xl text-[#737373]">
        It offers services for fundraising, equity exchange, and business enhancement, and facilitates funds and financing and all kinds of support
        before, during, and after services.
      </div>
      <div className="md:py-2 w-full flex md:justify-start ">
        <div
          className={"flex-row w-full  md:mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer md:w-fit px-1 md:py-3 font-semibold border border-[#EAECF0] text-[12px] " + fonts.urbanist.className}
        >
          <span className={`md:px-3  py-2 rounded-md ${true ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Just Launched</span>
          <span className={`md:px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Early Stage</span>
          <span className={`md:px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Late Stage</span>
          <span className={`md:px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Completed Projects</span>
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
