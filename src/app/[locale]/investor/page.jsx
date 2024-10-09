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
      <TitleHead locale={locale} title={t("investors")} desc={t("rabehDescription")} />
      <WhyRabeh />
      <OurServices />
      <UnleashInvestment />
      <Brands locale={locale} />
      <Newsletter />
    </div>
  );
};

export default Page;
