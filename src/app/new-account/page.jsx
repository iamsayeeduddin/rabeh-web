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
        <p className={`text-[#7986A3] md:text-start text-center  ${fonts.spaceG.className}`}> 1/3</p>
        <h2
          className={`font-bold text-[24px] md:text-start text-center ${fonts.spaceG.className}`}
        >
          New Account
        </h2>
        <p
          className={`text-[16] md:text-start text-center ${fonts.spaceG.className}`}
        >
          Enter your personal information to complete the registration process
        </p>
        <div className="flex md:flex-row flex-col gap-3  items-center ">
          <div className="flex gap-5  col-span-full items-center ">
            <div className="bg-primary rounded-full  h-[72px] w-[72px] drop-shadow-lg  border-x-4 border-t-0 border-b-4  border-white  flex items-center justify-center  ">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 8C20.6863 8 18 10.6863 18 14C18 17.3137 20.6863 20 24 20C27.3137 20 30 17.3137 30 14C30 10.6863 27.3137 8 24 8ZM14 14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14C34 19.5228 29.5228 24 24 24C18.4772 24 14 19.5229 14 14ZM12.1659 40H35.8341C34.8819 34.3246 29.946 30 24 30C18.054 30 13.1181 34.3246 12.1659 40ZM8 42C8 33.1634 15.1634 26 24 26C32.8366 26 40 33.1634 40 42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center justify-center md:h-8 md:w-[140px] px-2 py-4 gap-1 rounded-md border-2 border-primary ">
              <div>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5391 2.95957C13.1486 2.56905 12.5154 2.56905 12.1249 2.95957L11.5963 3.48817L13.0105 4.90238L13.5391 4.37378C13.9296 3.98326 13.9296 3.35009 13.5391 2.95957ZM12.0677 5.84519L10.6535 4.43097L3.16536 11.9191V13.357H4.55589L12.0677 5.84519ZM11.1821 2.01676C12.0933 1.10554 13.5707 1.10554 14.4819 2.01676C15.3931 2.92798 15.3931 4.40537 14.4819 5.31659L5.30344 14.4951C5.17841 14.6201 5.00884 14.6903 4.83203 14.6903H2.4987C2.13051 14.6903 1.83203 14.3919 1.83203 14.0237V11.643C1.83203 11.4661 1.90227 11.2966 2.02729 11.1715L11.1821 2.01676Z"
                    fill="#7860DC"
                  />
                </svg>
              </div>
              <p className="text-primary">add photo</p>
            </div>
          </div>
        </div>
        <form
          className={`w-full md:p-0 p-3 max-w-lg ${fonts.spaceG.className}`}
          action=""
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                name="first-name"
                placeholder="Jane"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="last-name"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="mb-6 relative">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-phone"
            >
              Mobile Number
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-16"
                id="grid-phone"
                type="text"
                name="phone"
                placeholder="+966555544444"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <select
                  className="block bg-transparent border-none bg-no-repeat text-gray-700 pr-8 focus:outline-none focus:bg-white h-full"
                  id="country-code"
                >
                  <option value="ksa">KSA</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
 <div className="mb-6 relative">
  <label
    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor="grid-password"
  >
    Password
  </label>
  <div className="relative">
    <input
      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pr-10"
      id="grid-password"
      type={isPasswordVisible ? "text" : "password"} 
      name="password"
      placeholder="**********"
      required
      onChange={handlePasswordChange}
    />
    <span
      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
      onClick={togglePasswordVisibility}
    >
      <svg
        id="password-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.342 7.99998C3.16582 10.331 5.38923 12 8.0008 12C10.6123 12 12.8357 10.3311 13.6596 8.00002C12.8358 5.66897 10.6124 4 8.00078 4C5.38923 4 3.16583 5.66895 2.342 7.99998ZM1.00329 7.80021C1.93757 4.82561 4.71618 2.66667 8.00078 2.66667C11.2854 2.66667 14.064 4.82564 14.9983 7.80026C15.0391 7.93031 15.0391 8.06975 14.9983 8.19979C14.064 11.1744 11.2854 13.3333 8.0008 13.3333C4.71617 13.3333 1.93755 11.1744 1.00329 8.19974C0.962445 8.0697 0.962445 7.93026 1.00329 7.80021ZM8.00049 6.66667C7.26411 6.66667 6.66716 7.26362 6.66716 8C6.66716 8.73638 7.26411 9.33333 8.00049 9.33333C8.73687 9.33333 9.33382 8.73638 9.33382 8C9.33382 7.26362 8.73687 6.66667 8.00049 6.66667ZM5.33382 8C5.33382 6.52724 6.52773 5.33333 8.00049 5.33333C9.47325 5.33333 10.6672 6.52724 10.6672 8C10.6672 9.47276 9.47325 10.6667 8.00049 10.6667C6.52773 10.6667 5.33382 9.47276 5.33382 8Z"
          fill="#7986A3"
        />
      </svg>
    </span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
    <div
      id="password-strength"
      className="h-1.5 rounded-full w-[0%] bg-gray-400"
    ></div>
  </div>
</div>




<div className="mb-6 relative">
  <label
    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
    htmlFor="grid-password"
  >
   Confirm Password
  </label>
  <div className="relative">
    <input
      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pr-10"
      id="grid-password"
      type={isPasswordVisible ? "text" : "password"} 
      name="password"
      placeholder="**********"
      required
      onChange={handlePasswordChange}
    />
    <span
      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
      onClick={togglePasswordVisibility}
    >
      <svg
        id="password-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.342 7.99998C3.16582 10.331 5.38923 12 8.0008 12C10.6123 12 12.8357 10.3311 13.6596 8.00002C12.8358 5.66897 10.6124 4 8.00078 4C5.38923 4 3.16583 5.66895 2.342 7.99998ZM1.00329 7.80021C1.93757 4.82561 4.71618 2.66667 8.00078 2.66667C11.2854 2.66667 14.064 4.82564 14.9983 7.80026C15.0391 7.93031 15.0391 8.06975 14.9983 8.19979C14.064 11.1744 11.2854 13.3333 8.0008 13.3333C4.71617 13.3333 1.93755 11.1744 1.00329 8.19974C0.962445 8.0697 0.962445 7.93026 1.00329 7.80021ZM8.00049 6.66667C7.26411 6.66667 6.66716 7.26362 6.66716 8C6.66716 8.73638 7.26411 9.33333 8.00049 9.33333C8.73687 9.33333 9.33382 8.73638 9.33382 8C9.33382 7.26362 8.73687 6.66667 8.00049 6.66667ZM5.33382 8C5.33382 6.52724 6.52773 5.33333 8.00049 5.33333C9.47325 5.33333 10.6672 6.52724 10.6672 8C10.6672 9.47276 9.47325 10.6667 8.00049 10.6667C6.52773 10.6667 5.33382 9.47276 5.33382 8Z"
          fill="#7986A3"
        />
      </svg>
    </span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
    <div
      id="password-strength"
      className="h-1.5 rounded-full w-[0%] bg-gray-400"
    ></div>
  </div>
</div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-3/4"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div
          className={`flex flex-col md:flex-row items-center justify-center text-[16px] mt-1 ${fonts.spaceG.className}`}
        >
          Already have an account? <p className="text-primary ml-2"> Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
