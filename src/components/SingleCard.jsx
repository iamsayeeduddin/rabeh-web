import React from "react";

const SingleCard = ({ title, subtitle, link }) => {
  return (
    <div className="flex flex-col col-span-4 items-center gap-4">
      <h3 className="text-2xl">{title}</h3>
      <p className="text-md text-gray-500">{subtitle}</p>
      <a href={`mailto:${link}`} className="text-primary font-bold pb-2 hover:border-b-2 border-b-primary transition-all">
        {link}
      </a>
    </div>
  );
};

export default SingleCard;
