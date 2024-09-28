'use client';

import { useState } from "react";
import useFonts from "@/utils/useFonts"; 
import PersonalInfo from "./PersonalInfo";
import FinancialInfo from "./FinancialInfo";
import WorkInfo from "./WorkInfo";
import NationalInfo from "./NationalInfo";
import BankInfo from "./BankInfo";

const MyAccount = () => {
  const fonts = useFonts(); 
  const [activeTab, setActiveTab] = useState("Personal");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Personal":
        return <PersonalInfo />;
      case "Financial":
        return <FinancialInfo />;
      case "Work":
        return <WorkInfo />;
      case "General":
        return <NationalInfo />;
      case "National":
        return <NationalInfo />;
      case "Bank":
        return <BankInfo />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className={`container mx-auto p-6 ${fonts.spaceG.className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="breadcrumbs text-sm text-gray-500">
          <span className="mr-2">Account</span> / <span className="ml-2">My Account</span>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Deactivate
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b mt-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {["Personal", "Financial", "Work", "General", "National", "Bank"].map((tab) => (
            <button
              key={tab}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? "border-primary text-primary" // Use 'primary' for indigo
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default MyAccount;
