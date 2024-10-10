import React from "react";
import Logo from "./Logo";
import { FaYoutube, FaInstagram, FaLinkedin, FaTimes, FaFacebook } from "react-icons/fa";
import useFonts from "@/utils/useFonts";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function Footer({ locale }) {
  const fonts = useFonts();
  const t = useTranslations();
  const secCert = [
    "/assets/norton_logo.png",
    "/assets/mcafee_logo.png",
    "/assets/w3c_logo.png",
    "/assets/ssl_logo.png",
    "/assets/pci_logo.png",
    "/assets/soc_logo.png",
  ];
  const paymentCert = [
    "/assets/mada_logo.png",
    "/assets/apay_logo.png",
    "/assets/gpay_logo.png",
    "/assets/paypal_logo.png",
    "/assets/mastercard_logo.png",
    "/assets/visa_logo.png",
    "/assets/stripe_logo.png",
    "/assets/amex_logo.png",
  ];
  const links = [
    { href: "/about", label: t("about") },
    { href: "/opportunities", label: t("opportunities") },
    { href: "/under-construction", label: t("investments") },
    { href: "/under-construction", label: t("partnerships") },
    { href: "/under-construction", label: t("pr") },
    { href: "/under-construction", label: t("knowledgeHub") },
  ];

  const fundraisingLinks = [
    { href: "/under-construction", label: t("investments") },
    { href: "/business", label: t("business") },
    { href: "/under-construction", label: t("partner") },
    { href: "/under-construction", label: t("regulations") },
    { href: "/privacy-policy", label: t("privacyPolicy") },
    { href: "/under-construction", label: t("cookiesPolicy") },
  ];

  return (
    <div
      className={
        "flex flex-col p-5 pt-8 md:py-16 md:px-36 bg-[url('/assets/bg-asset-1.png')] bg-right-top bg-no-repeat border-b-8 border-b-primary gap-16 " +
        (locale === "en" ? fonts.inter.className : "")
      }
    >
      <div className="md:max-w-6xl flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <div className="max-w-80 self-center md:self-start text-center md:text-start">
          <Logo width={250} height={100} />
          <p className={"pt-8 md:pt-6 font-normal text-base text-[#2C303B] " + (locale === "en" ? fonts.urbanist.className : "")}>
            {t("empowerBusiness")} <br /> {t("connectingInvestors")} <br />
            {t("transformFinance")}
          </p>
        </div>

        <div className="flex justify-center md:justify-start text-center rtl:md:text-right ltr:md:text-left md:flex-row gap-10">
          <div className="mt-5 md:mt-0">
            <ul className={`text-[#2C303B] font-medium flex flex-col gap-3 ${locale === "en" ? fonts.urbanist.className : ""}`}>
              <li className={`text-[#392E69] font-bold text-lg md:text-sm pb-2 md:pb-4 ${locale === "en" ? fonts.spaceG.className : ""}`}>
                {t("company")}
              </li>
              {links.map(({ href, label }) => (
                <Link key={label} href={href} className="hover:text-[#392E69]/70">
                  {label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="mt-5 md:mt-0">
            <ul className={`text-[#2C303B] font-medium flex flex-col gap-3 ${locale === "en" ? fonts.urbanist.className : ""}`}>
              <li className={`text-[#392E69] font-bold text-lg md:text-sm pb-2 md:pb-4 ${locale === "en" ? fonts.spaceG.className : ""}`}>
                {t("fundraising")}
              </li>
              {fundraisingLinks.map(({ href, label }) => (
                <Link key={label} href={href} className="hover:text-[#392E69]/70">
                  {label}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-80 mt-7 md:mt-0">
          <ul
            className={
              "text-[#2C303B] flex flex-col items-center md:items-start md:justify-start gap-4 " + (locale === "en" ? fonts.urbanist.className : "")
            }
          >
            <li className="text-[#392E69] text-lg font-semibold">{t("policy")}</li>
            <li>{t("policySub")}</li>
            <li className={"text-[#7860DC] font-bold text-sm underline " + (locale === "en" ? fonts.inter.className : "")}>
              <Link href={"/under-construction"}>{t("viewPolicy")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={"max-w-6xl gap-8 justify-between flex flex-col md:flex-row " + (locale === "en" ? fonts.spaceG.className : "")}>
        <div>
          <h5 className="font-medium text-center rtl:md:text-right ltr:md:text-left">{t("secCert")}</h5>
          <div className="flex gap-3 pt-5">
            {secCert.map((item, index) => (
              <div key={index + "cert"} className="md:w-20 md:h-10 border-2 border-[#EAECF0] rounded-md flex justify-center items-center">
                <img src={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 md:mt-0">
          <h5 className="font-medium text-center rtl:md:text-right ltr:md:text-left">{t("flexPayOpt")}</h5>
          <div className="flex gap-3 pt-5">
            {paymentCert.map((item, index) => (
              <div
                key={index + "cert"}
                className={
                  "md:w-20 md:h-10 border-2 border-[#EAECF0] rounded-md flex justify-center items-center " +
                  (item.includes("amex") ? "bg-[#1F72CD]" : "")
                }
              >
                <img src={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={"flex flex-col md:flex-row items-center md:items-start justify-between " + (locale === "en" ? fonts.inter.className : "")}>
        <div>&#169; {new Date().getFullYear()} Rabeh. All rights reserved</div>
        <div className="flex space-x-4 text-[#3A404E] mt-5 md:mt-0">
          <Link href="https://www.instagram.com/rabehfinance/" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/RABEHclub" target="_blank">
            <FaFacebook />
          </Link>
          <Link href="https://www.linkedin.com/company/rabeh-ksa/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="https://x.com/RabehFinance" target="_blank">
            <FaYoutube />
          </Link>
          <Link href="https://x.com/RabehFinance" target="_blank">
            <FaTimes />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
