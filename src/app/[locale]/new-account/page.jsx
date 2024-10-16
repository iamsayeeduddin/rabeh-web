"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";
import OTPVerify from "@/components/OTPVerify";
import PhoneOTPVerify from "@/components/PhoneOTPVerify";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import axios from "axios";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [stage, setStage] = useState("Register");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [userId, setUserId] = useState("");
  const params = useSearchParams();
  const router = useRouter();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      formik.setFieldValue("profilePic", file);
    } else {
      toast.error("Please upload a valid image (PNG, JPG, or JPEG)");
      setImage(null); // Clear previous image
    }
  };

  const handleRegister = () => {
    setIsLoading(true);
    setEmail(formik.values.email);

    const formData = new FormData();

    Object.keys(formik.values).forEach((key) => {
      formData.append(key, formik.values[key]);
    });

    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/users/registerUser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          changeStage("Email");
          toast(response?.data?.message);
          formik.resetForm();
        }
      })
      .catch((error) => {
        toast(error?.response?.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      countryCode: "+966",
      type: params.get("type"),
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phoneNumber: Yup.string().required("Mobile Number is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      handleRegister();
    },
  });

  function handlePasswordChange(event) {
    const password = event.target.value;
    const strengthBar = document.getElementById("password-strength");

    let strength = 0;

    // Increase strength based on password criteria
    if (password.length > 0) strength += 1;
    if (password.length >= 8) strength += 1; // Good length
    if (/[A-Z]/.test(password)) strength += 1; // Contains uppercase letter
    if (/[a-z]/.test(password)) strength += 1; // Contains lowercase letter
    if (/\d/.test(password)) strength += 1; // Contains number
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1; // Contains special character

    // Update the strength bar based on the strength value
    switch (strength) {
      case 0:
        strengthBar.style.width = "0%";
        strengthBar.style.backgroundColor = "grey";
        break;
      case 1:
      case 2:
        strengthBar.style.width = "20%";
        strengthBar.style.backgroundColor = "red";
        break;
      case 3:
      case 4:
        strengthBar.style.width = "50%";
        strengthBar.style.backgroundColor = "orange";
        break;
      case 5:
      case 6:
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "green";
        break;
      default:
        strengthBar.style.width = "0%";
        strengthBar.style.backgroundColor = "grey";
        break;
    }
    // Manually trigger formik's setFieldValue for password
    formik.setFieldValue("password", password);
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  useEffect(() => {
    let u = JSON.parse(localStorage.getItem("user"));
    if (u?._id && stage === "Register") {
      router.push("/");
    }
  }, []);

  const countryCodes = [
    { value: "+91", label: "India" },
    { value: "+966", label: "KSA" },
    { value: "+971", label: "UAE" },
  ];


  const changeStage = (stage) => {
    setStage(stage);
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <div className="w-full p-5 md:p-[94px_112px_94px_112px] bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]">
      <div
        className="flex flex-col gap-5 bg-[#FFFFFF] md:px-[112px] py-[32px] rounded-b-[12px]"
        style={{ boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A" }}
      >
        {stage === "Register" ? (
          <>
            <p className={`text-[#7986A3] text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>1/2</p>
            <h2 className={`font-bold text-[24px] md:text-start text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>
              {t("new")} {t(formik.values.type?.toLowerCase())} {t("acc")}
            </h2>
            <p className={`text-[16] md:text-start text-center mb-4 ${locale === "en" ? fonts.spaceG.className : ""}`}>{t("enterPersonalInfo")}</p>
            <div className="flex md:flex-row flex-col gap-3 items-center">
              <div className="flex gap-5 col-span-full items-center">
                <div className="bg-primary rounded-full h-[72px] w-[72px] drop-shadow-lg border-x-4 border-y-4 border-white flex items-center justify-center">
                  {image ? (
                    <img src={image} alt="Uploaded" className="h-16 w-16 rounded-full object-cover" />
                  ) : (
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 8C20.6863 8 18 10.6863 18 14C18 17.3137 20.6863 20 24 20C27.3137 20 30 17.3137 30 14C30 10.6863 27.3137 8 24 8ZM14 14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14C34 19.5228 29.5228 24 24 24C18.4772 24 14 19.5229 14 14ZM12.1659 40H35.8341C34.8819 34.3246 29.946 30 24 30C18.054 30 13.1181 34.3246 12.1659 40ZM8 42C8 33.1634 15.1634 26 24 26C32.8366 26 40 33.1634 40 42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex flex-row items-center justify-center md:h-8 md:w-[140px] px-2 py-4 gap-1 rounded-md border-2 border-primary">
                  <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="hidden" id="file-input" />
                  <label htmlFor="file-input" className="cursor-pointer flex items-center">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.5391 2.95957C13.1486 2.56905 12.5154 2.56905 12.1249 2.95957L11.5963 3.48817L13.0105 4.90238L13.5391 4.37378C13.9296 3.98326 13.9296 3.35009 13.5391 2.95957ZM12.0677 5.84519L10.6535 4.43097L3.16536 11.9191V13.357H4.55589L12.0677 5.84519ZM11.1821 2.01676C12.0933 1.10554 13.5707 1.10554 14.4819 2.01676C15.3931 2.92798 15.3931 4.40537 14.4819 5.31659L5.30344 14.4951C5.17841 14.6201 5.00884 14.6903 4.83203 14.6903H2.4987C2.13051 14.6903 1.83203 14.3919 1.83203 14.0237V11.643C1.83203 11.4661 1.90227 11.2966 2.02729 11.1715L11.1821 2.01676Z"
                        fill="#7860DC"
                      />
                    </svg>
                    <p className="text-primary">{image ? t("changePhoto") : t("addPhoto")}</p>
                  </label>
                </div>
              </div>
            </div>

            <div className={`w-full md:p-0 p-3 max-w-lg ${locale === "en" ? fonts.spaceG.className : ""}`}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                    {t("firstName")}
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-gray-200"
                    } rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p>
                  ) : null}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                    {t("lastName")}
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-gray-200"
                    } rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p> : null}
                </div>
              </div>

              <div className="mb-6 relative">
                <label className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 ${locale === "en" ? "" : "text-right"}`} htmlFor="phone">
                  {t("phoneNumber")}
                </label>
                <div className="relative">
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.phoneNumber && formik.errors.phoneNumber ? "border-red-500" : "border-gray-200"
                    } rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                      locale === "en" ? "pr-16" : "pl-16"
                    }`}
                    id="phone"
                    type="text"
                    name="phoneNumber"
                    placeholder="+966555544444"
                    {...formik.getFieldProps("phoneNumber")}
                    onChange={(e) => {
                      formik?.setFieldValue("phoneNumber", e.target.value);
                      setPhone(e.target.value);
                    }}
                  />
                  <div className={`absolute inset-y-0 ${locale === "en" ? "right-0" : "left-0"} flex items-center px-2 text-gray-700`}>
                    <select
                      className="block bg-transparent border-none bg-no-repeat text-gray-700 pr-8 focus:outline-none focus:bg-white h-full"
                      id="countryCode"
                      {...formik.getFieldProps("countryCode")}
                      onChange={(e) => {
                        formik?.setFieldValue("countryCode", e.target.value);
                        setCountryCode(e.target.value);
                      }}
                    >
                      {countryCodes
                        .filter((ele) => (process.env.NEXT_PUBLIC_APP_MODE === "production" ? ele.label !== "IN" : true))
                        .map((ele) => (
                          <option key={ele.value} value={ele.value}>
                            {ele.label}
                          </option>
                        ))}
                    </select>
                  </div>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <p className={`text-red-500 text-xs italic ${locale === "en" ? "text-left" : "text-right"}`}>{formik.errors.phoneNumber}</p>
                  ) : null}
                </div>
              </div>

              <div className="mb-6">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  {t("email")}
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border ${
                    formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-200"
                  } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? <p className="text-red-500 text-xs italic">{formik.errors.email}</p> : null}
              </div>

              <div className="mb-6 relative">
                <label
                  className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 ${locale === "en" ? "" : "text-right"}`}
                  htmlFor="password"
                >
                  {t("password")}
                </label>
                <div className="relative">
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="password"
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="********"
                    onChange={handlePasswordChange} // Custom handler for password strength
                    value={formik.values.password}
                  />
                  <button
                    type="button"
                    className={`absolute inset-y-0 ${locale === "en" ? "right-0" : "left-0"} px-3 flex items-center`}
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? t("hide") : t("show")}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p className={`text-red-500 text-xs italic ${locale === "en" ? "text-left" : "text-right"}`}>{formik.errors.password}</p>
                ) : null}
                <div id="password-strength" className="h-2 mt-1 rounded-lg" />
              </div>

              <div className="mb-6">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="confirmPassword">
                  {t("confirmPassword")}
                </label>
                <input
                  className={`appearance-none block w-full bg-white text-gray-700 border ${
                    formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border-gray-200"
                  } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="confirmPassword"
                  type={isPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="********"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <p className="text-red-500 text-xs italic">{formik.errors.confirmPassword}</p>
                ) : null}
              </div>

              <div className="flex items-center justify-between">
                <button
                  className={
                    "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full " +
                    (isLoading ? "animate-pulse" : "")
                  }
                  type="button"
                  onClick={formik.handleSubmit}
                  disabled={isLoading}
                >
                  {t("signUp")}
                </button>
              </div>
              <div
                className={`flex flex-col  pt-4 md:flex-row items-center justify-center text-[16px] mt-1 ${
                  locale === "en" ? fonts.spaceG.className : ""
                }`}
              >
                {t("alreadyAcc")}{" "}
                <p className="text-primary ml-2 cursor-pointer" onClick={() => !isLoading && router.push("/login")}>
                  {" "}
                  {t("signIn")}
                </p>
              </div>
            </div>
          </>
        ) : stage === "Email" ? (
          <OTPVerify email={email} locale={locale} isRegister={true} setStage={changeStage} setUserId={setUserId} />
        ) : stage === "Phone" ? (
          <PhoneOTPVerify phoneNumber={countryCode + phone} userId={userId} locale={locale} setStage={changeStage} />
        ) : null}
      </div>
    </div>
  );
};

export default Page;
