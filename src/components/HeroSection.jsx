"use client";
import useFonts from "@/utils/useFonts";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const Hero = ({
  title,
  subtitle,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  svgImage,
  titleColor,
  titleSize,
  imageWidth,
  imageHeight,
  locale,
}) => {
  const fonts = useFonts();
  return (
    <div className={"flex flex-col gap-10 md:gap-[80px] " + (locale === "en" ? fonts.inter.className : "")}>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center max-w-[1440px] h-auto lg:h-max-[713px] p-6 md:p-[72px]">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="lg:w-1/2 px-4"
        >
          <div className="bg-[#F9F8FD] flex w-fit items-center text-black px-4 py-2 md:py-4 mb-4 rounded-full animate-bounce">
            <div className="inline-block">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 2.75C9.5 1.50736 10.5074 0.5 11.75 0.5H13.25C14.4926 0.5 15.5 1.50736 15.5 2.75V13.25C15.5 14.4926 14.4926 15.5 13.25 15.5H11.75C11.1737 15.5 10.6481 15.2834 10.25 14.9271C9.85194 15.2834 9.32627 15.5 8.75 15.5H7.25C6.67373 15.5 6.14807 15.2834 5.75 14.9271C5.35193 15.2834 4.82627 15.5 4.25 15.5H2.75C1.50736 15.5 0.5 14.4926 0.5 13.25V8.75C0.5 7.50736 1.50736 6.5 2.75 6.5H4.25C4.51298 6.5 4.76542 6.54512 5 6.62803V5.75C5 4.50736 6.00736 3.5 7.25 3.5H8.75C9.01298 3.5 9.26542 3.54512 9.5 3.62803V2.75ZM11 13.25C11 13.6642 11.3358 14 11.75 14H13.25C13.6642 14 14 13.6642 14 13.25V2.75C14 2.33579 13.6642 2 13.25 2H11.75C11.3358 2 11 2.33579 11 2.75V13.25ZM9.5 5.75C9.5 5.33579 9.16421 5 8.75 5H7.25C6.83579 5 6.5 5.33579 6.5 5.75V13.25C6.5 13.6642 6.83579 14 7.25 14H8.75C9.16421 14 9.5 13.6642 9.5 13.25V5.75ZM5 8.75C5 8.33579 4.66421 8 4.25 8H2.75C2.33579 8 2 8.33579 2 8.75V13.25C2 13.6642 2.33579 14 2.75 14H4.25C4.66421 14 5 13.6642 5 13.25V8.75Z"
                  fill="#2B234F"
                />
              </svg>
            </div>
            <span className={"font-medium text-[#392E69] text-sm rounded-full px-2"}>{subtitle}</span>
          </div>
          <h1 className={`${titleSize} font-bold mb-6 ${titleColor} `}>{title}</h1>
          <p className="text-base md:text-lg mb-8 text-[#737373]">{description}</p>
          <div
            className={"flex flex-col md:flex-row ltr:space-x-4 rtl:space-x-reverse rtl:space-x-4 " + (locale === "en" ? fonts.spaceG.className : "")}
          >
            <Link href={button1Link} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 text-center">
              {button1Text}
            </Link>
            <Link href={button2Link} className="text-black px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-200 text-center">
              {button2Text}
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center lg:justify-end lg:w-1/2 px-4 lg:mt-0"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <img src={svgImage} alt="Hero Section Image" className={`${imageWidth} ${imageHeight} w-full lg:w-auto`} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
