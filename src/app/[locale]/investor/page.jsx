import React from "react";
import TitleHead from "@/components/TitleHead";
import WhyRabeh from "@/components/WhyRabeh";
import OurServices from "@/components/OurServices";
import UnleashInvestment from "@/components/UnleashInvestment";
import Newsletter from "@/components/Newsletter";
import Brands from "@/components/Brands";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations();
  return (
    <div>
      <TitleHead title={t("investors")} desc={t("rabehDescription")} />
      <WhyRabeh />
      <OurServices />
      <UnleashInvestment />
      <Brands />
      <Newsletter />
    </div>
  );
};

export default Page;
