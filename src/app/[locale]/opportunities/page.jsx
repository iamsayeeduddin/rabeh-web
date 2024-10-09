"use client";
import React, { useState } from "react";
import CardSlider from "@/components/CardSlider";
import Newsletter from "@/components/Newsletter";
import SupportedCompainies from "@/components/SupportedCompainies";
import TitleHead from "@/components/TitleHead";
import TrustedBy from "@/components/TrustedBy";
import UnleashInvestment from "@/components/UnleashInvestment";
import useFonts from "@/utils/useFonts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState(t("justLaunched"));

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
      category: t("justLaunched"),
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
      category: t("earlyStage"),
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
      category: t("lateStage"),
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
      category: t("completedProjects"),
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
      category: t("justLaunched"),
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
      category: t("earlyStage"),
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
      category: t("lateStage"),
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
      category: t("completedProjects"),
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
      category: t("justLaunched"),
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
      category: t("earlyStage"),
    },
  ];

  const filteredCards = allCards.filter((card) => card.category === selectedCategory);

  return (
    <div>
      <TitleHead locale={locale} title={t("opportunities")} desc={t("rabehDescription")} />
      <section className="flex flex-col items-center p-5 md:p-0">
        <div className="md:max-w-7xl w-full py-28 ">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + (locale === "en" ? fonts.spaceG.className : "")}>{t("highlightedPrjs")}</h5>
          </div>
          <div className="pt-8 w-full flex justify-center">
            <div
              className={
                "flex-row items-center justify-center md:mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer w-fit px-1 py-3 font-semibold border border-[#EAECF0] md:text-[18px] text-[12px] p-5 " +
                fonts.urbanist.className
              }
            >
              {[t("justLaunched"), t("earlyStage"), t("lateStage"), t("completedProjects")].map((category) => (
                <span
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`md:px-3 px-2 py-2 rounded-md ${selectedCategory === category ? "bg-white text-[#344054]" : "text-[#667085]"}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className={"flex items-center justify-center pt-10 " + (locale === "en" ? fonts.spaceG.className : "")}>
            <CardSlider cards={filteredCards} />
          </div>
        </div>
      </section>
      <section className={"flex flex-col items-center md:p-0 p-5 " + fonts.plusJakarta.className}>
        <div className="md:max-w-7xl flex flex-col md:flex-row gap-10">
          <div className="max-w-96">
            <h5 className="font-bold text-4xl">{t("exploreProjects")}</h5>
            <p className="text-[#0B0B0B] text-sm py-6">{t("createLandingPages")}</p>
            <div className={"flex flex-row gap-2 md:gap-4 " + (locale === "en" ? fonts.spaceG.className : "")}>
              <Link href={"/under-construction"} className="bg-primary w-fit text-white px-6 py-4 rounded-lg hover:bg-primary/80">
                {t("joinNow")}
              </Link>
              <Link href={"/under-construction"} className="text-black w-fit px-6 py-4 border border-gray-700 rounded-lg hover:bg-gray-200">
                {t("learnMore")}
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-start gap-6 p-6 border border-[#E4E4E7] rounded-xl w-full md:max-w-72">
              <img className="w-14 h-14 bg-[#004677] p-4 rounded-full" src="/assets/building-06.png" />
              <h5 className="font-bold">{t("startups")}</h5>
              <p className={"text-[#12141D] text-sm " + fonts.inter.className}>{t("createLandingPages")}</p>
            </div>
            <div className="flex flex-col items-start gap-6 p-6 border border-[#E4E4E7] rounded-xl w-full md:max-w-72">
              <img className="w-14 h-14 bg-[#004677] p-4 rounded-full" src="/assets/chart-breakout-circle.png" />
              <h5 className="font-bold">{t("businesses")}</h5>
              <p className={"text-[#12141D] text-sm " + fonts.inter.className}>{t("createLandingPages")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center md:p-0 p-5">
        <div className="md:max-w-7xl w-full py-28">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + (locale === "en" ? fonts.spaceG.className : "")}>{t("newProjects")}</h5>
          </div>
          <div className={"flex items-center justify-center pt-10 " + (locale === "en" ? fonts.spaceG.className : "")}>
            <CardSlider cards={allCards} />
          </div>
        </div>
      </section>
      <section className="bg-[#0B0B0B]">
        <div className="md:max-w-7xl mx-auto">
          <UnleashInvestment />
        </div>
      </section>
      <TrustedBy />
      <SupportedCompainies locale={locale} />
      <Newsletter />
    </div>
  );
};

export default Page;
