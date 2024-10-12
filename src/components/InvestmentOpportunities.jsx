"use client";
import React, { useState } from "react";
import CardSlider from "./CardSlider";
import useFonts from "@/utils/useFonts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const InvestmentOpportunities = ({ locale }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState(t("justLaunched"));

  const allCards = [
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami",
      issueNumber: "3276389",
      amount: "60,897.43",
      daysLeft: "70",
      progress: 70,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "25-11-2024",
      category: t("justLaunched"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Information",
      issueNumber: "4378174",
      amount: "50,998.78",
      daysLeft: "89",
      progress: 89,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "16-10-2024",
      category: t("earlyStage"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "TripPay LLC",
      issueNumber: "8743567",
      amount: "89,323.78",
      daysLeft: "82",
      progress: 82,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "29-10-2024",
      category: t("lateStage"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Robotics",
      issueNumber: "9845672",
      amount: "41,948.78",
      daysLeft: "59",
      progress: 59,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "19-12-2024",
      category: t("completedProjects"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Nasia",
      issueNumber: "3582918",
      amount: "63,287.73",
      daysLeft: "77",
      progress: 77,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "21-12-2024",
      category: t("justLaunched"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "RMOZ",
      issueNumber: "2145623",
      amount: "50,998.78",
      daysLeft: "77",
      progress: 77,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "11-12-2024",
      category: t("earlyStage"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Picnic",
      issueNumber: "2145623",
      amount: "91,128.78",
      daysLeft: "93",
      progress: 93,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "04-11-2024",
      category: t("lateStage"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Tech Innovations",
      issueNumber: "5274928",
      amount: "72,583.55",
      daysLeft: "65",
      progress: 65,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "15-11-2024",
      category: t("completedProjects"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "GreenTech",
      issueNumber: "6584712",
      amount: "84,765.90",
      daysLeft: "80",
      progress: 80,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "30-11-2024",
      category: t("justLaunched"),
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "NextGen Robotics",
      issueNumber: "9821475",
      amount: "56,379.45",
      daysLeft: "72",
      progress: 72,
      annualReturn: "3.50%",
      returnOnInvestment: "4.78%",
      dueDate: "10-12-2024",
      category: t("earlyStage"),
    },
  ];

  const filteredCards = allCards.filter((card) => card.category === selectedCategory);

  return (
    <div className="bg-[#FAFAFA] w-full h-auto md:pt-[96px] md:pr-[72px] md:pb-[112px] md:pl-[72px] md:flex-row md:gap-[64px] p-5">
      <div className="font-inter text-[18px] font-medium leading-[27px] ltr:text-left rtl:text-right my-5">{t("unleashInvestment")}</div>
      <div className="font-inter text-[48px] font-semibold leading-[57.6px] tracking-[-0.01em] ltr:text-left rtl:text-right my-5">
        {t("investOpp")}
      </div>
      <div className="font-inter text-[18px] font-normal leading-[27px] ltr:text-left rtl:text-right my-5 max-w-2xl text-[#737373]">
        {t("investOppSub")}
      </div>
      <div className="md:py-2 w-full flex md:justify-start">
        <div
          className={
            "flex-row w-full md:mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer md:w-fit px-1 md:py-3 font-semibold border border-[#EAECF0] text-[12px] p-5 " +
            (locale === "en" ? fonts.urbanist.className : "")
          }
        >
          <span
            className={`md:px-3 py-2 rounded-md ${selectedCategory === t("justLaunched") ? "bg-white text-[#344054]" : "text-[#667085]"}`}
            onClick={() => setSelectedCategory(t("justLaunched"))}
          >
            {t("justLaunched")}
          </span>
          <span
            className={`md:px-3 py-2 rounded-md ${selectedCategory === t("earlyStage") ? "bg-white text-[#344054]" : "text-[#667085]"}`}
            onClick={() => setSelectedCategory(t("earlyStage"))}
          >
            {t("earlyStage")}
          </span>
          <span
            className={`md:px-3 py-2 rounded-md ${selectedCategory === t("lateStage") ? "bg-white text-[#344054]" : "text-[#667085]"}`}
            onClick={() => setSelectedCategory(t("lateStage"))}
          >
            {t("lateStage")}
          </span>
          <span
            className={`md:px-3 py-2 rounded-md ${selectedCategory === t("completedProjects") ? "bg-white text-[#344054]" : "text-[#667085]"}`}
            onClick={() => setSelectedCategory(t("completedProjects"))}
          >
            {t("completedProjects")}
          </span>
        </div>
      </div>
      <div className={"flex items-center justify-center " + (locale === "en" ? fonts.spaceG.className : "")}>
        <CardSlider cards={filteredCards} />
      </div>
      <div className={"flex items-center justify-center text-primary mt-7 " + (locale === "en" ? fonts.spaceG.className : "")}>
        <Link href="/under-construction" className="hover:border-b-2 pb-1 border-primary transition-all ease-in-out duration-75">
          {t("moreInvestment")}
        </Link>
      </div>
    </div>
  );
};

export default InvestmentOpportunities;
