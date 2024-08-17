"use client";
import React, { useState } from "react";
import CardSlider from "@/components/CardSlider";
import Newsletter from "@/components/Newsletter";
import SupportedCompainies from "@/components/SupportedCompainies";
import TitleHead from "@/components/TitleHead";
import TrustedBy from "@/components/TrustedBy";
import UnleashInvestment from "@/components/UnleashInvestment";
import useFonts from "@/utils/useFonts";
import Link from "next/link";

const Page = () => {
  const fonts = useFonts();
  const [selectedCategory, setSelectedCategory] = useState("Just Launched");

  const allCards = [
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
      category: "Just Launched",
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
      category: "Early Stage",
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
      category: "Late Stage",
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
      category: "Completed Projects",
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
      category: "Just Launched",
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
      category: "Early Stage",
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
      category: "Late Stage",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Tech Innovations",
      issueNumber: "5274928",
      amount: "72,583.55",
      daysLeft: "65%",
      progress: 65,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "15-11-2024",
      category: "Completed Projects",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "GreenTech",
      issueNumber: "6584712",
      amount: "84,765.90",
      daysLeft: "80%",
      progress: 80,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "30-11-2024",
      category: "Just Launched",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "NextGen Robotics",
      issueNumber: "9821475",
      amount: "56,379.45",
      daysLeft: "72%",
      progress: 72,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "10-12-2024",
      category: "Early Stage",
    },
  ];
  const filteredCards = allCards.filter((card) => card.category === selectedCategory);

  return (
    <div>
      <TitleHead title={"Opportunities"} desc={"Rabeh is a revolutionary fintech application that redefines the travel experience. "} />
      <section className="flex flex-col items-center p-5 md:p-0">
        <div className="md:max-w-7xl w-full py-28 ">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>Highlighted projects</h5>
          </div>
          <div className="pt-8 w-full flex justify-center">
            <div
              className={
                "flex-row items-center justify-center   md:mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer w-fit px-1 py-3 font-semibold border border-[#EAECF0] md:text-[18px] text-[12px] p-5" +
                fonts.urbanist.className
              }
            >
              {" "}
              {["Just Launched", "Early Stage", "Late Stage", "Completed Projects"].map((category) => (
                <span
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`md:px-3 py-2 rounded-md ${selectedCategory === category ? "bg-white text-[#344054]" : "text-[#667085]"}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className={"flex items-center justify-center pt-10 " + fonts.spaceG.className}>
            <CardSlider cards={cards} />
          </div>
        </div>
      </section>
      <section className={"flex flex-col items-center md:p-0 p-5" + fonts.plusJakarta.className}>
        <div className="md:max-w-7xl flex flex-col md:flex-row gap-10">
          <div className="max-w-96">
            <h5 className="font-bold text-4xl">Explore Projects</h5>
            <p className="text-[#0B0B0B] text-sm py-6">
              Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily
              build a page.
            </p>
            <div className={"flex flex-col md:flex-row  gap-2 md:gap-4 " + fonts.spaceG.className}>
              <Link href={"/under-construction"} className="bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/80">
                Join Now
              </Link>
              <Link href={"/under-construction"} className="  text-black px-6 py-4 border border-gray-700 rounded-lg hover:bg-gray-200 ">
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-start gap-6 p-6 border border-[#E4E4E7] rounded-xl max-w-72">
              <img className="w-14 h-14 bg-[#004677] p-4 rounded-full" src="/assets/building-06.png" />
              <h5 className="font-bold">Startups</h5>
              <p className={"text-[#12141D] text-sm " + fonts.inter.className}>Create beautiful landing pages with Rareblocks that converts.</p>
            </div>
            <div className="flex flex-col items-start gap-6 p-6 border border-[#E4E4E7] rounded-xl max-w-72">
              <img className="w-14 h-14 bg-[#004677] p-4 rounded-full" src="/assets/chart-breakout-circle.png" />
              <h5 className="font-bold">Businesses</h5>
              <p className={"text-[#12141D] text-sm " + fonts.inter.className}>Create beautiful landing pages with Rareblocks that converts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center md:p-0 p-5">
        <div className="md:max-w-7xl w-full py-28">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>New projects</h5>
          </div>

          <div className={"flex items-center justify-center pt-10 " + fonts.spaceG.className}>
            <CardSlider cards={cards} />
          </div>
        </div>
      </section>
      <UnleashInvestment />
      <SupportedCompainies />
      <TrustedBy />
      <div className="pb-24">
        <Newsletter />
      </div>
    </div>
  );
};

export default Page;
