import React from "react";
import TitleHead from "@/components/TitleHead";
import WhyRabeh from "@/components/WhyRabeh";
import OurServices from "@/components/OurServices";
import UnleashInvestment from "@/components/UnleashInvestment";
import Newsletter from "@/components/Newsletter";
import Brands from "@/components/Brands";
import { useTranslations } from "next-intl";

const Page = ({ params: { locale } }) => {
  const t = useTranslations();
  return (
    <div>
      <TitleHead locale={locale} title={t("investors")} desc={t("rabehDescription")} />
      <WhyRabeh locale={locale} />
      <OurServices locale={locale} />
      <UnleashInvestment />
      <Brands locale={locale} />
      <Newsletter locale={locale} />
    </div>
  );
};

export default Page;
