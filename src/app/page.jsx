import React from "react";
import Hero from "../components/HeroSection";
import TrustedBy from "../components/TrustedBy";
import InvestmentOpportunities from "@/components/InvestmentOpportunities";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import RestAssured from "@/components/RestAssured";
import SaveTimeResources from "@/components/SaveTimeResources";
import WhatCustomerSays from "@/components/WhatCustomerSays";
import Brands from "@/components/Brands";
import SupportedCompainies from "@/components/SupportedCompainies";
import Newsletter from "@/components/Newsletter";
import UnleashInvestment from "@/components/UnleashInvestment";
import Policy from "@/components/Policy";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Hero
        subtitle="Investing opportunities"
        title={
          <>
            Unleash <br />
            Investment and <br />
            grow <br />
            businesses
          </>
        }
        description="An innovative platform for Crowdfunding, Crowd-investing, and Exchange platform that utilizes advanced technologies."
        button1Text="Get Started"
        button1Link="/get-started"
        button2Text="Opportunities"
        button2Link="/opportunities"
        svgImage="illustration.png"
        titleColor="text-secoundary"
        titleSize="text-[60px]"
        imageWidth="w-auto  "
        imageHeight="h-auto"
      />
      <TrustedBy />
      <InvestmentOpportunities />
      <StrategicPartnerships />
      <RestAssured />
      <SaveTimeResources />
      <WhatCustomerSays />
      <Brands />
      <SupportedCompainies />
      <Newsletter />
      <UnleashInvestment />
      <Policy />
    </div>
  );
};

export default page;
