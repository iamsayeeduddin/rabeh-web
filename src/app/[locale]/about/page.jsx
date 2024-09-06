"use client";
import CardSlider from "@/components/CardSlider";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import SupportedCompainies from "@/components/SupportedCompainies";
import TitleHead from "@/components/TitleHead";
import useFonts from "@/utils/useFonts";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import ClickTabs from "./ClickTabs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Page = () => {
  const fonts = useFonts();

  const t = useTranslations();
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value as needed
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value as needed
  });

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

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

  const team = [
    {
      name: "Mohammed Alsolami",
      title: "Founder & CEO",
      img: "/assets/mohd_alosaimi.png",
    },
    {
      name: "Mohammed Alomar",
      title: "Board Member",
      img: "/assets/mohd_alomar.png",
    },
    {
      name: "Anas Alsalman",
      title: "Board Member",
      img: "/assets/anas_alsalman.png",
    },
    {
      name: "Houda Ahmed",
      title: "Head of Investment",
      img: "/assets/houda_ahmed.png",
    },
  ];

  return (
    <div>
      <TitleHead title={t("about")} desc={t("aboutSub")} />
      <section className="flex flex-col items-center p-5 md:p-0">
        <div className="max-w-3xl text-center">
          <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>{t("aboutRabeh")}</h5>
          <p>{t("aboutRabehSub")}</p>
        </div>
        <div className={"flex flex-col md:flex-row gap-6 pt-20 " + fonts.spaceG.className}>
          <motion.div
            ref={visionRef}
            variants={fadeInVariant}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            className="group flex flex-col gap-4 max-w-xl px-10 py-14 bg-[#F9F9FB] hover:bg-[#7860DC] rounded-3xl border border-[#0206171B] transition-all duration-200"
          >
            <img src="/assets/logo_mini.png" className="pb-4 group-hover:hidden" height={35} width={30} />
            <img src="/assets/logo_mini_light.png" className="pb-4 hidden group-hover:block" height={35} width={30} />
            <h5 className="font-medium text-2xl group-hover:text-white">{t("ourVision")}</h5>
            <p className="text-[#36364A] group-hover:text-white">{t("oVSub")}</p>
          </motion.div>
          <motion.div
            ref={visionRef}
            variants={fadeInVariant}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            className="group flex flex-col gap-4 max-w-xl px-10 py-14 bg-[#F9F9FB] hover:bg-[#7860DC] rounded-3xl border border-[#0206171B] transition-all duration-200"
          >
            <img src="/assets/logo_mini.png" className="pb-4 group-hover:hidden" height={35} width={30} />
            <img src="/assets/logo_mini_light.png" className="pb-4 hidden group-hover:block" height={35} width={30} />
            <h5 className="font-medium text-2xl group-hover:text-white">{t("ourMission")}</h5>
            <p className="text-[#36364A] group-hover:text-white">{t("oMSub")}</p>
          </motion.div>
        </div>
      </section>
      <section className={"flex flex-col items-center p-5  md:px-32 md:py-24 " + fonts.spaceG.className}>
        <div className="max-w-7xl">
          <div className="w-full space-y-4 pb-12">
            <h5 className="font-bold text-4xl">{t("whyChooseRabeh")}</h5>
            <p className="max-w-xl text-lg">{t("whyCRabehSub")}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center md:flex-row gap-6"
          >
            <div className="hover:scale-110 hover:border hover:border-primary transition-transform w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-1.png" width={26} height={26} />
                {t("innovTech")}
              </span>
              <p className="text-sm text-[#525252]">{t("innovTechSub")}</p>
            </div>
            <div className="hover:scale-110 hover:border hover:border-primary transition-transform w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-5.png" width={26} height={26} />
                {t("globalReach")}
              </span>
              <p className="text-sm text-[#525252]">{t("globalReachSub")}</p>
            </div>
            <div className="hover:scale-110 hover:border hover:border-primary transition-transform w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-4.png" width={26} height={26} />
                {t("entreSupport")}
              </span>
              <p className="text-sm text-[#525252]">{t("entreSupportSub")}</p>
            </div>
            <div className="hover:scale-110 hover:border hover:border-primary transition-transform w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-6.png" width={26} height={26} />
                {t("investorEmp")}
              </span>
              <p className="text-sm text-[#525252]">{t("investorEmpSub")}</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="flex flex-col items-center p-5 md:p-0">
        <div className="max-w-7xl">
          <div className="flex justify-between w-full pb-12 md:flex-row flex-col">
            <h5 className={"w-full md:w-1/2 text-[#263238] font-bold text-4xl " + fonts.spaceG.className}>{t("howItWorks")}</h5>
            <p className="text-lg text-[#667085] mt-5 md:mt-0 text-justify">{t("howItWorksSub")}</p>
          </div>
          <div className={"flex flex-col md:flex-row justify-between  " + fonts.inter.className}>
            <div className="rounded-3xl drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all md:w-96 bg-white p-8 flex flex-col gap-4">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">{t("forEntre")}</h5>
              <p className="text-[#667085]">{t("forEntreSub")}</p>

              <Link
                href="/under-construction"
                className={"pt-4 font-medium gap-2 items-center text-[#667085] flex hover:text-[#7860DC] cursor-pointer " + fonts.spaceG.className}
              >
                {t("joinEntreCommu")} <FaChevronRight />
              </Link>
            </div>
            <div className="rounded-3xl drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all md:w-96 bg-white p-8 flex flex-col gap-4 mt-5 md:mt-0">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">{t("forInvestors")}</h5>
              <p className="text-[#667085]">{t("forInvestorsSub")}</p>

              <Link
                href="/under-construction"
                className={"pt-4 font-medium gap-2 items-center text-[#667085] flex hover:text-[#7860DC] cursor-pointer " + fonts.spaceG.className}
              >
                {t("joinInvestorsHub")} <FaChevronRight />
              </Link>
            </div>
            <div className="rounded-3xl drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all md:w-96 bg-white p-8 flex flex-col gap-4 mt-5 md:mt-0">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">{t("forConsultants")}</h5>
              <p className="text-[#667085]">{t("forConsultantsSub")}</p>

              <Link
                href="/under-construction"
                className={"pt-4 font-medium gap-2 items-center text-[#667085] flex hover:text-[#7860DC] cursor-pointer " + fonts.spaceG.className}
              >
                {t("joinConsultantsHub")} <FaChevronRight />
              </Link>
            </div>
          </div>
          <ClickTabs />
        </div>
      </section>
      <section className="flex flex-col items-center p-5 md:p-0 ">
        <div className="max-w-7xl py-24">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>{t("advancedTech")}</h5>
            <p className={"text-[#667085] " + fonts.inter.className}>{t("advancedTechSub")}</p>
          </div>
          <div className={"pt-24 gap-4 flex md:flex-row flex-col justify-between " + fonts.spaceG.className}>
            <div className="md:w-96 bg-[#FAFAFA] hover:bg-[#7860DC] hover:scale-105 transition-all rounded-3xl p-6 flex flex-col gap-2 group">
              <img src="/assets/img-1.png" />
              <h5 className="font-bold text-2xl group-hover:text-white">{t("aiFull")}</h5>
              <p className="text-[#525252] group-hover:text-white">{t("aiFullSub")}</p>
            </div>
            <div className="w-96 bg-[#FAFAFA] hover:bg-[#7860DC] hover:scale-105 transition-all group rounded-3xl p-6 flex flex-col gap-2">
              <img src="/assets/img-2.png" />
              <h5 className="font-bold text-2xl group-hover:text-white">{t("blockChainSec")}</h5>
              <p className="text-[#525252] group-hover:text-white">{t("blockChainSecSub")}</p>
            </div>
            <div className="w-96 bg-[#FAFAFA] hover:bg-[#7860DC] hover:scale-105 transition-all group rounded-3xl p-6 flex flex-col gap-2">
              <img src="/assets/img-3.png" />
              <h5 className="font-bold text-2xl group-hover:text-white">{t("decisionSupportTools")}</h5>
              <p className="text-[#525252] group-hover:text-white">{t("decisionSupportToolsSub")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center p-5 md:p-0 ">
        <div className="md:max-w-7xl w-full md:py-24">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>{t("discoverTitle")}</h5>
            <p className={"text-[#667085] " + fonts.inter.className}>{t("discoverSub")}</p>
          </div>
          <div className="pt-8 w-full flex items-center justify-center ">
            <div
              className={
                "flex-row items-center justify-center   md:mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer w-fit px-1 py-3 font-semibold border border-[#EAECF0] md:text-[18px] text-[12px] p-5" +
                fonts.urbanist.className
              }
            >
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
            <div className="pt-8 w-full flex items-center justify-center ">
              <div
                className={
                  "flex-row items-center justify-center   md:mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer w-fit px-1 py-3 font-semibold border border-[#EAECF0] md:text-[18px] text-[12px] p-5" +
                  fonts.urbanist.className
                }
              >
                {["Just Launched", "Early Stage", "Late Stage", "Completed Projects"].map((category) => (
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
            <div className={"flex items-center justify-center py-3 md:pt-10 " + fonts.spaceG.className}>
              <CardSlider cards={filteredCards} />
            </div>
          </div>
        </div>
      </section>
      <SupportedCompainies />
      <section className="flex flex-col items-center">
        <div className="max-w-7xl flex flex-col items-center p-10 md:p-24">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>{t("meetOurTeam")}</h5>
            <p className={"text-[#667085] max-w-3xl " + fonts.inter.className}>{t("meetOurTeamSub")}</p>
          </div>
          <div className="flex flex-col md:flex-row  justify-between gap-11 pt-16">
            {team.map((member, index) => (
              <div key={index + member.title} className={"flex px-10 flex-col justify-between items-center " + fonts.inter.className}>
                <img src={member.img} className="mb-5 w-24 h-24 rounded-full" />
                <h5 className="text-lg font-semibold md:text-start text-center  ">{member.name}</h5>
                <p className="text-[#6941C6] text-center">{member.title}</p>
                <div className="flex space-x-4 text-[#98A2B3] pt-4">
                  <FaTwitter />
                  <FaLinkedin />
                  <FaFacebook />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#F9F9FB]">
        <StrategicPartnerships bottomSpacing={false} />
      </div>
    </div>
  );
};

export default Page;
