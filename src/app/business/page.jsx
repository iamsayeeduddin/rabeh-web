"use client";
import React from "react";

import TitleHead from "@/components/TitleHead";
import TestimonialCard from "@/components/TestimonialCard";
import { NumberCard } from "./NumberCard";
import { styles } from "@/utils/styles";
import Link from "next/link";
import useFonts from "@/utils/useFonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = () => {
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
  const figures = [
    {
      number: "1.5M",
      title: "which is approximately 56% of the consumer population of the US",
    },
    {
      number: "41%",
      title: "The largest adopters due to being comfortable with technology",
    },
    {
      number: "3964+",
      title: "The online payment system offers electronic alternatives to traditional",
    },
  ];
  return (
    <div>
      <TitleHead
        title={"Business"}
        desc={
          "Rabeh is a groundbreaking fintech application that transforms the travel experience by integrating innovative financial solutions into every aspect of your journey.	"
        }
      />
      <section className="flex flex-col md:py-24 md:px-28 p-5">
        <div className="grid md:grid-cols-12 w-full">
          <div className="flex flex-col col-span-4 ">
            <h2 className={"text-5xl leading-tight font-bold my-4 text-center md:text-start " + fonts.spaceG.className}>
              Welcome to our <br /> freelancers <br /> consultants in RABEH <br />
              Community.
            </h2>
            <p className={"text-lg text-gray-400 mb-2 text-center md:text-start " + fonts.inter.className}>
              Online payment companies are responsible for <br /> handling online or internet based payment. <br /> The online payment systems.
            </p>
            <hr className="w-1/2 h-px my-8 bg-gray-400 border-0 "></hr>

            <TestimonialCard
              imageUrl={"assets/testimonial-person.png"}
              name={"Mohammed Al Solami"}
              designation={"Director of Technology, Rabeh"}
              testimonial={`Simply the best. Better than all the rest. Recommend this product to beginners and advanced users.`}
            />
          </div>
          <div className=" col-span-8 flex items-center justify-end w-full">
            <img className=" md:w-1/2" src={"/assets/business-img-asset-1.png"} alt="" />
          </div>
        </div>
      </section>
      <section className={"w-full md:p-24 p-5 bg-tertiary flex flex-col items-center  " + fonts.plusJakarta.className}>
        <h1 className="text-white text-4xl font-bold mb-10 items-center md:items-start">Join millions getting secured payment</h1>
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
          <h1 className="text-5xl font-bold leading-tight">Create a culture of speed and financial discipline.</h1>
          <p className="text-lg text-gray-400 mb-2 text-center md:text-start ">
            Gain real-time visibility and accountability across global spend, break down silos of separate systems, and give accounting teams more
            automation and accuracy.
          </p>
          <button
            className={`${styles["button-primary"]} ${fonts.manrope.className} w-fit hover:bg-primary/80 text-center md:text-start mb-5 md:mb-0`}
          >
            <Link href="/sign-up">Get started</Link>
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
          <h1 className="text-5xl font-bold leading-tight text-center md:text-start md:mt-0 mt-5">Make it easy to do the right thing, anywhere.</h1>
          <p className="text-lg text-gray-400 mb-2 text-center md:text-start">
            Auto-generate receipts and make it easy to understand the policy and purpose for expenses, across cards, reimbursements, and bill pay —
            with amounts shown in USD and local currency.
          </p>
          <button
            className={`${styles["button-primary"]} ${fonts.manrope.className} w-fit hover:bg-primary/80 text-center md:text-start mb-5 md:mb-0 `}
          >
            <Link href={"/sign-up"}>Get started</Link>
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
