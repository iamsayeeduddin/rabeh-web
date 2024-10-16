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

const Page = ({ params: { locale } }) => {
  const t = useTranslations();
  return (
    <div>
      <Hero
        subtitle={t("heroTag")}
        title={<>{t("heroTitle")}</>}
        description={t("heroSubtitle")}
        button1Text={t("getStarted")}
        button1Link="/sign-up"
        button2Text={t("opportunities")}
        button2Link="/opportunities"
        svgImage="illustration-1.png"
        titleColor="text-secoundary"
        titleSize="text-[60px]"
        imageWidth="w-auto  "
        imageHeight="h-auto"
        locale={locale}
      />
      <TrustedBy locale={locale} />
      <InvestmentOpportunities locale={locale} />
      <StrategicPartnerships locale={locale} bottomSpacing={true} />
      <RestAssured locale={locale} />
      <SaveTimeResources locale={locale} />
      <WhatCustomerSays locale={locale} />
      <Brands locale={locale} />
      <SupportedCompainies locale={locale} />
      <Newsletter locale={locale} />
      <UnleashInvestment locale={locale} />
      <Policy locale={locale} />
    </div>
  );
};

export default Page;
