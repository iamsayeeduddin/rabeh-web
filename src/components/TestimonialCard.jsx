import React from "react";

const TestimonialCard = ({ imageUrl, name, designation, testimonial }) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="italic">{`"${testimonial}"`}</p>
      <div className="flex flex-row gap-4">
        <img src={imageUrl} alt="" className="w-16 h-16 self-center" />
        <div className=" flex flex-col justify-center">
          <h1>{name}</h1>
          <h2>{designation}</h2>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
