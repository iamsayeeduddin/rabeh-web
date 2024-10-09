import React from "react";
import TitleHead from "@/components/TitleHead";
import useFonts from "@/utils/useFonts";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();

  const cardData = [
    {
      img: "/assets/news1.png",
      title: "Building Up Business & Investment profiles",
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Luctus cum purus bibendum risus nibh cursus integer."],
    },
    {
      img: "/assets/news2.png",
      title: "Expanding Market Reach",
      content: ["Fusce dapibus, tellus ac cursus commodo, tortor mauris.", "Condimentum nibh, ut fermentum massa justo sit amet risus."],
    },
    {
      img: "/assets/news3.png",
      title: "Enhancing Customer Experience",
      content: ["Maecenas sed diam eget risus varius blandit sit amet non magna.", "Curabitur blandit tempus porttitor."],
    },
    {
      img: "/assets/news2.png",
      title: "Strategizing Growth",
      content: ["Vestibulum id ligula porta felis euismod semper.", "Cras justo odio, dapibus ac facilisis in, egestas eget quam."],
    },
    {
      img: "/assets/news1.png",
      title: "Innovative Solutions",
      content: ["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.", "Sed posuere consectetur est at lobortis."],
    },
    {
      img: "/assets/news3.png",
      title: "Global Partnerships",
      content: ["Nulla vitae elit libero, a pharetra augue.", "Praesent commodo cursus magna, vel scelerisque nisl consectetur."],
    },
    {
      img: "/assets/news3.png",
      title: "Expanding Horizons",
      content: ["Donec ullamcorper nulla non metus auctor fringilla.", "Cras justo odio, dapibus ac facilisis in, egestas eget quam."],
    },
    {
      img: "/assets/news2.png",
      title: "New Market Ventures",
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Nulla vitae elit libero, a pharetra augue."],
    },
    {
      img: "/assets/news1.png",
      title: "Innovative Strategies",
      content: ["Maecenas sed diam eget risus varius blandit sit amet non magna.", "Vestibulum id ligula porta felis euismod semper."],
    },
  ];

  return (
    <div>
      <TitleHead locale={locale} title={"News"} desc={"Rabeh is a revolutionary fintech application that redefines the travel experience."} />
      <div className="grid md:grid-cols-3 gap-7 md:p-28 p-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={
              "p-10 rounded-[20px] bg-white w-[335px] md:w-[385px] h-auto shadow-[0px_8.15px_6.52px_0px_rgba(0,0,0,0.0079),0px_50px_100px_0px_rgba(0,0,0,0.04)] m-2 " +
              fonts.inter.className
            }
          >
            <div className="flex flex-col items-start gap-5">
              <img src={card.img} alt={`news image ${index + 1}`} />
              <h3 className="font-semibold text-lg">{card.title}</h3>
              {card.content.map((text, idx) => (
                <p key={idx} className={locale === "en" ? fonts.spaceG.className : ""}>
                  {text}
                </p>
              ))}
              <div className="flex items-start gap-2">
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4905 20.6174C16.2498 20.6174 20.1079 16.7593 20.1079 12C20.1079 7.24071 16.2498 3.38255 11.4905 3.38255C6.73121 3.38255 2.87305 7.24071 2.87305 12C2.87305 16.7593 6.73121 20.6174 11.4905 20.6174Z"
                    stroke="black"
                    strokeWidth="2.15436"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M11.4902 6.97315V12H16.5171" stroke="#616B82" strokeWidth="2.15436" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className={locale === "en" ? fonts.spaceG.className : ""}>12 Muharram 1443 - 03 PM</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
