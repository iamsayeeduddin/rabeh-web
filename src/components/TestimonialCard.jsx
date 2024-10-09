import useFonts from "@/utils/useFonts";
import React from "react";

const TestimonialCard = ({ imageUrl, name, designation, testimonial }) => {
  const fonts = useFonts();
  return (
    <div className="flex flex-col gap-8">
      <p className={"italic font-medium " + (locale === "en" ? fonts.inter.className : "")}>{`"${testimonial}"`}</p>
      <div className="flex flex-row gap-4">
        <img src={imageUrl} alt="" className="w-16 h-16 self-center" />
        <div className=" flex flex-col justify-center">
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-[#12141D]">{designation}</h2>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
