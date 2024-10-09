import React from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";
const RestAssured = ({ locale }) => {
  const fonts = useFonts();
  const t = useTranslations();
  return (
    <div className={"flex flex-col md:flex-row bg-secondary text-white " + fonts.inter.className}>
      <div className="flex-1 md:mr-8 pt-[128px] pb-[128px] ltr:pl-[80px] ltr:pr-[80px] rtl:pr-[80px] rtl:pl-[80px]">
        <h2 className={"text-4xl font-bold mb-4 " + (locale === "en" ? fonts.spaceG.className : "")}>{t("restAssured")}</h2>
        <p className={"mt-8"}>{t("restAssuredDesc")}</p>
        <div className="flex md:space-x-8 rtl:space-x-reverse mt-[48px] flex-col md:flex-row gap-5">
          <div className="text-start rtl:text-right border-l-0">
            <div className="text-3xl font-bold">132+</div>
            <div>{t("restAssuredFirst")}</div>
          </div>
          <div className="text-start rtl:text-right ltr:md:pl-10 rtl:md:pr-10 md:border-l-2 rtl:md:border-r-2 border-l-white rtl:border-r-white">
            <div className="text-3xl font-bold">85</div>
            <div>{t("entreprenuers")}</div>
          </div>
          <div className="text-start rtl:text-right ltr:md:pl-10 rtl:md:pr-10 ltr:md:border-l-2 rtl:md:border-r-2 ltr:border-l-white rtl:border-r-white">
            <div className="text-3xl font-bold">150M</div>
            <div>{t("investors")}</div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img src="/image-1.png" alt="Investment Projects" layout="fill" objectfit="cover" />
      </div>
    </div>
  );
};

export default RestAssured;
