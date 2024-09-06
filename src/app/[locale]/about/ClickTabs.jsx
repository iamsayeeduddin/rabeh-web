"use client";
import React, { useMemo, useState } from "react";
import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";

const ClickTabs = () => {
  const [activeTab, setActiveTab] = useState("Entrepreneur");
  const fonts = useFonts();
  const t = useTranslations();

  const tabData = useMemo(() => {
    return [
      {
        key: "Entrepreneur",
        label: "For Entrepreneur",
        content: [
          {
            icon: "/assets/icon-3.png",
            title: t("signUp"),
            description: t("register"),
          },
          {
            icon: "/assets/icon-7.png",
            title: t("setUpYourCampaign"),
            description: t("craftCampaign"),
          },
          {
            icon: "/assets/icon-8.png",
            title: t("launchYourCampaign"),
            description: t("activateCampaign"),
          },
          {
            icon: "/assets/icon-9.png",
            title: t("engageWithAudience"),
            description: t("interactWithBackers"),
          },
          {
            icon: "/assets/icon-10.png",
            title: t("optimizeEfforts"),
            description: t("adjustStrategy"),
          },
          {
            icon: "/assets/icon-11.png",
            title: t("achieveFunding"),
            description: t("secureFunds"),
          },
        ],
      },
      {
        key: "Investors",
        label: "For Investors",
        content: [
          {
            icon: "/assets/icon-3.png",
            title: t("createAccount"),
            description: t("signUpPoint"),
          },
          {
            icon: "/assets/icon-7.png",
            title: t("browseProjects"),
            description: t("exploreCampaigns"),
          },
          {
            icon: "/assets/icon-8.png",
            title: t("reviewDetails"),
            description: t("examineProjects"),
          },
          {
            icon: "/assets/icon-9.png",
            title: t("makeInvestments"),
            description: t("supportProjects"),
          },
          {
            icon: "/assets/icon-10.png",
            title: t("monitorPerformance"),
            description: t("trackInvestments"),
          },
          {
            icon: "/assets/icon-11.png",
            title: t("engageWithEntrepreneurs"),
            description: t("provideFeedback"),
          },
        ],
      },
      {
        key: "Consultants",
        label: "For Consultants",
        content: [
          {
            icon: "/assets/icon-3.png",
            title: t("applyToJoin"),
            description: t("registerAsConsultant"),
          },
          {
            icon: "/assets/icon-7.png",
            title: t("assessCampaigns"),
            description: t("reviewProposals"),
          },
          {
            icon: "/assets/icon-8.png",
            title: t("adviseEntrepreneurs"),
            description: t("workWithCreators"),
          },
          {
            icon: "/assets/icon-9.png",
            title: t("supportCampaignDevelopment"),
            description: t("enhanceCampaigns"),
          },
          {
            icon: "/assets/icon-10.png",
            title: t("monitorCampaigns"),
            description: t("trackProgress"),
          },
          {
            icon: "/assets/icon-11.png",
            title: t("networkAndGrow"),
            description: t("connectAndExpand"),
          },
        ],
      },
    ];
  }, []);

  return (
    <div className={"pt-16 p-5  " + fonts.manrope.className}>
      <div className={"flex flex-col md:flex-row text-center font-bold text-xl "}>
        {tabData.map((tab) => (
          <div
            key={tab.key}
            className={`md:w-1/3 p-6 cursor-pointer transition-all duration-500 ${
              activeTab === tab.key ? "bg-[#F9F8FD] border-t-2 border-[#7860DC] text-[#616B82]" : "text-[#7986A3] border-t-2 border-[#DCE4E8]"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <h5>{tab.label}</h5>
          </div>
        ))}
      </div>
      <div className="pt-8 w-full flex flex-col ">
        {tabData
          .filter((tab) => tab.key === activeTab)
          .map((tab) => (
            <div key={tab.key} className="w-full flex flex-wrap md:flex-row flex-col ">
              {tab.content.map((item, index) => (
                <div key={index} className="md:w-1/2 p-6 ">
                  <div className="flex flex-col md:flex-row items-center">
                    <img className="" src={item.icon} alt={item.title} />
                    <div className="md:pl-6 text-center md:text-start">
                      <h5 className="text-[#616B82] font-bold text-2xl">{item.title}</h5>
                      <p className="text-[#6C7278] font-medium">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClickTabs;
