import React from "react";

export const NumberCard = ({ number, title, className }) => {
  return (
    <div className={`flex flex-col gap-4 text-white w-full md:px-24 p-5 ${className}`}>
      <h1 className="text-5xl font-bold text-center md:text-start">{number}</h1>
      <h2 className="text-lg md:w-1/2 text-center md:text-start">{title}</h2>
    </div>
  );
};
