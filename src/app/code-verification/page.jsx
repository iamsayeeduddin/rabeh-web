"use client";
import React from "react";
import useFonts from "@/utils/useFonts";
import { useState } from "react";

const Page = () => {
  const fonts = useFonts();
  function handlePasswordChange(event) {
    const password = event.target.value;
    const strengthBar = document.getElementById("password-strength");

    if (password.length === 0) {
      strengthBar.style.width = "0%";
      strengthBar.style.backgroundColor = "grey";
    } else if (password.length < 6) {
      strengthBar.style.width = "20%";
      strengthBar.style.backgroundColor = "red";
    } else if (password.length < 10) {
      strengthBar.style.width = "50%";
      strengthBar.style.backgroundColor = "orange";
    } else {
      strengthBar.style.width = "100%";
      strengthBar.style.backgroundColor = "green";
    }
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div
      className={`w-full p-5  md:p-[94px_112px_94px_112px] bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]`}
    >
      <div
        className="flex flex-col gap-5 bg-[#FFFFFF] md:px-[112px] py-[32px] rounded-b-[12px] "
        style={{
          boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        }}
      >
        <div className="flex  flex-col gap-3  items-center ">
          <div className="flex flex-col gap-5  col-span-full items-center ">
            <div className="bg-primary rounded-full  h-[100px] w-[100px]   flex items-center justify-center  ">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M7.8125 22.4023V10.9375C7.8125 10.5231 7.97712 10.1257 8.27015 9.83265C8.56317 9.53962 8.9606 9.375 9.375 9.375H40.625C41.0394 9.375 41.4368 9.53962 41.7299 9.83265C42.0229 10.1257 42.1875 10.5231 42.1875 10.9375V22.4023C42.1875 38.8086 28.2617 44.2383 25.4883 45.1562C25.1732 45.2729 24.8268 45.2729 24.5117 45.1562C21.7383 44.2383 7.8125 38.8086 7.8125 22.4023Z"
                  fill="white"
                />
                <path
                  d="M7.8125 22.4023V10.9375C7.8125 10.5231 7.97712 10.1257 8.27015 9.83265C8.56317 9.53962 8.9606 9.375 9.375 9.375H40.625C41.0394 9.375 41.4368 9.53962 41.7299 9.83265C42.0229 10.1257 42.1875 10.5231 42.1875 10.9375V22.4023C42.1875 38.8086 28.2617 44.2383 25.4883 45.1562C25.1732 45.2729 24.8268 45.2729 24.5117 45.1562C21.7383 44.2383 7.8125 38.8086 7.8125 22.4023Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 18.75V26.5625"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.2812 33.5938C27.2812 34.8536 26.2599 35.875 25 35.875C23.7401 35.875 22.7188 34.8536 22.7188 33.5938C22.7188 32.3339 23.7401 31.3125 25 31.3125C26.2599 31.3125 27.2812 32.3339 27.2812 33.5938Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.125"
                />
              </svg>
            </div>
            <p
              className={`text-[#7986A3] text-center  ${fonts.spaceG.className}`}
            >
              {" "}
              1/3
            </p>
            <h2
              className={`font-bold text-[24px] md:text-start text-center ${fonts.spaceG.className}`}
            >
              Code verification
            </h2>
            <p
              className={`text-[16] text-[#7986A3] p-5 md:p-0 md:text-start text-center ${fonts.spaceG.className}`}
            >
              Please enter the code we just sent to the email address
            </p>
            <p
              className={`text-[16] md:text-start text-center ${fonts.spaceG.className}`}
            >
              Mohamed@abosoliman.com
            </p>
          </div>
        </div>
        <form
          className={`w-full md:p-0 p-3 max-w-lg ${fonts.spaceG.className}`}
          action=""
          method="POST"
        >
          <div className="flex space-x-4 mb-6 items-center justify-center">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="relative">
                <input   
                 className={`appearance-none block bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center h-[76px] w-[70px]  ${fonts.spaceG.className}`}
            
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  required
                  onChange={(e) => {
                    if (e.target.value.length === 1) {
                      const nextInput = document.getElementById(
                        `otp-input-${index + 1}`
                      );
                      if (nextInput) {
                        nextInput.focus();
                      }
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <p className="text-bold  ">00:48 </p>
            <p className="text-[#7986A3] "> Resend the code after</p>
          </div>

          <div className="flex items-center justify-center my-8">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
