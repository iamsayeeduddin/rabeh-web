"use client";
import React, { useEffect, useReducer, useState } from "react";
import useFonts from "@/utils/useFonts";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslations } from "next-intl";
import * as Yup from "yup";
import zxcvbn from "zxcvbn";
import { useRouter } from "@/i18n/routing";
import endpoint from "@/utils/apiUtil";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const router = useRouter();
  const params = useSearchParams();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [confirmPasswordStrength, setConfirmPasswordStrength] = useState(0);

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const evaluatePasswordStrength = (password) => {
    const result = zxcvbn(password);
    setPasswordStrength(result.score);
  };

  const evaluateConfirmPasswordStrength = (password) => {
    const result = zxcvbn(password);
    setConfirmPasswordStrength(result.score);
  };

  useEffect(() => {
    setEmail(params.get("email"));
  }, [params]);

  const resetPass = (vals) => {
    setLoading(true);
    vals.newPassword = vals.password;
    vals.email = email;
    delete vals.password;
    delete vals.confirmPassword;
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/new-password", vals)
      .then((res) => {
        if (res.status === 200) {
          setResetSuccess(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
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
        {!resetSuccess ? (
          <>
            <div className="flex items-center justify-center mb-5">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="50" fill="#7860DC" />
                <path
                  opacity="0.2"
                  d="M65.625 42.1875H34.375C33.9606 42.1875 33.5632 42.3521 33.2701 42.6451C32.9771 42.9382 32.8125 43.3356 32.8125 43.75V65.625C32.8125 66.0394 32.9771 66.4368 33.2701 66.7299C33.5632 67.0229 33.9606 67.1875 34.375 67.1875H65.625C66.0394 67.1875 66.4368 67.0229 66.7299 66.7299C67.0229 66.4368 67.1875 66.0394 67.1875 65.625V43.75C67.1875 43.3356 67.0229 42.9382 66.7299 42.6451C66.4368 42.3521 66.0394 42.1875 65.625 42.1875ZM50 56.25C49.2274 56.25 48.4722 56.0209 47.8298 55.5917C47.1874 55.1625 46.6868 54.5524 46.3911 53.8386C46.0954 53.1248 46.0181 52.3394 46.1688 51.5817C46.3195 50.8239 46.6916 50.1279 47.2379 49.5816C47.7842 49.0353 48.4802 48.6633 49.2379 48.5126C49.9957 48.3618 50.7811 48.4392 51.4949 48.7348C52.2086 49.0305 52.8187 49.5312 53.2479 50.1736C53.6772 50.8159 53.9062 51.5712 53.9062 52.3438C53.9062 53.3798 53.4947 54.3733 52.7621 55.1059C52.0296 55.8384 51.036 56.25 50 56.25Z"
                  fill="white"
                />
                <path
                  d="M50 56.25C52.1574 56.25 53.9062 54.5011 53.9062 52.3438C53.9062 50.1864 52.1574 48.4375 50 48.4375C47.8426 48.4375 46.0938 50.1864 46.0938 52.3438C46.0938 54.5011 47.8426 56.25 50 56.25Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M50 56.25V60.9375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M65.625 42.1875H34.375C33.5121 42.1875 32.8125 42.8871 32.8125 43.75V65.625C32.8125 66.4879 33.5121 67.1875 34.375 67.1875H65.625C66.4879 67.1875 67.1875 66.4879 67.1875 65.625V43.75C67.1875 42.8871 66.4879 42.1875 65.625 42.1875Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M42.9688 42.1875V35.1562C42.9688 33.2914 43.7095 31.503 45.0282 30.1844C46.3468 28.8658 48.1352 28.125 50 28.125C51.8648 28.125 53.6532 28.8658 54.9718 30.1844C56.2905 31.503 57.0312 33.2914 57.0312 35.1562"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h2 className={`font-bold text-[36px] text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>{t("New Password")}</h2>
            <p className={`text-[16] text-center text-[#7986A3] ${locale === "en" ? fonts.spaceG.className : ""}`}>
              {t("Create a new password that is secure and easy to remember")}
            </p>

            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={Yup.object({
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
              })}
              onSubmit={(values, { setSubmitting }) => {
                resetPass(values);
                setSubmitting(false);
              }}
            >
              {({ values, errors, handleChange, isSubmitting }) => (
                <Form className={`w-full md:p-0 p-3 max-w-lg ${locale === "en" ? fonts.spaceG.className : ""}`}>
                  <div className="mb-6 relative">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                      {t("password")}
                    </label>
                    <div className="relative">
                      <Field
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pr-10"
                        id="password"
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder="**********"
                        required
                        onChange={(e) => {
                          handleChange(e);
                          evaluatePasswordStrength(e.target.value); // Evaluate strength on change
                        }}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}></span>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                  </div>

                  {/* Password Strength Meter for Password */}
                  <div className="mb-4">
                    <div className="h-1 bg-gray-200 rounded">
                      <div
                        className={`h-full rounded ${
                          passwordStrength === 0
                            ? "bg-red-500"
                            : passwordStrength === 1
                            ? "bg-orange-500"
                            : passwordStrength === 2
                            ? "bg-yellow-500"
                            : passwordStrength === 3
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${(passwordStrength + 1) * 20}%` }} // Adjust width based on strength
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600">
                      {passwordStrength === 0
                        ? t("Weak")
                        : passwordStrength === 1
                        ? t("Fair")
                        : passwordStrength === 2
                        ? t("Good")
                        : passwordStrength === 3
                        ? t("Strong")
                        : t("Very Strong")}
                    </p>
                  </div>

                  <div className="mb-6 relative">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="confirmPassword">
                      {t("Confirm the new password")}
                    </label>
                    <div className="relative">
                      <Field
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pr-10"
                        id="confirmPassword"
                        type={isPasswordVisible ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="**********"
                        required
                        onChange={(e) => {
                          handleChange(e);
                          evaluateConfirmPasswordStrength(e.target.value); // Evaluate strength on change
                        }}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}></span>
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs italic" />
                  </div>

                  <div className="mb-4">
                    <div className="h-1 bg-gray-200 rounded">
                      <div
                        className={`h-full rounded ${
                          confirmPasswordStrength === 0
                            ? "bg-red-500"
                            : confirmPasswordStrength === 1
                            ? "bg-orange-500"
                            : confirmPasswordStrength === 2
                            ? "bg-yellow-500"
                            : confirmPasswordStrength === 3
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                        style={{
                          width: `${(confirmPasswordStrength + 1) * 20}%`,
                        }}
                      ></div>
                      {JSON.stringify(errors)}
                    </div>
                    <p className="text-xs text-gray-600">
                      {confirmPasswordStrength === 0
                        ? t("Weak")
                        : confirmPasswordStrength === 1
                        ? t("Fair")
                        : confirmPasswordStrength === 2
                        ? t("Good")
                        : confirmPasswordStrength === 3
                        ? t("Strong")
                        : t("Very Strong")}
                    </p>
                  </div>

                  <p className="text-sm text-[#7986A3] my-5">
                    The length of the password is not less than 8 characters. The password must not be weak, and it must meet the following
                    conditions: It must be different from the user ID <br />
                    . It contains lowercase letters (az) and uppercase letters (AZ) <br />
                    . It contains at least a number. One (0-9) <br />. Contain at least one character (!@#SAR%^&*)
                  </p>

                  <div className="flex items-center justify-center">
                    <button
                      className={
                        "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full " +
                        (loading ? "animate-pulse" : "")
                      }
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {t("change")}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <div className="flex gap-3  items-center ">
              <div className="flex gap-5 items-center ">
                <div className="gap-4 flex flex-col items-center justify-center  ">
                  <svg width="148" height="122" viewBox="0 0 148 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="32.25" y="13.25" width="101.5" height="101.5" rx="50.75" stroke="#007877" stroke-width="1.5" />
                    <circle cx="83" cy="64" r="45" fill="#EBF7F7" />
                    <path
                      d="M78.2303 83H77.8956C77.1704 82.9493 76.4611 82.7465 75.8196 82.4032C75.1821 82.0561 74.6243 81.5841 74.19 81.0068L59.9771 62.132C59.1881 61.0789 58.8574 59.7683 59.0567 58.4772C59.2519 57.19 59.9651 56.0277 61.033 55.2514C62.1088 54.4791 63.4476 54.1554 64.7625 54.3504C66.0814 54.5415 67.2688 55.2358 68.0617 56.2812L78.7323 70.4558C78.7363 70.4597 78.7363 70.4597 78.7403 70.4597C78.7443 70.4636 78.7443 70.4636 78.7483 70.4636C78.7523 70.4636 78.7523 70.4636 78.7563 70.4636C78.7602 70.4597 78.7602 70.4597 78.7602 70.4558L102.357 46.5025C103.281 45.5664 104.552 45.0242 105.883 45.0008C107.214 44.9774 108.505 45.4728 109.465 46.3777C110.421 47.2826 110.975 48.5269 110.999 49.8297C111.023 51.1364 110.517 52.3962 109.593 53.3324L81.8363 81.5139C81.3661 81.982 80.8083 82.3564 80.1867 82.6099C79.5691 82.8674 78.9037 83 78.2303 83Z"
                      fill="#007877"
                    />
                    <path
                      d="M13.6727 88.5642C12.322 88.2359 10.6932 87.6421 9.38249 86.6002C8.34068 85.3021 7.74448 83.6756 7.41718 82.3269C7.39567 82.2348 7.34497 82.152 7.27121 82.0921C7.19592 82.0338 7.10526 82.0001 7.00999 82.0001H6.99001C6.89474 81.9985 6.80255 82.0307 6.72726 82.0906C6.6535 82.1504 6.60125 82.2333 6.58282 82.3269C6.2463 83.6756 5.65932 85.3021 4.61751 86.6094C3.3068 87.6513 1.67801 88.2359 0.327347 88.5734C0.233615 88.5949 0.149101 88.6486 0.0907109 88.7238C0.0307838 88.799 -0.00148414 88.8941 5.24571e-05 88.9893V89.0092C5.24571e-05 89.1059 0.0323219 89.1995 0.092249 89.2747C0.15064 89.3498 0.233615 89.4035 0.327347 89.4266C1.67801 89.7534 3.3068 90.3487 4.61751 91.3891C5.65932 92.6979 6.2463 94.3244 6.58282 95.6731C6.60433 95.7652 6.65504 95.848 6.72879 95.9079C6.80409 95.9677 6.89474 95.9984 6.99001 95.9999H7.00999C7.10526 96.0015 7.19745 95.9693 7.27274 95.9094C7.3465 95.8496 7.39875 95.7667 7.41718 95.6731C7.7537 94.3244 8.34068 92.6979 9.38249 91.3891C10.6932 90.3487 12.322 89.7626 13.6727 89.4266C13.7664 89.4051 13.8509 89.3514 13.9093 89.2762C13.9692 89.1995 14.0015 89.1059 13.9999 89.0092V88.9893C13.9984 88.8926 13.9661 88.799 13.9062 88.7223C13.8478 88.6456 13.7649 88.5903 13.6727 88.5642Z"
                      fill="#F88419"
                    />
                    <path
                      d="M140.743 116.158C139.682 115.9 138.402 115.433 137.372 114.614C136.553 113.594 136.085 112.317 135.828 111.257C135.811 111.184 135.771 111.119 135.713 111.072C135.654 111.027 135.583 111 135.508 111H135.492C135.417 110.999 135.345 111.024 135.286 111.071C135.228 111.118 135.187 111.183 135.172 111.257C134.908 112.317 134.447 113.594 133.628 114.622C132.598 115.44 131.318 115.9 130.257 116.165C130.184 116.182 130.117 116.224 130.071 116.283C130.024 116.342 129.999 116.417 130 116.492V116.507C130 116.583 130.025 116.657 130.072 116.716C130.118 116.775 130.184 116.817 130.257 116.835C131.318 117.092 132.598 117.56 133.628 118.377C134.447 119.406 134.908 120.683 135.172 121.743C135.189 121.816 135.229 121.881 135.287 121.928C135.346 121.975 135.417 121.999 135.492 122H135.508C135.583 122.001 135.655 121.976 135.714 121.929C135.772 121.882 135.813 121.817 135.828 121.743C136.092 120.683 136.553 119.406 137.372 118.377C138.402 117.56 139.682 117.099 140.743 116.835C140.816 116.818 140.883 116.776 140.929 116.717C140.976 116.657 141.001 116.583 141 116.507V116.492C140.999 116.416 140.973 116.342 140.926 116.282C140.88 116.222 140.815 116.178 140.743 116.158Z"
                      fill="#007877"
                    />
                    <path
                      d="M147.79 18.2199C146.921 18.0088 145.874 17.627 145.032 16.9573C144.362 16.1228 143.979 15.0772 143.768 14.2101C143.754 14.151 143.722 14.0977 143.674 14.0592C143.626 14.0217 143.568 14 143.506 14H143.494C143.432 13.999 143.373 14.0198 143.325 14.0582C143.277 14.0967 143.244 14.15 143.232 14.2101C143.015 15.0772 142.638 16.1228 141.968 16.9632C141.126 17.633 140.079 18.0088 139.21 18.2258C139.15 18.2396 139.096 18.2741 139.058 18.3224C139.02 18.3708 138.999 18.4319 139 18.4931V18.5059C139 18.5681 139.021 18.6282 139.059 18.6766C139.097 18.7249 139.15 18.7594 139.21 18.7742C140.079 18.9843 141.126 19.367 141.968 20.0358C142.638 20.8772 143.015 21.9228 143.232 22.7899C143.246 22.849 143.278 22.9023 143.326 22.9408C143.374 22.9793 143.432 22.999 143.494 23H143.506C143.568 23.001 143.627 22.9802 143.675 22.9418C143.723 22.9033 143.756 22.85 143.768 22.7899C143.985 21.9228 144.362 20.8772 145.032 20.0358C145.874 19.367 146.921 18.9902 147.79 18.7742C147.85 18.7604 147.904 18.7259 147.942 18.6776C147.98 18.6282 148.001 18.5681 148 18.5059V18.4931C147.999 18.431 147.978 18.3708 147.94 18.3215C147.902 18.2721 147.849 18.2366 147.79 18.2199Z"
                      fill="#CEC6F2"
                    />
                    <path
                      d="M21.742 73.7047C20.6815 73.4716 19.3965 73.0504 18.3662 72.302C17.5541 71.3668 17.0812 70.1972 16.8232 69.2345C16.8057 69.1679 16.7659 69.11 16.7086 69.0666C16.6513 69.0246 16.5796 69.0014 16.5048 69H16.4952C16.4204 69 16.3471 69.0232 16.2898 69.0666C16.2309 69.1086 16.1911 69.1679 16.1752 69.2345C15.9188 70.1972 15.4554 71.3668 14.6322 72.302C13.6035 73.0402 12.3169 73.4716 11.258 73.7047C11.1847 73.7206 11.121 73.7583 11.0748 73.8104C11.0271 73.8625 11.0016 73.9276 11 73.9942V74.0043C11 74.0724 11.0255 74.1375 11.0717 74.1911C11.1194 74.2432 11.1847 74.2808 11.258 74.2939C12.3169 74.5284 13.6035 74.9496 14.6322 75.698C15.4459 76.6332 15.9188 77.8028 16.1752 78.7655C16.1927 78.8321 16.2325 78.89 16.2914 78.932C16.3487 78.9739 16.4204 78.9986 16.4952 79H16.5048C16.5796 79 16.6513 78.9768 16.7102 78.9334C16.7675 78.8914 16.8073 78.8321 16.8232 78.7655C17.0812 77.8028 17.5446 76.6332 18.3662 75.698C19.3965 74.9583 20.6815 74.5284 21.742 74.2939C21.8137 74.2794 21.879 74.2417 21.9252 74.1896C21.9713 74.1361 21.9984 74.0724 22 74.0043V73.9942C22 73.9276 21.9745 73.861 21.9267 73.8089C21.8806 73.7554 21.8153 73.7192 21.742 73.7047Z"
                      fill="#F88419"
                    />
                    <path
                      d="M41.8358 113.293C41.161 113.13 40.3432 112.835 39.6876 112.311C39.1708 111.657 38.8699 110.838 38.7057 110.164C38.6946 110.118 38.6692 110.077 38.6327 110.047C38.5963 110.017 38.5507 110.001 38.503 110H38.497C38.4493 110 38.4027 110.016 38.3662 110.047C38.3287 110.076 38.3034 110.118 38.2933 110.164C38.1301 110.838 37.8353 111.657 37.3114 112.311C36.6568 112.828 35.838 113.13 35.1642 113.293C35.1175 113.304 35.077 113.331 35.0476 113.367C35.0172 113.404 35.001 113.449 35 113.496V113.503C35 113.551 35.0162 113.596 35.0456 113.634C35.076 113.67 35.1175 113.697 35.1642 113.706C35.838 113.87 36.6568 114.165 37.3114 114.689C37.8292 115.343 38.1301 116.162 38.2933 116.836C38.3044 116.882 38.3298 116.923 38.3673 116.952C38.4037 116.982 38.4493 116.999 38.497 117H38.503C38.5507 117 38.5963 116.984 38.6338 116.953C38.6702 116.924 38.6956 116.882 38.7057 116.836C38.8699 116.162 39.1647 115.343 39.6876 114.689C40.3432 114.171 41.161 113.87 41.8358 113.706C41.8814 113.696 41.923 113.669 41.9524 113.633C41.9818 113.595 41.999 113.551 42 113.503V113.496C42 113.449 41.9838 113.403 41.9534 113.366C41.924 113.329 41.8825 113.303 41.8358 113.293Z"
                      fill="#CEC6F2"
                    />
                    <path
                      d="M36.3587 24.9988L20.0051 18.1815C20.0034 18.1815 20.0034 18.1799 20.0017 18.1799C20.0017 18.1783 20 18.1783 20 18.1767C20 18.1752 20 18.1736 20 18.1736C20 18.172 20 18.1704 20.0017 18.1704L25.5271 11.0032L25.5288 11.0016C25.5305 11.0016 25.5322 11 25.5322 11C25.5339 11 25.5355 11 25.5355 11.0016C25.5372 11.0016 25.5389 11.0016 25.5389 11.0032L38.9966 21.5846C38.9983 21.5862 39 21.5878 39 21.5909C39 21.5925 39 21.5941 38.9983 21.5957L36.3688 24.9972C36.3688 24.9972 36.3672 24.9988 36.3638 24.9988C36.3621 25.0004 36.3604 25.0004 36.3587 24.9988Z"
                      fill="#CEC6F2"
                    />
                    <path
                      d="M41.7768 18.9983L33.0015 4.92232C33.0015 4.92232 33.0015 4.92065 33 4.92065C33 4.91897 33 4.91729 33 4.91729C33.0015 4.91562 33.0015 4.91394 33.0015 4.91394C33.0031 4.91226 33.0031 4.91226 33.0046 4.91226L39.9954 0.00167875C39.9954 0.00167875 39.9969 0 39.9985 0C39.9985 0 40 1.63784e-06 40 0.00167875C40.0015 0.00167875 40.0031 0.00168039 40.0031 0.0033575C40.0046 0.0033575 40.0046 0.00503277 40.0046 0.00670988L45 16.4843C45 16.486 45 16.4877 45 16.4894C45 16.491 44.9985 16.4927 44.9969 16.4927L41.7875 19C41.7859 19 41.7844 19 41.7844 19C41.7829 19 41.7829 19 41.7813 19C41.7813 19 41.7798 19 41.7783 19L41.7768 18.9983Z"
                      fill="#CEC6F2"
                    />
                  </svg>

                  <h2 className={`font-bold text-[36px] text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>
                    {t("Password has been changed")}
                  </h2>
                  <p className={`text-[16] text-center text-[#7986A3] ${locale === "en" ? fonts.spaceG.className : ""}`}>
                    {t("Password changed successfully, you can login again with your new password")}
                  </p>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                      type="button"
                      onClick={() => router.push("/login")}
                    >
                      {t("signIn")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
