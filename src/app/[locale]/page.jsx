import React from "react";
import Hero from "../../components/HeroSection";
import TrustedBy from "../../components/TrustedBy";
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
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations();
  return (
    <div>
      <Hero
        subtitle={t("heroTag")}
        title={<>{t("heroTitle")}</>}
        description={t("heroSubtitle")}
        button1Text={t("getStarted")}
        button1Link="/under-construction"
        button2Text={t("opportunities")}
        button2Link="/opportunities"
        svgImage="illustration-1.png"
        titleColor="text-secoundary"
        titleSize="text-[60px]"
        imageWidth="w-auto  "
        imageHeight="h-auto"
      />
      <TrustedBy />
      <InvestmentOpportunities />
      <StrategicPartnerships bottomSpacing={true} />
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

export default Page;
