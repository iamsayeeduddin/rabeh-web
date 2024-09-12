"use client";
import React, { useState } from "react";
import useFonts from "@/utils/useFonts";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const router = useRouter();
  const t = useTranslations();
  const [type, setType] = useState("");

  return (
    <div
      className={`w-full p-5  md:p-[94px_112px_94px_112px] bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]`}
    >
      <div
        className="flex flex-col gap-5 bg-[#FFFFFF] md:px-[112px] py-[32px] rounded-b-[12px] "
        style={{ boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A" }}
      >
        <h2 className={`font-bold text-[24px] md:text-start text-center ${fonts.spaceG.className}`}>{t("getStarted")}</h2>
        <p className={`text-[16] md:text-start text-center ${fonts.spaceG.className}`}>{t("rabehDescription")}</p>
        <div className="flex md:flex-row flex-col gap-3 mt-12 items-center ">
          <div
            onClick={() => {
              setType("Entrepreneur");
              setTimeout(() => {
                const l = "/" + locale + "/new-account?type=Entrepreneur";
                router.push(l);
              }, 500);
            }}
            className={`flex flex-col items-center justify-center gap-8 px-8 py-3 ${
              type === "Entrepreneur" ? "border-2 border-[#7860DC]" : "border-0"
            } bg-white rounded-[20px] w-[183.33px] shadow-[0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079),0px_50px_100px_0px_rgba(0,0,0,0.04)] ${
              fonts.spaceG.className
            }`}
          >
            <div className="bg-[#F9F8FD] rounded-[15.24px] h-[64px] w-[64px] flex items-center justify-center">
              <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.8253 27.4286C25.8253 25.6564 25.8253 24.7703 25.6066 24.0493C25.1141 22.426 23.8437 21.1556 22.2204 20.6631C21.4994 20.4444 20.6133 20.4444 18.8411 20.4444H12.4919C10.7198 20.4444 9.83372 20.4444 9.11271 20.6631C7.48934 21.1556 6.21897 22.426 5.72653 24.0493C5.50781 24.7703 5.50781 25.6564 5.50781 27.4286M21.3808 10.2857C21.3808 13.4416 18.8225 16 15.6665 16C12.5106 16 9.95226 13.4416 9.95226 10.2857C9.95226 7.12978 12.5106 4.57141 15.6665 4.57141C18.8225 4.57141 21.3808 7.12978 21.3808 10.2857Z"
                  stroke="#7860DC"
                  strokeWidth="2.53968"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={`font-bold mb-4 text-[18px] ${fonts.inter.className}`}>{t("entreprenuers")}</div>
          </div>
          <div
            onClick={() => {
              setType("Investor");
              setTimeout(() => {
                const l = "/" + locale + "/new-account?type=Investor";
                router.push(l);
              }, 500);
            }}
            className={`flex ${
              type === "Investor" ? "border-2 border-[#00B8D9]" : "border-0"
            } flex-col items-center justify-center gap-8 px-8 py-3 w-[183.33px] bg-white rounded-[20px] shadow-[0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079),0px_50px_100px_0px_rgba(0,0,0,0.04)] ${
              fonts.spaceG.className
            }`}
          >
            <div className="bg-[#F3FCFD] rounded-[15.24px] h-[64px] w-[64px] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.9198 27.4286V9.65078C10.9198 8.46986 10.9198 7.8794 11.0496 7.39496C11.4019 6.08032 12.4287 5.05347 13.7434 4.70122C14.2278 4.57141 14.8183 4.57141 15.9992 4.57141C17.1801 4.57141 17.7706 4.57141 18.255 4.70122C19.5696 5.05347 20.5965 6.08032 20.9488 7.39496C21.0786 7.8794 21.0786 8.46986 21.0786 9.65078V27.4286M7.36427 27.4286H24.6341C26.0565 27.4286 26.7676 27.4286 27.3109 27.1517C27.7888 26.9083 28.1773 26.5197 28.4208 26.0419C28.6976 25.4986 28.6976 24.7874 28.6976 23.3651V13.7143C28.6976 12.2919 28.6976 11.5807 28.4208 11.0375C28.1773 10.5596 27.7888 10.1711 27.3109 9.92759C26.7676 9.65078 26.0565 9.65078 24.6341 9.65078H7.36427C5.94192 9.65078 5.23074 9.65078 4.68747 9.92759C4.2096 10.1711 3.82108 10.5596 3.57759 11.0375C3.30078 11.5807 3.30078 12.2919 3.30078 13.7143V23.3651C3.30078 24.7874 3.30078 25.4986 3.57759 26.0419C3.82108 26.5197 4.2096 26.9083 4.68747 27.1517C5.23074 27.4286 5.94192 27.4286 7.36427 27.4286Z"
                  stroke="#00B8D9"
                  strokeWidth="2.53968"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={`font-bold mb-4 text-[18px] ${fonts.inter.className}`}>{t("investors")}</div>
          </div>
          <div
            onClick={() => {
              setType("Consultant");
              setTimeout(() => {
                const l = "/" + locale + "/new-account?type=Consultant";
                router.push(l);
              }, 500);
            }}
            className={`flex  ${
              type === "Consultant" ? "border-2 border-[#004677]" : "border-0"
            } flex-col items-center justify-center gap-8 px-8 py-3 w-[183.33px] bg-white rounded-[20px] shadow-[0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079),0px_50px_100px_0px_rgba(0,0,0,0.04)] ${
              fonts.spaceG.className
            }`}
          >
            <div className="bg-[#F3F6F9] rounded-[15.24px] h-[64px] w-[64px] flex items-center justify-center">
              <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.34679 26.1587H6.44203C5.0394 26.1587 3.90234 25.0217 3.90234 23.619V5.84126C3.90234 4.43863 5.0394 3.30157 6.44203 3.30157H24.2198C25.6224 3.30157 26.7595 4.43863 26.7595 5.84126V23.619C26.7595 25.0217 25.6224 26.1587 24.2198 26.1587H22.315M15.3309 24.8889C17.4349 24.8889 19.1404 23.1833 19.1404 21.0794C19.1404 18.9754 17.4349 17.2698 15.3309 17.2698C13.227 17.2698 11.5214 18.9754 11.5214 21.0794C11.5214 23.1833 13.227 24.8889 15.3309 24.8889ZM15.3309 24.8889L15.3581 24.8886L11.3038 28.9429L7.71218 25.3513L11.5463 21.5171M15.3309 24.8889L19.3853 28.9429L22.9769 25.3513L19.1428 21.5171M11.5214 8.38094H19.1404M8.98171 12.8254H21.6801"
                  stroke="#004677"
                  strokeWidth="2.53968"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={`font-bold mb-4 text-[18px] ${fonts.inter.className}`}>{t("consultant")}</div>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row items-center justify-center text-[16px] mt-2 ${fonts.spaceG.className}`}>
          {t("alreadyAcc")}{" "}
          <p
            className="text-primary ml-2 cursor-pointer"
            onClick={() => {
              const l = "/" + locale + "/login";
              router.push(l);
            }}
          >
            {t("login")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
