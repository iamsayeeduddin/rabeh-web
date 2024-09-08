"use client";
import ContactForm from "@/components/ContactForm";
import useFonts from "@/utils/useFonts";
import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const jobData = [
  {
    category: "Design",
    title: "Product Designer",
    type: "Design",
    description: "We're looking for a mid-level product designer to join our team.",
    location: "Remote",
    jobType: "Full-time",
    bgColor: "#EFF8FF",
    borderColor: "#B2DDFF",
    textColor: "#175CD3",
  },
  {
    category: "Software Development",
    title: "Engineering Manager",
    type: "Software",
    description: "Join our engineering team to build cutting-edge solutions.",
    location: "On-site",
    jobType: "Full-time",
    bgColor: "#FDF2FA",
    borderColor: "#FCCEEE",
    textColor: "#C11574",
  },
  {
    category: "Customer Success",
    title: "Customer Success Manager",
    type: "CX",
    description: "We need a marketing specialist to help us reach new heights.",
    location: "Remote",
    jobType: "Part-time",
    bgColor: "#ECFDF3",
    borderColor: "#ABEFC6",
    textColor: "#067647",
  },
  {
    category: "Sales",
    title: "Account Executive",
    type: "Sales",
    description: "We need a marketing specialist to help us reach new heights.",
    location: "Remote",
    jobType: "Part-time",
    bgColor: "#EFF8FF",
    borderColor: "#B2DDFF",
    textColor: "#175CD3",
  },
  {
    category: "Marketing",
    title: "SEO Marketing Manager",
    type: "Marketing",
    description: "We need a marketing specialist to help us reach new heights.",
    location: "Remote",
    jobType: "Part-time",
    bgColor: "#FFF8E4",
    borderColor: "#F9DBAF",
    textColor: "#B93815",
  },
];

const Page = () => {
  const [jobType, setJobType] = useState("All");
  const fonts = useFonts();
  const t = useTranslations();
  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
        delayChildren: 0.2, // Delay before the first child starts animating
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Slide in effect from below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full flex flex-col md:p-[72px] mt-10 p-5 ">
      <div className={"flex flex-col items-center justify-center gap-10 mb-5 " + fonts.urbanist.className}>
        <div className="text-4xl font-bold">{t("openPositions")}</div>
        <div className="text-base items-center justify-center">{t("joinTheTeam")}</div>
      </div>
      <div className="py-2 w-full flex mt-10 justify-center gap-10 mb-5">
        <div
          className={
            "mt-3 bg-[#F9FAFB] rounded-lg flex flex-wrap justify-between cursor-pointer w-fit px-1 py-3 font-semibold border border-[#EAECF0] " +
            fonts.spaceG.className
          }
        >
          {["All", "Design", "Software Engineering", "Customer Success", "Sales", "Marketing"].map((d, i) => (
            <span
              key={i + d}
              onClick={() => setJobType(d)}
              className={`px-3 w-fit py-2 rounded-md transition-all duration-200 ${d === jobType ? "bg-white text-[#344054]" : "text-[#667085]"}`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={parentVariants} className="flex flex-col gap-10 mt-10 items-center justify-center">
        {jobData.map((job, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className={"md:w-[768px] p-[28px] rounded-2xl border-2 bg-white flex flex-col justify-between " + fonts.urbanist.className}
          >
            <div className="flex justify-between items-start">
              <span className="text-primary font-semibold">{job.category}</span>
              <a href="#" className="text-primary flex items-center space-x-1">
                <span>View job</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.83301 14.1667L14.1663 5.83334M14.1663 5.83334H5.83301M14.1663 5.83334V14.1667"
                    stroke="#6941C6"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-semibold flex items-center">
                {job.title}
                <span
                  className="px-2 py-1 rounded-full text-sm border-2 ml-2 flex items-center"
                  style={{
                    backgroundColor: job.bgColor,
                    borderColor: job.borderColor,
                    color: job.textColor,
                  }}
                >
                  <svg className="animate-pulse" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3" r="3" fill={job.textColor} />
                  </svg>
                  <span className="ml-1">{job.type}</span>
                </span>
              </h3>
              <p className="text-gray-600 mt-2">{job.description}</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="flex items-center space-x-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.99967 10.4167C11.3804 10.4167 12.4997 9.29737 12.4997 7.91666C12.4997 6.53594 11.3804 5.41666 9.99967 5.41666C8.61896 5.41666 7.49967 6.53594 7.49967 7.91666C7.49967 9.29737 8.61896 10.4167 9.99967 10.4167Z"
                    stroke="#98A2B3"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99967 18.3333C11.6663 15 16.6663 12.8486 16.6663 8.33332C16.6663 4.65142 13.6816 1.66666 9.99967 1.66666C6.31778 1.66666 3.33301 4.65142 3.33301 8.33332C3.33301 12.8486 8.33301 15 9.99967 18.3333Z"
                    stroke="#98A2B3"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-600">{job.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_5255_8837)">
                    <path
                      d="M10.0003 4.99999V9.99999L13.3337 11.6667M18.3337 9.99999C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 9.99999C1.66699 5.39762 5.39795 1.66666 10.0003 1.66666C14.6027 1.66666 18.3337 5.39762 18.3337 9.99999Z"
                      stroke="#98A2B3"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5255_8837">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-gray-600">{job.jobType}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default Page;
