import React from "react";
import CardSlider from "./CardSliderBlack";
import useFonts from "@/utils/useFonts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const SupportedCompainies = () => {
  const fonts = useFonts();
  const t = useTranslations();
  return (
    <div className="bg-secondary   md:p-[75px]  ">
      <div className="grid md:grid-cols-2  ">
        <div className={"text-white p-5 text-start font-inter font-bold md:px-20 text-[32px] " + fonts.spaceG.className}>
          {t("supportedCompainies")}
        </div>
        <div className={"text-[#7F879E] font-medium text-start font-inter md:px-20 p-5 text-lg " + fonts.inter.className}>
          {t("supportedCompainies1")}
          <div className="text-white texxt-start text-[18px] mt-5 underline cursor-pointer">
            <Link href={"/under-construction"}>{t("regPartner")}</Link>
          </div>
        </div>
      </div>

      <CardSlider />
    </div>
  );
};

export default SupportedCompainies;
