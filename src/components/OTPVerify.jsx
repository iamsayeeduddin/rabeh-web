"use client";
import React, { useState, useEffect } from "react";
import useFonts from "@/utils/useFonts";
import endpoint from "@/utils/apiUtil";
import { toast } from "react-toastify";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import axios from "axios";

function OTPVerify({ email, isReset, userType, locale, isRegister = false, setStage, setUserId }) {
  const fonts = useFonts();
  const router = useRouter();
  const t = useTranslations();
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsCountdownFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const resendOTP = () => {
    setTimeLeft(60);
    setIsCountdownFinished(false);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/resendOTP", { email })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Failed");
      });
  };

  const handleVerify = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/verifyEmail", { email, otp, isReset, isRegister })
      .then((res) => {
        toast.success(res.data.message);
        let user = res.data.data;
        setStage("Phone");
        setUserId(user._id);
        if (isReset) {
          router.push("/new-password/?email=" + email);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        if (error.response.data.statusCode === "PHONE_NOT_VERIFIED") {
          setStage("Phone");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="flex  flex-col gap-3  items-center ">
        <div className="flex flex-col gap-5  col-span-full items-center ">
          <div className="bg-primary rounded-full  h-[100px] w-[100px]   flex items-center justify-center  ">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.2"
                d="M7.8125 22.4023V10.9375C7.8125 10.5231 7.97712 10.1257 8.27015 9.83265C8.56317 9.53962 8.9606 9.375 9.375 9.375H40.625C41.0394 9.375 41.4368 9.53962 41.7299 9.83265C42.0229 10.1257 42.1875 10.5231 42.1875 10.9375V22.4023C42.1875 38.8086 28.2617 44.2383 25.4883 45.1562C25.1732 45.2729 24.8268 45.2729 24.5117 45.1562C21.7383 44.2383 7.8125 38.8086 7.8125 22.4023Z"
                fill="white"
              />
              <path
                d="M7.8125 22.4023V10.9375C7.8125 10.5231 7.97712 10.1257 8.27015 9.83265C8.56317 9.53962 8.9606 9.375 9.375 9.375H40.625C41.0394 9.375 41.4368 9.53962 41.7299 9.83265C42.0229 10.1257 42.1875 10.5231 42.1875 10.9375V22.4023C42.1875 38.8086 28.2617 44.2383 25.4883 45.1562C25.1732 45.2729 24.8268 45.2729 24.5117 45.1562C21.7383 44.2383 7.8125 38.8086 7.8125 22.4023Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M25 18.75V26.5625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M27.2812 33.5938C27.2812 34.8536 26.2599 35.875 25 35.875C23.7401 35.875 22.7188 34.8536 22.7188 33.5938C22.7188 32.3339 23.7401 31.3125 25 31.3125C26.2599 31.3125 27.2812 32.3339 27.2812 33.5938Z"
                fill="white"
                stroke="white"
                strokeWidth="0.125"
              />
            </svg>
          </div>
          <p className={`text-[#7986A3] text-center  ${locale === "en" ? fonts.spaceG.className : ""}`}> 2/2</p>
          <h2 className={`font-bold text-[24px] md:text-start text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>{t("codeVerify")}</h2>
          <p className={`text-[16] text-[#7986A3] p-5 md:p-0 text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>{t("plsEnterCode")}</p>
          <p className={`text-[16] md:text-start text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>{email}</p>
        </div>
      </div>
      <form className={`w-full md:p-0 p-3 max-w-lg ${locale === "en" ? fonts.spaceG.className : ""}`} action="" method="POST">
        <div className="flex space-x-4 mb-6 items-center justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="relative">
              <input
                className={`appearance-none block bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center h-[76px] w-[70px]  ${
                  locale === "en" ? fonts.spaceG.className : ""
                }`}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                required
                disabled={loading}
                onChange={(e) => {
                  const value = e.target.value;

                  let newOtp = otp.split("");
                  newOtp[index] = value;
                  newOtp = newOtp.join("");

                  setOtp(newOtp);

                  if (value.length === 1 && index < 3) {
                    const nextInput = document.getElementById(`otp-input-${index + 1}`);
                    if (nextInput) {
                      nextInput.focus();
                    }
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !e.target.value) {
                    const prevInput = document.getElementById(`otp-input-${index - 1}`);
                    if (prevInput) {
                      prevInput.focus();
                    }
                  }
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          {!isCountdownFinished ? (
            <>
              <p className="text-[#7986A3] ">{t("resendCode")}</p>
              <p className="text-bold">{formatTime(timeLeft)}</p>
            </>
          ) : (
            <p className="text-primary cursor-pointer" onClick={resendOTP}>
              {t("resend")}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center my-8">
          <button
            className={
              "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full " +
              (loading ? "animate-pulse" : "")
            }
            type="button"
            onClick={handleVerify}
            disabled={otp.length < 4 || loading}
          >
            {t("verification")}
          </button>
        </div>
      </form>
    </>
  );
}

export default OTPVerify;
