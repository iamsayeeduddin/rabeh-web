'use client';
import React, { useState } from "react";
import useFonts from "@/utils/useFonts";

const tabData = [
    {
      key: "Entrepreneur",
      label: "For Entrepreneur",
      content: [
        {
          icon: "/assets/icon-3.png",
          title: "Sign Up",
          description: "Register on the Rabeh platform to create your profile and access campaign tools.",
        },
        {
          icon: "/assets/icon-7.png",
          title: "Set Up Your Campaign",
          description: "Craft a compelling project with clear descriptions, goals, and engaging visuals.",
        },
        {
          icon: "/assets/icon-8.png",
          title: "Launch Your Campaign",
          description: "Activate your campaign and start promoting it through social media, email, and other marketing channels.",
        },
        {
          icon: "/assets/icon-9.png",
          title: "Engage with Your Audience",
          description: "Interact with backers, respond to questions, and provide updates to keep them invested.",
        },
        {
          icon: "/assets/icon-10.png",
          title: "Optimize Your Efforts",
          description: "Adjust your strategy based on feedback and performance analytics to improve your campaign.",
        },
        {
          icon: "/assets/icon-11.png",
          title: "Achieve and Manage Funding",
          description: "Secure the funds needed, execute your project, and keep backers informed about your progress.",
        },
      ],
    },
    {
      key: "Investors",
      label: "For Investors",
      content: [
        {
          icon: "/assets/icon-3.png", // Reuse icon-3 for all sections
          title: "Create an Account",
          description: "Sign up on Rabeh to begin exploring investment opportunities.",
        },
        {
          icon: "/assets/icon-7.png", // Reuse icon-7 for all sections
          title: "Browse Projects",
          description: "Explore a variety of campaigns across different sectors and industries.",
        },
        {
          icon: "/assets/icon-8.png", // Reuse icon-8 for all sections
          title: "Review Details",
          description: "Examine project descriptions, business plans, funding goals, and risks to make informed decisions.",
        },
        {
          icon: "/assets/icon-9.png", // Reuse icon-9 for all sections
          title: "Make Investments",
          description: "Support projects that match your interests and investment goals through our secure platform.",
        },
        {
          icon: "/assets/icon-10.png", // Reuse icon-10 for all sections
          title: "Monitor Performance",
          description: "Track the progress of your investments and stay updated with project milestones and developments.",
        },
        {
          icon: "/assets/icon-11.png", // Reuse icon-11 for all sections
          title: "Engage with Entrepreneurs",
          description: "Provide feedback or support to the projects you’ve invested in, if desired.",
        },
      ],
    },
    {
      key: "Consultants",
      label: "For Consultants",
      content: [
        {
          icon: "/assets/icon-3.png", // Reuse icon-3 for all sections
          title: "Apply to Join",
          description: "Register as a consultant on the Rabeh platform to start offering your expertise.",
        },
        {
          icon: "/assets/icon-7.png", // Reuse icon-7 for all sections
          title: "Assess Campaigns",
          description: "Review project proposals to provide insightful feedback and strategic advice.",
        },
        {
          icon: "/assets/icon-8.png", // Reuse icon-8 for all sections
          title: "Advise Entrepreneurs",
          description: "Work closely with campaign creators to refine their strategies and improve their chances of success.",
        },
        {
          icon: "/assets/icon-9.png", // Reuse icon-9 for all sections
          title: "Support Campaign Development",
          description: "Help entrepreneurs enhance their campaign presentations and fundraising approaches.",
        },
        {
          icon: "/assets/icon-10.png", // Reuse icon-10 for all sections
          title: "Monitor Campaigns",
          description: "Keep track of the progress of campaigns you’re involved with and offer ongoing support as needed.",
        },
        {
          icon: "/assets/icon-11.png", // Reuse icon-11 for all sections
          title: "Network and Grow",
          description: "Connect with a diverse range of entrepreneurs and investors, expanding your professional network and opportunities.",
        },
      ],
    },
  ];

const ClickTabs = () => {
  const [activeTab, setActiveTab] = useState("Entrepreneur");
  const fonts = useFonts();

  return (
    <div className={"pt-16 " + fonts.manrope.className}>
      <div className={"flex text-center font-bold text-xl "}>
        {tabData.map((tab) => (
          <div
            key={tab.key}
            className={`w-1/3 p-6 cursor-pointer ${
              activeTab === tab.key
                ? "bg-[#F9F8FD] border-t-2 border-[#7860DC] text-[#616B82]"
                : "text-[#7986A3] border-t-2 border-[#DCE4E8]"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <h5>{tab.label}</h5>
          </div>
        ))}
      </div>
      <div className="pt-8 w-full flex">
        {tabData
          .filter((tab) => tab.key === activeTab)
          .map((tab) => (
            <div key={tab.key} className="w-full flex flex-wrap">
              {tab.content.map((item, index) => (
                <div key={index} className="w-1/2 p-6">
                  <div className="flex items-center">
                    <img src={item.icon} alt={item.title} />
                    <div className="pl-6">
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
