import React from "react";

export const NumberCard = ({ number, title, className }) => {
  return (
    <div className={`flex flex-col gap-4 text-white w-full px-24 ${className}`}>
      <h1 className="text-5xl font-bold">{number}</h1>
      <h2 className="text-lg w-1/2">{title}</h2>
    </div>
  );
};
