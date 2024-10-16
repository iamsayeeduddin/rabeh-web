"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";
import { FaMapMarkerAlt, FaUpload, FaTimes } from "react-icons/fa";
import endpoint from "@/utils/apiUtil";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import axios from "axios";

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const [step, setStep] = useState(1);
  const [filledFields, setFilledFields] = useState(0);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations();
  const router = useRouter();

  const icons = {
    "National ID": (selected) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 10.5H18" stroke={selected ? "white" : "#7986A3"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.25 13.5H18" stroke={selected ? "white" : "#7986A3"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M8.63281 13.5C9.87545 13.5 10.8828 12.4926 10.8828 11.25C10.8828 10.0074 9.87545 9 8.63281 9C7.39017 9 6.38281 10.0074 6.38281 11.25C6.38281 12.4926 7.39017 13.5 8.63281 13.5Z"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.72656 15.75C5.89179 15.1047 6.26709 14.5327 6.7933 14.1243C7.3195 13.7158 7.96668 13.4941 8.63281 13.4941C9.29894 13.4941 9.94612 13.7158 10.4723 14.1243C10.9985 14.5327 11.3738 15.1047 11.5391 15.75"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.25 4.5H3.75C3.33579 4.5 3 4.83579 3 5.25V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V5.25C21 4.83579 20.6642 4.5 20.25 4.5Z"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Passport: (selected) => (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.168 20.25V3.75C20.168 3.33579 19.8322 3 19.418 3L5.91797 3C5.50376 3 5.16797 3.33579 5.16797 3.75L5.16797 20.25C5.16797 20.6642 5.50376 21 5.91797 21H19.418C19.8322 21 20.168 20.6642 20.168 20.25Z"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.66797 6.375H15.668" stroke={selected ? "white" : "#7986A3"} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M12.668 15.75C14.3248 15.75 15.668 14.4069 15.668 12.75C15.668 11.0931 14.3248 9.75 12.668 9.75C11.0111 9.75 9.66797 11.0931 9.66797 12.75C9.66797 14.4069 11.0111 15.75 12.668 15.75Z"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.54297 17.5498C9.06953 16.9818 9.7077 16.5287 10.4175 16.2188C11.1273 15.909 11.8935 15.749 12.668 15.749C13.4425 15.749 14.2086 15.909 14.9184 16.2188C15.6282 16.5287 16.2664 16.9818 16.793 17.5498"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "Driving License": (selected) => (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.83203 11.25H22.832" stroke={selected ? "white" : "#7986A3"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M21.332 17.25V19.5C21.332 19.6989 21.253 19.8897 21.1124 20.0303C20.9717 20.171 20.7809 20.25 20.582 20.25H18.332C18.1331 20.25 17.9424 20.171 17.8017 20.0303C17.661 19.8897 17.582 19.6989 17.582 19.5V17.25"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.08203 17.25V19.5C7.08203 19.6989 7.00301 19.8897 6.86236 20.0303C6.72171 20.171 6.53094 20.25 6.33203 20.25H4.08203C3.88312 20.25 3.69235 20.171 3.5517 20.0303C3.41105 19.8897 3.33203 19.6989 3.33203 19.5V17.25"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6.33203 14.25H7.83203" stroke={selected ? "white" : "#7986A3"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M20.582 4.5H4.08203C3.66782 4.5 3.33203 4.83579 3.33203 5.25V18.75C3.33203 19.1642 3.66782 19.5 4.08203 19.5H20.582C20.9962 19.5 21.332 19.1642 21.332 18.75V5.25C21.332 4.83579 20.9962 4.5 20.582 4.5Z"
          stroke={selected ? "white" : "#7986A3"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  // Formik setup
  const formik = useFormik({
    initialValues: {
      step,
      dateOfBirth: "",
      nationality: "",
      countryOfResidence: "",
      city: "",
      region: "",
      neighbourhood: "",
      street: "",
      address: "",
      idNumber: "",
      documentType: "",
      documentFile: null,
      annualIncome: "",
      educationalLevel: "",
      primarySourceOfIncome: "",
      netWorth: "",
      anotherPhone: false,
      anotherPhoneNumber: "",
      noEmployer: false,
      employerName: "",
      employerAddress: "",
      jobName: "",
      employerPhone: "",
      employmentStartDate: "",
      stillWorking: false,
      hasEmployerPhone: false,
      employmentEndDate: "",
      bankName: "",
      accountHolderName: "",
      iban: "",
    },
    validationSchema: Yup.object().shape({
      dateOfBirth: Yup.string().required("Date of Birth is required"),
      nationality: Yup.string().required("Nationality is required"),
      countryOfResidence: Yup.string().required("Country of Residence is required"),
      city: Yup.string().required("City is required"),
      region: Yup.string().required("Region is required"),
      neighbourhood: Yup.string().required("Neighbourhood is required"),
      street: Yup.string().required("Street is required"),
      address: Yup.string().required("Address is required"),

      idNumber: Yup.string().when("step", {
        is: 2,
        then: () => Yup.string().required("ID Number is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      documentType: Yup.string().when("step", {
        is: 3,
        then: () => Yup.string().required("Please select a document type"),
        otherwise: () => Yup.string().notRequired(),
      }),

      documentFile: Yup.mixed().when("step", {
        is: 3,
        then: () => Yup.mixed().required("Please upload a document"),
        otherwise: () => Yup.mixed().notRequired(),
      }),

      annualIncome: Yup.string().when("step", {
        is: 4,
        then: () => Yup.string().required("Annual income is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      educationalLevel: Yup.string().when("step", {
        is: 4,
        then: () => Yup.string().required("Educational level is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      primarySourceOfIncome: Yup.string().when("step", {
        is: 4,
        then: () => Yup.string().required("Primary source of income is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      netWorth: Yup.string().when("step", {
        is: 4,
        then: () => Yup.string().required("Net worth is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      anotherPhoneNumber: Yup.string().when(["step", "anotherPhone"], {
        is: (step, anotherPhone) => step === 4 && anotherPhone,
        then: () => Yup.string().required("Another phone number is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      employerName: Yup.string().when(["step", "noEmployer"], {
        is: (step, noEmployer) => step === 5 && !noEmployer,
        then: () => Yup.string().required("Employer name is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      employerAddress: Yup.string().when(["step", "noEmployer"], {
        is: (step, noEmployer) => step === 5 && !noEmployer,
        then: () => Yup.string().required("Employer address is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      jobName: Yup.string().when(["step", "noEmployer"], {
        is: (step, noEmployer) => step === 5 && !noEmployer,
        then: () => Yup.string().required("Job name is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      employerPhone: Yup.string().when(["step", "noEmployer"], {
        is: (step, noEmployer) => step === 5 && !noEmployer,
        then: () => Yup.string().required("Employer phone number is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      employmentStartDate: Yup.string().when(["step", "noEmployer"], {
        is: (step, noEmployer) => step === 5 && !noEmployer,
        then: () => Yup.string().required("Employment start date is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      employmentEndDate: Yup.string().when(["step", "stillWorking", "noEmployer"], {
        is: (step, stillWorking, noEmployer) => step === 5 && !stillWorking && !noEmployer,
        then: () => Yup.string().required("Employment end date is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      bankName: Yup.string().when("step", {
        is: 6,
        then: () => Yup.string().required("Bank name is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      accountHolderName: Yup.string().when("step", {
        is: 6,
        then: () => Yup.string().required("Account holder name is required"),
        otherwise: () => Yup.string().notRequired(),
      }),

      iban: Yup.string().when("step", {
        is: 6,
        then: () => Yup.string().required("IBAN is required"),
        otherwise: () => Yup.string().notRequired(),
      }),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      let obj = { ...values };
      delete obj.step;
      const formData = new FormData();

      for (const key in obj) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((file) => {
            formData.append(key, file);
          });
        } else {
          formData.append(key, obj[key]);
        }
      }
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/users/updateUser/" + user?._id, formData, {
          headers: { Authorization: `Bearer ${user?.token}` },
        })
        .then((res) => {
          if (res.status === 200) {
            setIsSuccess(true);
          }
        })
        .catch((err) => {
          console.log("error", err);
          if (err.status === 403) {
            localStorage.removeItem("user");
            window.location.href = "/";
          }
          toast.error(err?.response?.data?.message);
        })
        .finally(() => setIsLoading(false));
    },
  });

  // Calculate percentage of fields filled
  useEffect(() => {
    const filled = Object.values(formik.values).filter(Boolean).length;
    setFilledFields(filled);
  }, [formik.values]);

  const totalFields = useMemo(() => {
    if (formik.values.noEmployer) {
      return Object.keys(formik.values).length - 8;
    }
    return Object.keys(formik.values).length - 1;
  }, [formik.values.noEmployer]);
  const completionPercentage = useMemo(() => Math.round((filledFields / totalFields) * 100), [filledFields]);

  const updateStep = () => {
    formik.setFieldValue("step", step + 1);
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = (e) => {
    e.preventDefault();
    formik
      .validateForm()
      .then((errors) => {
        if (step < 6 && Object.keys(errors).length === 0) {
          console.log(formik.touched);
          updateStep();
        } else if (Object.keys(errors).length > 0) {
          Object.keys(errors)?.forEach((ele) => formik.setFieldTouched(ele));
        } else if (step === 6) {
          formik.handleSubmit();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const fileInputRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      formik.setFieldValue("documentFile", event.dataTransfer.files[0]);
    }
  };

  const DocumentOption = ({ type, selected, icon }) => {
    return (
      <div
        onClick={() => {
          formik.setFieldValue("documentType", type);
          formik.setFieldValue("documentFile", null);
          setSelectedDocument(type);
        }}
        className={`border-2 px-4 py-2 rounded-xl cursor-pointer flex flex-col items-start justify-center w-[180px] h-[108px] ${
          selected ? "shadow-lg border-primary" : "border-gray-300"
        }`}
      >
        <div
          className={`h-[48px] w-[48px] rounded-full flex items-center justify-center ${
            selected ? "bg-primary text-white" : "bg-gray-300 text-gray-300"
          }`}
        >
          {icon(selected)}
        </div>
        <div className="text-[16px] mt-2">{type}</div>
      </div>
    );
  };

  function stepDisplay(value) {
    if (value >= 1 && value <= 3) return 1;
    if (value === 4) return 2;
    if (value === 5) return 3;
    if (value === 6) return 4;
    if (value === 7) return 5;
    return null; // Handle other cases if needed
  }

  const formatFileSize = (sizeInBytes) => {
    const sizeInKB = sizeInBytes / 1024;
    if (sizeInKB >= 1024) {
      return `${(sizeInKB / 1024).toFixed(2)} MB`; // Convert to MB if size is over 1024 KB
    }
    return `${Math.round(sizeInKB)} KB`; // Remain in KB if size is below 1024 KB
  };

  return (
    <div className="w-full mt-10 p-5 bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]">
      <div
        className="flex flex-col gap-5 bg-[#FFFFFF] md:px-28 py-[32px] rounded-b-[12px] md:w-[798px]"
        style={{
          boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        }}
      >
        {!isSuccess ? (
          <>
            <p className={`text-[#7986A3] p-5 md:p-0 text-start ${locale === "en" ? fonts.spaceG.className : ""}`}>{stepDisplay(step)}/4</p>
            <h2 className={`font-bold text-[24px] md:text-start text-center ${locale === "en" ? fonts.spaceG.className : ""}`}>
              {step === 1
                ? t("verifyCitizen")
                : step === 2
                ? t("verifyId")
                : step === 3
                ? t("uploadDoc")
                : step === 4
                ? t("financialInfo")
                : step === 5
                ? t("workInfo")
                : t("bankInfo")}
            </h2>
            <p className={`text-[16px] md:text-start text-center mb-4 p-5 md:p-0 ${locale === "en" ? fonts.spaceG.className : ""}`}>
              {step === 1
                ? "Enter your identity information to complete the registration process"
                : step === 2
                ? "Enter your Identity information to complete the registration process"
                : step === 3
                ? "Upload your identification document"
                : step === 4
                ? "Please add your financial information"
                : step === 5
                ? "Please add your work information"
                : "Please add your bank information"}
            </p>

            <div className="mb-6 flex items-center p-5 md:p-0">
              <div className="relative w-full h-1 bg-gray-200 rounded-lg">
                <div className="absolute top-0 left-0 h-full bg-primary rounded-lg" style={{ width: `${completionPercentage}%` }} />
              </div>
              <span className={`ml-4 ${locale === "en" ? fonts.spaceG.className : ""}`}>{Math.round(completionPercentage)}%</span>
            </div>

            <div className={`w-full md:p-0 p-3 ${locale === "en" ? fonts.spaceG.className : ""}`}>
              <form onSubmit={formik.handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dateOfBirth">
                        {t("dateOfBirth")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.dateOfBirth && formik.errors.dateOfBirth ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="dateOfBirth"
                        type="date"
                        {...formik.getFieldProps("dateOfBirth")}
                      />
                      {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                        <p className="text-red-500 text-xs italic">{formik.errors.dateOfBirth}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nationality">
                        {t("nationality")}
                      </label>
                      <select
                        className={`block w-full bg-white text-gray-700 border ${
                          formik.touched.nationality && formik.errors.nationality ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="nationality"
                        {...formik.getFieldProps("nationality")}
                      >
                        <option value="" label="Select your nationality" />
                        <option value="KSA" label="Saudi Arabia" />
                        <option value="USA" label="United States" />
                      </select>
                      {formik.touched.nationality && formik.errors.nationality && (
                        <p className="text-red-500 text-xs italic">{formik.errors.nationality}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="countryOfResidence">
                        {t("countryOfResidence")}
                      </label>
                      <select
                        className={`block w-full bg-white text-gray-700 border ${
                          formik.touched.countryOfResidence && formik.errors.countryOfResidence ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="countryOfResidence"
                        {...formik.getFieldProps("countryOfResidence")}
                      >
                        <option value="" label="Select your country" />
                        <option value="KSA" label="Saudi Arabia" />
                        <option value="USA" label="United States" />
                      </select>
                      {formik.touched.countryOfResidence && formik.errors.countryOfResidence && (
                        <p className="text-red-500 text-xs italic">{formik.errors.countryOfResidence}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                        {t("city")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.city && formik.errors.city ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="city"
                        type="text"
                        {...formik.getFieldProps("city")}
                      />
                      {formik.touched.city && formik.errors.city && <p className="text-red-500 text-xs italic">{formik.errors.city}</p>}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="region">
                        {t("region")}
                      </label>
                      <select
                        className={`block w-full bg-white text-gray-700 border ${
                          formik.touched.region && formik.errors.region ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="region"
                        {...formik.getFieldProps("region")}
                      >
                        <option value="" label="Select your region" />
                        <option value="central" label="Central" />
                        <option value="western" label="Western" />
                        <option value="eastern" label="Eastern" />
                      </select>
                      {formik.touched.region && formik.errors.region && <p className="text-red-500 text-xs italic">{formik.errors.region}</p>}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="neighbourhood">
                        {t("neighbourhood")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.neighbourhood && formik.errors.neighbourhood ? "border-red-500" : " border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="neighbourhood"
                        type="text"
                        {...formik.getFieldProps("neighbourhood")}
                      />
                      {formik.touched.neighbourhood && formik.errors.neighbourhood && (
                        <p className="text-red-500 text-xs italic">{formik.errors.neighbourhood}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="street">
                        {t("street")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.street && formik.errors.street ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="street"
                        type="text"
                        {...formik.getFieldProps("street")}
                      />
                      {formik.touched.street && formik.errors.street && <p className="text-red-500 text-xs italic">{formik.errors.street}</p>}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                        {t("address")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.address && formik.errors.address ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="address"
                        type="text"
                        {...formik.getFieldProps("address")}
                      />
                      {formik.touched.address && formik.errors.address && <p className="text-red-500 text-xs italic">{formik.errors.address}</p>}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    {/* Step 2: ID Verification */}
                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="idNumber">
                        {t("idNumber")}
                      </label>
                      <div className="flex w-full">
                        <input
                          className={`appearance-none block w-full bg-white text-gray-700 border ${
                            formik.touched.idNumber && formik.errors.idNumber ? "border-red-500" : "border-gray-200"
                          } rounded-l-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                          id="idNumber"
                          type="text"
                          {...formik.getFieldProps("idNumber")}
                        />
                        <button type="button" className="bg-primary text-white font-bold  px-4 h-[45.5px]  rounded-r-lg" onClick={handleNext}>
                          {t("verify")}
                        </button>
                      </div>
                      {formik.touched.idNumber && formik.errors.idNumber && <p className="text-red-500 text-xs italic">{formik.errors.idNumber}</p>}
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    {/* Step 3: Document Upload */}
                    <div className={`mb-6 ${selectedDocument ? "" : ""}`}>
                      <div className="flex items-start justify-between mb-3 gap-5">
                        <div className="flex gap-4">
                          {Object.keys(icons).map((doc) => (
                            <DocumentOption key={doc} type={doc} selected={selectedDocument === doc} icon={icons[doc]} />
                          ))}
                        </div>
                      </div>
                      {formik.touched.documentType && formik.errors.documentType && (
                        <p className="text-red-500 text-xs italic">{formik.errors.documentType}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      {!formik?.values?.documentFile ? (
                        <div className="mb-6">
                          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="documentFile">
                            {t("uploadDoc")}
                          </label>
                          <div
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            className={`flex flex-col items-center justify-center border-dashed border-2 ${
                              formik.touched.documentFile && formik.errors.documentFile ? "border-red-500" : "border-gray-300"
                            } rounded-lg py-10 cursor-pointer hover:bg-gray-100`}
                            onClick={() => fileInputRef.current.click()}
                          >
                            <FaUpload className="text-gray-400 mb-2" size={24} />
                            <p className="text-gray-500 text-center">
                              <span className="text-primary">Click to upload </span>
                              or drag and drop
                            </p>
                            <p className="text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                            <input
                              ref={fileInputRef}
                              type="image/*"
                              id="documentFile"
                              className="hidden"
                              onChange={(event) => {
                                formik.setFieldValue("documentFile", event.target.files[0]);
                                console.log(event.target.files[0]);
                              }}
                            />
                          </div>
                          {formik.touched.documentFile && formik.errors.documentFile && (
                            <p className="text-red-500 text-xs italic">{formik.errors.documentFile}</p>
                          )}
                        </div>
                      ) : (
                        <div className="mb-6 flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-gray-700 text-sm font-medium">
                              {formik?.values.documentFile.name} - {formatFileSize(formik?.values.documentFile.size)}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              formik.setFieldValue("documentFile", null); // Clear the file input
                            }}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <FaTimes size={20} />
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="annualIncome">
                        {t("annualIncome")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.annualIncome && formik.errors.annualIncome ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="annualIncome"
                        type="text"
                        {...formik.getFieldProps("annualIncome")}
                      />
                      {formik.touched.annualIncome && formik.errors.annualIncome && (
                        <p className="text-red-500 text-xs italic">{formik.errors.annualIncome}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="educationalLevel">
                        {t("eduLevel")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.educationalLevel && formik.errors.educationalLevel ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="educationalLevel"
                        type="text"
                        {...formik.getFieldProps("educationalLevel")}
                      />
                      {formik.touched.educationalLevel && formik.errors.educationalLevel && (
                        <p className="text-red-500 text-xs italic">{formik.errors.educationalLevel}</p>
                      )}{" "}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="primarySourceOfIncome">
                        {t("primarySourceOfIncome")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.primarySourceOfIncome && formik.errors.primarySourceOfIncome ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="primarySourceOfIncome"
                        type="text"
                        {...formik.getFieldProps("primarySourceOfIncome")}
                      />
                      {formik.touched.primarySourceOfIncome && formik.errors.primarySourceOfIncome && (
                        <p className="text-red-500 text-xs italic">{formik.errors.primarySourceOfIncome}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="netWorth">
                        {t("netWorthRiyalsEx")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.netWorth && formik.errors.netWorth ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="netWorth"
                        type="text"
                        {...formik.getFieldProps("netWorth")}
                      />
                      {formik.touched.netWorth && formik.errors.netWorth && <p className="text-red-500 text-xs italic">{formik.errors.netWorth}</p>}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="anotherPhoneNumber">
                        {t("anotherPhone")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.anotherPhoneNumber && formik.errors.anotherPhoneNumber ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="anotherPhoneNumber"
                        type="text"
                        {...formik.getFieldProps("anotherPhoneNumber")}
                      />
                      {formik.touched.anotherPhoneNumber && formik.errors.anotherPhoneNumber && (
                        <p className="text-red-500 text-xs italic">{formik.errors.anotherPhoneNumber}</p>
                      )}
                    </div>
                  </>
                )}
                {step === 5 && (
                  <>
                    <div className="mb-4">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" {...formik.getFieldProps("noEmployer")} />
                        <span className="ml-2">{t("noEmployer")}</span>
                      </label>
                    </div>
                    {!formik.values.noEmployer && (
                      <>
                        <div className="mb-6">
                          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employerName">
                            {t("employerName")}
                          </label>
                          <input
                            className={`appearance-none block w-full bg-white text-gray-700 border ${
                              formik.touched.employerName && formik.errors.employerName ? "border-red-500" : "border-gray-200"
                            } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="employerName"
                            type="text"
                            {...formik.getFieldProps("employerName")}
                          />
                          {formik.touched.employerName && formik.errors.employerName && (
                            <p className="text-red-500 text-xs italic">{formik.errors.employerName}</p>
                          )}
                        </div>

                        <div className="mb-6">
                          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employerAddress">
                            {t("employerAddress")}
                          </label>
                          <input
                            className={`appearance-none block w-full bg-white text-gray-700 border ${
                              formik.touched.employerAddress && formik.errors.employerAddress ? "border-red-500" : "border-gray-200"
                            } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="employerAddress"
                            type="text"
                            {...formik.getFieldProps("employerAddress")}
                          />
                          {formik.touched.employerAddress && formik.errors.employerAddress && (
                            <p className="text-red-500 text-xs italic">{formik.errors.employerAddress}</p>
                          )}
                        </div>

                        <div className="mb-6">
                          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="jobName">
                            {t("jobName")}
                          </label>
                          <input
                            className={`appearance-none block w-full bg-white text-gray-700 border ${
                              formik.touched.jobName && formik.errors.jobName ? "border-red-500" : "border-gray-200"
                            } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="jobName"
                            type="text"
                            {...formik.getFieldProps("jobName")}
                          />
                          {formik.touched.jobName && formik.errors.jobName && <p className="text-red-500 text-xs italic">{formik.errors.jobName}</p>}
                        </div>

                        <div className="mb-6">
                          <label className="flex items-center text-gray-700 text-xs font-bold mb-2">
                            <input className="mr-2 leading-tight" type="checkbox" {...formik.getFieldProps("hasEmployerPhone")} />
                            <span className="text-sm">Do you have an employer phone?</span>
                          </label>
                        </div>

                        {formik.values.hasEmployerPhone && (
                          <div className="mb-6">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employerPhone">
                              {t("employerPhone")}
                            </label>
                            <input
                              className={`appearance-none block w-full bg-white text-gray-700 border ${
                                formik.touched.employerPhone && formik.errors.employerPhone ? "border-red-500" : "border-gray-200"
                              } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                              id="employerPhone"
                              type="text"
                              {...formik.getFieldProps("employerPhone")}
                            />
                            {formik.touched.employerPhone && formik.errors.employerPhone && (
                              <p className="text-red-500 text-xs italic">{formik.errors.employerPhone}</p>
                            )}
                          </div>
                        )}

                        <div className="mb-6">
                          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employmentStartDate">
                            {t("employmentStartDate")}
                          </label>
                          <input
                            className={`appearance-none block w-full bg-white text-gray-700 border ${
                              formik.touched.employmentStartDate && formik.errors.employmentStartDate ? "border-red-500" : "border-gray-200"
                            } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            id="employmentStartDate"
                            type="date"
                            {...formik.getFieldProps("employmentStartDate")}
                          />
                          {formik.touched.employmentStartDate && formik.errors.employmentStartDate && (
                            <p className="text-red-500 text-xs italic">{formik.errors.employmentStartDate}</p>
                          )}
                        </div>

                        <div className="mb-4">
                          <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox" {...formik.getFieldProps("stillWorking")} />
                            <span className="ml-2">{t("stillWorking")}</span>
                          </label>
                        </div>

                        {formik.values.stillWorking === false && (
                          <div className="mb-6">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employmentEndDate">
                              {t("employmentEndDate")}
                            </label>
                            <input
                              className={`appearance-none block w-full bg-white text-gray-700 border ${
                                formik.touched.employmentEndDate && formik.errors.employmentEndDate ? "border-red-500" : "border-gray-200"
                              } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                              id="employmentEndDate"
                              type="date"
                              {...formik.getFieldProps("employmentEndDate")}
                            />
                            {formik.touched.employmentEndDate && formik.errors.employmentEndDate && (
                              <p className="text-red-500 text-xs italic">{formik.errors.employmentEndDate}</p>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
                {step === 6 && (
                  <>
                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bankName">
                        {t("bankName")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.bankName && formik.errors.bankName ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="bankName"
                        type="text"
                        {...formik.getFieldProps("bankName")}
                      />
                      {formik.touched.bankName && formik.errors.bankName && <p className="text-red-500 text-xs italic">{formik.errors.bankName}</p>}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="accountHolderName">
                        {t("accHolderName")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.accountHolderName && formik.errors.accountHolderName ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="accountHolderName"
                        type="text"
                        {...formik.getFieldProps("accountHolderName")}
                      />
                      {formik.touched.accountHolderName && formik.errors.accountHolderName && (
                        <p className="text-red-500 text-xs italic">{formik.errors.accountHolderName}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="iban">
                        {t("iban")}
                      </label>
                      <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${
                          formik.touched.iban && formik.errors.iban ? "border-red-500" : "border-gray-200"
                        } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="iban"
                        type="text"
                        {...formik.getFieldProps("iban")}
                      />
                      {formik.touched.iban && formik.errors.iban && <p className="text-red-500 text-xs italic">{formik.errors.iban}</p>}
                    </div>
                  </>
                )}
                {step !== 2 ? (
                  <div className="flex justify-between mb-4">
                    {step !== 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                      >
                        {t("back")}
                      </button>
                    ) : null}
                    <button
                      type="button"
                      disabled={formik.isSubmitting || isLoading}
                      className={
                        "bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full " + (isLoading ? "animate-pulse cursor-not-allowed" : "")
                      }
                      onClick={handleNext}
                    >
                      {step === 6 ? t("submit") : t("next")}
                    </button>
                  </div>
                ) : null}
              </form>
            </div>
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
                    {t("verificationInProgress")}
                  </h2>
                  <p className={`text-[16] text-center text-[#7986A3] ${locale === "en" ? fonts.spaceG.className : ""}`}>
                    {t("onceVerifedWalletCreated")}
                  </p>
                  <div className="flex items-center justify-center">
                    <button
                      className={
                        "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full "
                      }
                      type="button"
                      onClick={() => router.push("/")}
                    >
                      {t("home")}
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
