"use client";
import React from "react";
import useFonts from "@/utils/useFonts";
import { useState } from "react";
import Logo from "../../../components/Logo";
import OTPVerify from "@/components/OTPVerify";
import PhoneOTPVerify from "@/components/PhoneOTPVerify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [stage, setStage] = useState("Login");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const login = (values) => {
    setLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/login", values)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        toast.success(res.data.message);
        window.location.href = "/";
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        if (error.response.status === 412) {
          localStorage.setItem("user", JSON.stringify(error?.response?.data?.user));
          error?.setPhone(error?.response?.data?.user?.phoneNumber);
          if (error.response.data.statusCode === "EMAIL_NOT_VERIFIED") setStage("Email");
          if (error.response.data.statusCode === "PHONE_NOT_VERIFIED") setStage("Phone");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      className={`w-full p-5  md:p-[94px_112px_94px_112px] bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]`}
    >
      <div
        className="flex flex-col gap-3 w-full md:w-1/2 bg-[#FFFFFF] md:px-[112px] py-[32px] rounded-b-[12px] items-center justify-center"
        style={{
          boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        }}
      >
        {stage === "Login" ? (
          <>
            <div className="flex items-center justify-center mb-5">
              <Logo width={176} height={75} />
            </div>

            <h2 className={`font-bold text-[36px] text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>{t("welcome")}</h2>
            <p className={`text-[16]  text-center text-[#7986A3] ${locale === "en" ? fonts.spaceG.className : ""}`}>{t("loginAcc")}</p>
            <div className="flex md:flex-row flex-col gap-3  items-center ">
              <div className="flex gap-5  col-span-full items-center "></div>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setEmail(values.email);
                login(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className={`w-full md:p-0 p-3 max-w-lg ${locale === "en" ? fonts.spaceG.className : ""}`}>
                  <div className="mb-6">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                      {t("email")}
                    </label>
                    <Field
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                  </div>

                  <div className="mb-6 relative">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      {t("password")}
                    </label>
                    <div className="relative">
                      <Field
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pr-10"
                        id="grid-password"
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder="**********"
                        required
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                        <svg id="password-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.342 7.99998C3.16582 10.331 5.38923 12 8.0008 12C10.6123 12 12.8357 10.3311 13.6596 8.00002C12.8358 5.66897 10.6124 4 8.00078 4C5.38923 4 3.16583 5.66895 2.342 7.99998ZM1.00329 7.80021C1.93757 4.82561 4.71618 2.66667 8.00078 2.66667C11.2854 2.66667 14.064 4.82564 14.9983 7.80026C15.0391 7.93031 15.0391 8.06975 14.9983 8.19979C14.064 11.1744 11.2854 13.3333 8.0008 13.3333C4.71617 13.3333 1.93755 11.1744 1.00329 8.19974C0.962445 8.0697 0.962445 7.93026 1.00329 7.80021ZM8.00049 6.66667C7.26411 6.66667 6.66716 7.26362 6.66716 8C6.66716 8.73638 7.26411 9.33333 8.00049 9.33333C8.73687 9.33333 9.33382 8.73638 9.33382 8C9.33382 7.26362 8.73687 6.66667 8.00049 6.66667ZM5.33382 8C5.33382 6.52724 6.52773 5.33333 8.00049 5.33333C9.47325 5.33333 10.6672 6.52724 10.6672 8C10.6672 9.47276 9.47325 10.6667 8.00049 10.6667C6.52773 10.6667 5.33382 9.47276 5.33382 8Z"
                            fill="#7986A3"
                          />
                        </svg>
                      </span>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                  </div>
                  <div
                    className={`flex flex-col md:flex-row items-center justify-center text-[16px] my-8 ${
                      locale === "en" ? fonts.spaceG.className : ""
                    }`}
                  >
                    {t("forgotPass")}{" "}
                    <p className="text-primary mx-2 cursor-pointer" onClick={() => !isSubmitting && router.push("/reset-password")}>
                      {" "}
                      {t("reset")}
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      className={
                        "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full " +
                        (isSubmitting || loading ? " opacity-50 animate-pulse cursor-not-allowed" : "")
                      }
                      type="submit"
                      disabled={isSubmitting || loading}
                    >
                      {t("login")}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        ) : stage === "Email" ? (
          <OTPVerify email={email} locale={locale} setStage={setStage} />
        ) : stage === "Phone" ? (
          <PhoneOTPVerify phoneNumber={"+966" + phone} locale={locale} setStage={setStage} />
        ) : null}
      </div>
    </div>
  );
};

export default Page;
