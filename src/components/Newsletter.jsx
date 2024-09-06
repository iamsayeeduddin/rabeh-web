import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";
import React from "react";

const Newsletter = () => {
  const fonts = useFonts();
  const t = useTranslations();
  return (
    <div className={"gap-[16px] md:p-[16px] mb-5 text-center md:text-[none]  " + fonts.spaceG.className}>
      <div className="md:p-12 p-5 flex flex-col items-center justify-center ">
        <div className="text-[36px] text-secondary">{t("signUpNews")}</div>
        <div className="text-[20px] text-[#616B82] mt-2">{t("signUpNewsSub")}</div>
      </div>

      <div className="flex flex-col md:flex-row  items-center justify-center mt-3 ">
        <div className="flex p-5 md:p-0 flex-col  items-start w-[360px]">
          <input type="text" placeholder={t("enterEmail")} className="w-full h-[48px] border border-secondary rounded-[8px] p-5 mt-3" />
          <div className="text-[14px] text-gray-500 mt-1 w-full">{t("careDataPolicy")}</div>
        </div>
        <button className="text-xl bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-[8px] ml-5">{t("subscribe")}</button>
      </div>
    </div>
  );
};

export default Newsletter;
