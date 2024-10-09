import React from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";

const SaveTimeResources = ({ locale }) => {
  const fonts = useFonts();
  const t = useTranslations();
  return (
    <div className={"flex flex-col md:p-[72px] p-5 bg-white " + fonts.inter.className}>
      <div className="justify-start text-lg font-medium text-[#737373]">{t("reduceEngEff")}</div>
      <div className="justify-start text-[40px] font-bold mt-5 rtl:md:text-right ltr:md:text-left">{t("saveTR")}</div>
      <div className="justify-start rtl:md:text-right ltr:md:text-left text-sm mt-5">{t("saveTROne")}</div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 mt-6">
        <div className="bg-white col-span-2 flex md:flex-row shadow-custom m-5 md:pt-10 md:px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col md:gap-[24px] ltr:md:pr-20 rtl:md:pl-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-center rtl:md:text-right ltr:md:text-left font-inter m-5 ltr:md:mx-10 rtl:md:mx-10 md:w-[400px]">
              {t("saveTRTwo")}
            </div>
            <div className="rtl:md:text-right ltr:md:text-left text-center font-inter text-sm ltr:md:ml-10 rtl:md:mr-10 m-5 md:w-[400px]">
              {t("saveTRThree")}
            </div>
          </div>
          <div className="hidden md:flex items-end justify-end">
            <img src="/Group427321207.png" width={400} height={391} />
          </div>
        </div>

        <div className="bg-white col-span-1 flex md:flex-row m-5 md:pt-10 md:px-0 pb-0 rounded-[30px] gap-0 relative border-2 border-[#EFF7FA]">
          <div className="flex flex-col ltr:md:pr-20 rtl:md:pl-20 bg-white">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-center rtl:md:text-right ltr:md:text-left font-inter m-5 ltr:md:mx-10 rtl:md:mx-10">
              {t("saveTRFour")}
            </div>
            <div className="rtl:md:text-right ltr:md:text-left text-center font-inter text-sm ltr:md:ml-10 rtl:md:mr-10 m-5 mb-10">
              &quot;{t("saveTRFive")}&ldquo;
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 mt-6">
        <div className="bg-white col-span-1 flex md:flex-row m-5 md:pt-10 md:px-0 pb-0 rounded-[30px] gap-0 relative border-2 border-[#EFF7FA]">
          <div className="flex flex-col md:gap-[24px] ltr:md:pr-20 rtl:md:pl-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-center rtl:md:text-right ltr:md:text-left font-inter m-5 ltr:md:mx-10 rtl:md:mx-10">
              {t("saveTRSix")}
            </div>
            <div className="text-center rtl:md:text-right ltr:md:text-left font-inter text-sm ltr:mx-10 rtl:mx-10 mb-10">{t("saveTRSeven")}</div>
          </div>
        </div>

        <div className="bg-white col-span-2 flex flex-row shadow-custom m-5 pt-10 px-0 pb-0 rounded-[30px] gap-0 relative">
          <div className="flex flex-col gap-[24px] ltr:pr-20 rtl:pl-20">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] rtl:md:text-right ltr:md:text-left font-inter mx-10 md:w-[400px]">
              {t("saveTREight")}
            </div>
            <div className="rtl:md:text-right ltr:md:text-left font-inter text-sm mx-10 mb-5 md:w-[510px]">{t("saveTRNine")}</div>
          </div>
          <div className="hidden md:flex items-end justify-end">
            <img src="/halfLogo.png" width={250} height={220} className="rounded-br-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTimeResources;
