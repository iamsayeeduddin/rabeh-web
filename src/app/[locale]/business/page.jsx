"use client";
import React from "react";

import TitleHead from "@/components/TitleHead";
import TestimonialCard from "@/components/TestimonialCard";
import { NumberCard } from "./NumberCard";
import { styles } from "@/utils/styles";
import { Link } from "@/i18n/routing";
import useFonts from "@/utils/useFonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const Page = ({ params: { locale } }) => {
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: visionRef2, inView: visionInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const fonts = useFonts();
  const t = useTranslations();
  const figures = [
    {
      number: "1.5M",
      title: t("buss1"),
    },
    {
      number: "41%",
      title: t("buss2"),
    },
    {
      number: "3964+",
      title: t("buss3"),
    },
  ];
  return (
    <div>
      <TitleHead locale={locale} title={t("business")} desc={t("rabehDescriptionBuss")} />
      <section className="flex flex-col md:py-24 md:px-28 p-5">
        <div className="grid md:grid-cols-12 w-full">
          <div className="flex flex-col col-span-4 ">
            <h2 className={"text-5xl leading-tight font-bold my-4 text-center md:text-start " + (locale === "en" ? fonts.spaceG.className : "")}>
              {t("welcomeConsultants")}
            </h2>
            <p className={"text-lg text-gray-400 mb-2 text-center md:text-start " + fonts.inter.className}>{t("onlinePaymentCompanies")}</p>
            <hr className="w-1/2 h-px my-8 bg-gray-400 border-0 "></hr>

            <TestimonialCard
              imageUrl={"../assets/testimonial-person.png"}
              name={t("mohdSolami")}
              designation={t("directorTech") + ", Rabeh"}
              testimonial={t("bussQuote")}
            />
          </div>
          <div className=" col-span-8 flex items-center justify-end w-full">
            <img className=" md:w-1/2" src={"/assets/business-img-asset-1.png"} alt="" />
          </div>
        </div>
      </section>
      <section className={"w-full md:p-24 p-5 bg-tertiary flex flex-col items-center  " + fonts.plusJakarta.className}>
        <h1 className="text-white text-4xl font-bold mb-10 items-center md:items-start">{t("joinSecuredPayment")}</h1>
        <div className="grid md:grid-cols-12 divide-x divide-gray-600 gap-4 my-12">
          {figures.map(({ number, title }, index) => (
            <NumberCard key={index} title={title} number={number} className="col-span-4 items-center md:items-start" />
          ))}
        </div>
      </section>
      <motion.section
        ref={visionRef}
        variants={fadeInVariant}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
        className="grid md:grid-cols-12 md:py-24 md:px-28 p-5 md:gap-4"
      >
        <div className={"flex flex-col md:col-span-5 gap-8 justify-center text-center md:text-start " + fonts.plusJakarta.className}>
          <h1 className="text-5xl font-bold leading-tight">{t("createCulture")}</h1>
          <p className="text-lg text-gray-400 mb-2 text-center md:text-start ">{t("gainVisibility")}</p>
          <button
            className={`${styles["button-primary"]} ${fonts.manrope.className} w-fit hover:bg-primary/80 text-center md:text-start mb-5 md:mb-0`}
          >
            <Link href="/sign-up">{t("getStarted")}</Link>
          </button>
        </div>
        <div className="flex items-center justify-end col-span-7">
          <img src="/assets/business-img-asset-2.png" alt="" />
        </div>
      </motion.section>
      <motion.section
        ref={visionRef2}
        variants={fadeInVariant}
        initial="hidden"
        animate={visionInView2 ? "visible" : "hidden"}
        className="grid md:grid-cols-12 p-5 md:py-24 md:px-28  md:gap-4"
      >
        <div className="flex col-span-7">
          <img src="/assets/business-img-asset-2.png" alt="" />
        </div>
        <div className={"flex flex-col md:col-span-5 gap-8 justify-center items-center md:items-start " + fonts.plusJakarta.className}>
          <h1 className="text-5xl font-bold leading-tight text-center md:text-start md:mt-0 mt-5">{t("makeItEasy")}</h1>
          <p className="text-lg text-gray-400 mb-2 text-center md:text-start">{t("autoGenerate")}</p>
          <button
            className={`${styles["button-primary"]} ${fonts.manrope.className} w-fit hover:bg-primary/80 text-center md:text-start mb-5 md:mb-0 `}
          >
            <Link href={"/sign-up"}>{t("getStarted")}</Link>
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
