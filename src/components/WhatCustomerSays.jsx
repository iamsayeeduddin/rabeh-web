import useFonts from "@/utils/useFonts";
import React from "react";

const WhatCustomerSays = () => {
  const fonts = useFonts();
  const testimonials = [
    {
      title: "Small Business Owner",
      description:
        "Thanks to Rabeh, I was able to expand my small business beyond my wildest dreams. The exposure and funding we received through their platform were game-changers. The entire process was smooth, and the Rabeh team was always there to guide us.",
      name: "Emily S.",
      position: "Small Business Owner",
      imageUrl: "/user3.png",
    },
    {
      title: "Non-Profit Director",
      description:
        "Rabeh helped our non-profit organization raise the necessary funds to launch our community project. Their platform made it easy to reach out to potential donors and share our mission. We couldn't have done it without their amazing support!",
      name: "Michael L.",
      position: "Non-Profit Director",
      imageUrl: "/user1.png",
    },
    {
      title: "App Developer",
      description:
        "As an app developer, securing funding can be challenging. Rabeh made it possible for us to get the backing we needed to launch our app successfully. The platform's reach and the team's dedication were key to our fundraising success.",
      name: "Sarah K.",
      position: "App Developer",
      imageUrl: "/user2.png",
    },
    {
      title: "Innovative Product Creator",
      description:
        "Rabeh was the perfect partner for our crowdfunding campaign. The exposure and support we received helped us surpass our funding goals. Their commitment to helping innovators like us is evident in every step of the process.",
      name: "David M.",
      position: "Innovative Product Creator",
      imageUrl: "/user3.png",
    },
    {
      title: "Social Entrepreneur",
      description:
        "Rabeh provided the platform and resources we needed to bring our social enterprise to life. Their team was supportive and responsive, and the crowdfunding campaign exceeded our expectations. We're now making a positive impact, thanks to Rabeh.",
      name: "Lisa P.",
      position: "Social Entrepreneur",
      imageUrl: "/user3.png",
    },
  ];
  

  return (
    <div className={"flex flex-col p-[72px] bg-white " + fonts.inter.className}>
      <div className="justify-start text-lg text-medium text-[#737373]">Testimonial</div>
      <div className="justify-start text-5xl font-semibold font-inter mt-5">What Customer Says</div>
      <div className="grid grid-cols-3 gap-[32px] mt-10 p-0 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="box-border m-0 flex flex-col items-start p-10 gap-[32px]  bg-white border border-[#E5E5E5] shadow-[0px_4px_11px_-1px_rgba(10,10,10,0.04)] rounded-lg "
          >
            <p className="text-lg font-medium leading-[24px] text-left">&quot;{testimonial.description}&ldquo;</p>
            <div className="flex items-center mt-4  ">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4 bg-[#D9F6C6] " />
              <div className="">
                <p className="text-[14px] font-inter font-medium">{testimonial.name}</p>
                <p className="text-[12px] text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCustomerSays;
