"use client";
import React, { useState } from "react";
import useFonts from "@/utils/useFonts";
import OTPVerify from "@/components/OTPVerify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslations } from "next-intl";

const Page = () => {
  const fonts = useFonts();
  const t = useTranslations();

  const [isEmail, setIsEmail] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (values, { setSubmitting }) => {
    
    setEmail(values.email);
    setIsEmail(true); 
    setSubmitting(false);
  };

  return (
    <div
      className={`w-full p-5 md:p-[94px_112px_94px_112px] bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]`}
    >
      <div
        className="flex flex-col gap-3 w-full md:w-1/2 bg-[#FFFFFF] md:px-[112px] py-[32px] rounded-b-[12px] items-center justify-center"
        style={{
          boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        }}
      >
        {!isEmail ? (
          <>
            <div className="flex items-center justify-center mb-5">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="50" fill="#7860DC" />
                <path
                  opacity="0.2"
                  d="M65.625 42.1875H34.375C33.9606 42.1875 33.5632 42.3521 33.2701 42.6451C32.9771 42.9382 32.8125 43.3356 32.8125 43.75V65.625C32.8125 66.0394 32.9771 66.4368 33.2701 66.7299C33.5632 67.0229 33.9606 67.1875 34.375 67.1875H65.625C66.0394 67.1875 66.4368 67.0229 66.7299 66.7299C67.0229 66.4368 67.1875 66.0394 67.1875 65.625V43.75C67.1875 43.3356 67.0229 42.9382 66.7299 42.6451C66.4368 42.3521 66.0394 42.1875 65.625 42.1875ZM50 56.25C49.2274 56.25 48.4722 56.0209 47.8298 55.5917C47.1874 55.1625 46.6868 54.5524 46.3911 53.8386C46.0954 53.1248 46.0181 52.3394 46.1688 51.5817C46.3195 50.8239 46.6916 50.1279 47.2379 49.5816C47.7842 49.0353 48.4802 48.6633 49.2379 48.5126C49.9957 48.3618 50.7811 48.4392 51.4949 48.7348C52.2086 49.0305 52.8187 49.5312 53.2479 50.1736C53.6772 50.8159 53.9062 51.5712 53.9062 52.3438C53.9062 53.3798 53.4947 54.3733 52.7621 55.1059C52.0296 55.8384 51.036 56.25 50 56.25Z"
                  fill="white"
                />
                <path
                  d="M50 56.25C52.1574 56.25 53.9062 54.5011 53.9062 52.3438C53.9062 50.1864 52.1574 48.4375 50 48.4375C47.8426 48.4375 46.0938 50.1864 46.0938 52.3438C46.0938 54.5011 47.8426 56.25 50 56.25Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 56.25V60.9375"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M65.625 42.1875H34.375C33.5121 42.1875 32.8125 42.8871 32.8125 43.75V65.625C32.8125 66.4879 33.5121 67.1875 34.375 67.1875H65.625C66.4879 67.1875 67.1875 66.4879 67.1875 65.625V43.75C67.1875 42.8871 66.4879 42.1875 65.625 42.1875Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.9688 42.1875V35.1562C42.9688 33.2914 43.7095 31.503 45.0282 30.1844C46.3468 28.8658 48.1352 28.125 50 28.125C51.8648 28.125 53.6532 28.8658 54.9718 30.1844C56.2905 31.503 57.0312 33.2914 57.0312 35.1562V42.1875"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className={`font-bold text-[36px] text-center ${fonts.spaceG.className}`}>
              {t("Password Reset")}
            </h2>
            <p className={`text-[16] text-center text-[#7986A3] ${fonts.spaceG.className}`}>
              {t("Enter your email address, and we will send a verification code to your email")}
            </p>

            <Formik
              initialValues={{ email: "" }}
              onSubmit={handleEmailSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={`w-full md:p-0 p-3 max-w-lg ${fonts.spaceG.className}`}>
                  <div className="mb-6">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-email"
                    >
                      {t("Email Address")}
                    </label>
                    <Field
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs italic"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {t("Send")}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <OTPVerify email={email} />
        )}
      </div>
    </div>
  );
};

export default Page;
