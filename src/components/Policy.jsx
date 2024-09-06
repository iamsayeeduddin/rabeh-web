import React, { useMemo } from "react";
import Image from "next/image";
import useFonts from "@/utils/useFonts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Policy = () => {
  const fonts = useFonts();
  const t = useTranslations();

  const cardData = useMemo(() => {
    return [
      {
        imageSrc: "/image2452.png",
        width: 242,
        height: 242,
        title: t("policyBlog1Title"),
        description: t("policyBlog1Desc"),
      },
      {
        imageSrc: "/assets/logos/cma.jpg",
        width: 400,
        height: 70,
        title: t("policyBlog2Title"),
        description: t("policyBlog2Desc"),
      },
    ];
  }, []);

  return (
    <div className={"flex flex-col  p-[100px] bg-white " + fonts.inter.className}>
      <div className="justify-start text-[40px] font-inter mt-5">{t("policy")}</div>
      <div className="text-[18px] text-start text-[#737373] max-w-3xl">{t("policySub")}</div>
      <div className=" flex justify-center  ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-5 mt-10">
          {cardData.map((card, index) => (
            <div key={index} className="max-w-[568px] p-[16px] border border-[#E5E5E5] rounded-md">
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-center">
                  <div className="h-[350px] w-[536px] px-[5px] border border-[#E5E5E5] bg-[#FAFAFA]  flex items-center justify-center overflow-hidden">
                    <img src={card.imageSrc} alt="Compliance" width={card.width} height={card.height} className="object-contain" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <p className="mt-2 text-gray-700">{card.description}</p>
                </div>
                <div className="mt-4 ">
                  <Link href="/under-construction" className="bg-primary w-fit text-white px-4 py-2 rounded-[4px] text-sm flex items-center">
                    {t("learnMore")}
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.75 10.9634H15.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 5.71338L15.25 10.9634L10 16.2134" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
