import useFonts from "@/utils/useFonts";
import React from "react";

const WhatCustomerSays = () => {
  const fonts = useFonts();
  // Sample card data
  const testimonials = [
    {
      title: "Customer 1",
      description:
        "Investing through RABEH has been a seamless experience. The platform's transparency and advanced tools gave me the confidence to make informed decisions.",
      name: "John Doe",
      position: "Investor",
      imageUrl: "/user1.png",
    },
    {
      title: "Customer 2",
      description:
        "Investing through RABEH has been a seamless experience. The platform's transparency and advanced tools gave me the confidence to make informed decisions.",
      name: "Michael B.",
      position: "Investor",
      imageUrl: "/user1.png",
    },
    {
      title: "Customer 3",
      description:
        "Investing through RABEH has been a seamless experience. The platform's transparency and advanced tools gave me the confidence to make informed decisions.",
      name: "Emily Johnson",
      position: "Client",
      imageUrl: "/user1.png",
    },
    {
      title: "Customer 4",
      description:
        "Investing through RABEH has been a seamless experience. The platform's transparency and advanced tools gave me the confidence to make informed decisions.",
      name: "Michael Brown",
      position: "User",
      imageUrl: "/user1.png",
    },
    {
      title: "Customer 5",
      description:
        "Investing through RABEH has been a seamless experience. The platform's transparency and advanced tools gave me the confidence to make informed decisions.",
      name: "Sarah Wilson",
      position: "Customer",
      imageUrl: "/user1.png",
    },
    {
      title: "Customer 6",
      description: "Will definitely buy again!",
      name: "David Lee",
      position: "Client",
      imageUrl: "/user1.png",
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
            className="box-border m-0 flex flex-col items-start p-10 gap-[32px] max-h-[302px] bg-white border border-[#E5E5E5] shadow-[0px_4px_11px_-1px_rgba(10,10,10,0.04)] rounded-lg "
          >
            <p className="text-lg font-medium leading-[24px] text-left">&quot;{testimonial.description}&ldquo;</p>
            <div className="flex items-center mt-4">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
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
