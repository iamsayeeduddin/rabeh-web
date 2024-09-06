import React from "react";
import useFonts from "@/utils/useFonts";
import TitleHead from "@/components/TitleHead";
import SingleCard from "@/components/SingleCard";
import ContactForm from "@/components/ContactForm";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  return (
    <div>
      <TitleHead title={"Contact us"} desc={"Rabeh is a revolutionary fintech application that redefines the travel experience."} />
      <section className="flex flex-col items-center gap-4 p-5 md:p-0 ">
        <p className={"font-medium text-[#6941C6] " + fonts.spaceG.className}>About us</p>
        <h1 className={"text-4xl font-bold text-center " + fonts.urbanist.className}>We’re a distributed team</h1>
        <h3 className={"text-xl text-[#475467] text-center  " + fonts.urbanist.className}>We have offices and teams all around the world.</h3>
        <img src="/assets/map.png" alt="" className="w-full my-24 " />
      </section>
      <section className={"grid md:grid-cols-12  my-4 " + fonts.inter.className}>
        <SingleCard title={"Support"} subtitle={"Our friendly team is here to help."} link={"support@rabeh.sa"} />
        <SingleCard title={"Sales"} subtitle={"Questions or queries? Get in touch!"} link={"Sales@rabeh.sa"} />
        <SingleCard title={"Phone"} subtitle={"Mon-Fri from 8am to 5pm."} link={"+1(202)-656-5556"} />
      </section>
      <section className="my-24">
        <img src="/assets/map-2.png" alt="" className="w-full" />
      </section>
      <ContactForm />
    </div>
  );
};

export default Page;
