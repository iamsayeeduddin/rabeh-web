"use client";
import React from "react";
import useFonts from "@/utils/useFonts";
import TitleHead from "@/components/TitleHead";
import SingleCard from "@/components/SingleCard";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";
import { MapProvider } from "@/utils/MapProvider";
import { MapComponent } from "@/utils/Map";

const Page = () => {
  const fonts = useFonts();
  const t = useTranslations("");
  return (
    <div>
      <MapProvider>
        <TitleHead title={t("contactUs")} desc={t("rabehDescription")} />
        <section className="flex flex-col items-center gap-4 p-5 md:p-0 ">
          <p className={"font-medium text-[#6941C6] " + fonts.spaceG.className}>{t("about")}</p>
          <h1 className={"text-4xl font-bold text-center " + fonts.urbanist.className}>{t("distributedTeam")}</h1>
          <h3 className={"text-xl text-[#475467] text-center  " + fonts.urbanist.className}>{t("globalOffices")}</h3>
          <img src="/assets/map.png" alt="" className="w-full my-24 " />
        </section>
        <section className={"grid md:grid-cols-12  my-4 " + fonts.inter.className}>
          <SingleCard title={t("support")} subtitle={t("friendlyTeam")} link={"support@rabeh.sa"} />
          <SingleCard title={t("sales")} subtitle={t("questionsOrQueries")} link={"Sales@rabeh.sa"} />
          <SingleCard title={t("phone")} subtitle={t("workingHours")} link={"+1(202)-656-5556"} />
        </section>
        <section className="my-24">
          <MapComponent />
        </section>
        <ContactForm />
      </MapProvider>
    </div>
  );
};

export default Page;
