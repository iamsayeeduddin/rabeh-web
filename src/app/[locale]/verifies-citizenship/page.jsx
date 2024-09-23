"use client";
import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";
import { FaMapMarkerAlt, FaUpload } from "react-icons/fa";

const Page = () => {
  const fonts = useFonts();
  const [step, setStep] = useState(1);
  const [filledFields, setFilledFields] = useState(0);
  const [selectedDocument, setSelectedDocument] = useState("");

  const totalFields = 8;

  // Formik setup
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      dateOfBirth: Yup.string().required("Date of Birth is required"),
      nationality: Yup.string().required("Nationality is required"),
      countryOfResidence: Yup.string().required(
        "Country of Residence is required"
      ),
      city: Yup.string().required("City is required"),
      region: Yup.string().required("Region is required"),
      neighbourhood: Yup.string().required("Neighbourhood is required"),
      street: Yup.string().required("Street is required"),
      address: Yup.string().required("Address is required"),
      idNumber:
        step === 2 ? Yup.string().required("ID Number is required") : null,
      documentType:
        step === 3
          ? Yup.string().required("Please select a document type")
          : null,
      documentFile:
        step === 3 ? Yup.mixed().required("Please upload a document") : null,
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Calculate percentage of fields filled
  useEffect(() => {
    const filled = Object.values(formik.values).filter(Boolean).length;
    setFilledFields(filled);
  }, [formik.values]);

  const completionPercentage = Math.round((filledFields / totalFields) * 100);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
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

  return (
    <div className="w-full p-5 bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]">
      <div
        className="flex flex-col gap-5 bg-[#FFFFFF] md:px-28 py-[32px] rounded-b-[12px] md:w-[798px]"
        style={{
          boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        }}
      >
        <p
          className={`text-[#7986A3] p-5 md:p-0 text-start ${fonts.spaceG.className}`}
        >
          1/5
        </p>
        <h2
          className={`font-bold text-[24px] md:text-start text-center ${fonts.spaceG.className}`}
        >
          {step === 1
            ? "Verify Citizenship"
            : step === 2
            ? "Verify ID"
            : "Upload Documents"}
        </h2>
        <p
          className={`text-[16px] md:text-start text-center mb-4 p-5 md:p-0 ${fonts.spaceG.className}`}
        >
          {step === 1
            ? "Enter your identity information to complete the registration process"
            : step === 2
            ? "Enter your ID number and verify"
            : "Upload your identification document"}
        </p>

        <div className="mb-6 flex items-center p-5 md:p-0">
          <div className="relative w-full h-1 bg-gray-200 rounded-lg">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-lg"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className={`ml-4 ${fonts.spaceG.className}`}>
            {Math.round(completionPercentage)}%
          </span>
        </div>

        <div className={`w-full md:p-0 p-3 max-w-lg ${fonts.spaceG.className}`}>
          <form onSubmit={formik.handleSubmit}>
            {step === 1 && (
              <>
                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="dateOfBirth"
                  >
                    Date of Birth
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.dateOfBirth && formik.errors.dateOfBirth
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="dateOfBirth"
                    type="date"
                    {...formik.getFieldProps("dateOfBirth")}
                  />
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.dateOfBirth}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="nationality"
                  >
                    Nationality
                  </label>
                  <select
                    className={`block w-full bg-white text-gray-700 border ${
                      formik.touched.nationality && formik.errors.nationality
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="nationality"
                    {...formik.getFieldProps("nationality")}
                  >
                    <option value="" label="Select your nationality" />
                    <option value="ksa" label="Saudi Arabia" />
                    <option value="us" label="United States" />
                    <option value="india" label="India" />
                  </select>
                  {formik.touched.nationality && formik.errors.nationality && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.nationality}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="countryOfResidence"
                  >
                    Country of Residence
                  </label>
                  <select
                    className={`block w-full bg-white text-gray-700 border ${
                      formik.touched.countryOfResidence &&
                      formik.errors.countryOfResidence
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="countryOfResidence"
                    {...formik.getFieldProps("countryOfResidence")}
                  >
                    <option value="" label="Select your country" />
                    <option value="ksa" label="Saudi Arabia" />
                    <option value="us" label="United States" />
                    <option value="india" label="India" />
                  </select>
                  {formik.touched.countryOfResidence &&
                    formik.errors.countryOfResidence && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.countryOfResidence}
                      </p>
                    )}
                </div>

                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.city && formik.errors.city
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="city"
                    type="text"
                    {...formik.getFieldProps("city")}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.city}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="region"
                  >
                    Region
                  </label>
                  <select
                    className={`block w-full bg-white text-gray-700 border ${
                      formik.touched.region && formik.errors.region
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="region"
                    {...formik.getFieldProps("region")}
                  >
                    <option value="" label="Select your region" />
                    <option value="central" label="Central" />
                    <option value="western" label="Western" />
                    <option value="eastern" label="Eastern" />
                  </select>
                  {formik.touched.region && formik.errors.region && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.region}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="neighbourhood"
                  >
                    Neighbourhood
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.neighbourhood &&
                      formik.errors.neighbourhood
                        ? "border-red-500"
                        : " border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="neighbourhood"
                    type="text"
                    {...formik.getFieldProps("neighbourhood")}
                  />
                  {formik.touched.neighbourhood &&
                    formik.errors.neighbourhood && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.neighbourhood}
                      </p>
                    )}
                </div>

                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="street"
                  >
                    Street
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.street && formik.errors.street
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="street"
                    type="text"
                    {...formik.getFieldProps("street")}
                  />
                  {formik.touched.street && formik.errors.street && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.street}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${
                      formik.touched.address && formik.errors.address
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="address"
                    type="text"
                    {...formik.getFieldProps("address")}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.address}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <button
                    type="button"
                    className="flex items-center justify-center text-primary border border-primary font-bold py-2 px-4 rounded-lg w-full"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    Select Your Current Location
                  </button>
                </div>

                <div className="flex justify-between mb-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    className="bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Step 2: ID Verification */}
                <div className="mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="idNumber"
                  >
                    ID Number
                  </label>
                  <div className="flex">
                    <input
                      className={`appearance-none block w-full bg-white text-gray-700 border ${
                        formik.touched.idNumber && formik.errors.idNumber
                          ? "border-red-500"
                          : "border-gray-200"
                      } rounded-l-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                      id="idNumber"
                      type="text"
                      {...formik.getFieldProps("idNumber")}
                    />
                    <button
                      type="button"
                      className="bg-primary text-white font-bold  px-4 h-[45.5px]  rounded-r-lg"
                      onClick={handleNext}
                    >
                      Verify
                    </button>
                  </div>
                  {formik.touched.idNumber && formik.errors.idNumber && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.idNumber}
                    </p>
                  )}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                {/* Step 3: Document Upload */}
                <div className={`mb-6 ${selectedDocument ? "" : ""}`}>
                  <div className="flex items-start justify-between mb-3 gap-5">
                    <div
                      onClick={() => setSelectedDocument("National ID")}
                      className={`border-2 px-4 py-2 rounded-xl cursor-pointer flex flex-col items-start justify-center w-[180px] h-[108px] ${
                        selectedDocument === "National ID"
                          ? "shadow-lg border-primary"
                          : "border-gray-300"
                      }`}
                    >
                      <div
                        className={`h-[48px] w-[48px] rounded-full flex items-center justify-center  ${
                          selectedDocument === "National ID"
                            ? " bg-primary text-white"
                            : "bg-gray-300 text-gray-300  "
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.25 10.5H18"
                            stroke={`${
                              selectedDocument === "National ID"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.25 13.5H18"
                            stroke={`${
                              selectedDocument === "National ID"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.63281 13.5C9.87545 13.5 10.8828 12.4926 10.8828 11.25C10.8828 10.0074 9.87545 9 8.63281 9C7.39017 9 6.38281 10.0074 6.38281 11.25C6.38281 12.4926 7.39017 13.5 8.63281 13.5Z"
                            stroke={`${
                              selectedDocument === "National ID"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.72656 15.75C5.89179 15.1047 6.26709 14.5327 6.7933 14.1243C7.3195 13.7158 7.96668 13.4941 8.63281 13.4941C9.29894 13.4941 9.94612 13.7158 10.4723 14.1243C10.9985 14.5327 11.3738 15.1047 11.5391 15.75"
                            stroke={`${
                              selectedDocument === "National ID"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.25 4.5H3.75C3.33579 4.5 3 4.83579 3 5.25V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V5.25C21 4.83579 20.6642 4.5 20.25 4.5Z"
                            stroke={`${
                              selectedDocument === "National ID"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-[16px] mt-2"> National ID</div>
                    </div>
                    <div
                      onClick={() => setSelectedDocument("Passport")}
                      className={`border-2 px-4 py-2 rounded-xl cursor-pointer flex flex-col items-start justify-center w-[180px] h-[108px] ${
                        selectedDocument === "Passport"
                          ? "shadow-lg border-primary"
                          : "border-gray-300"
                      }`}
                    >
                      <div
                        className={`h-[48px] w-[48px] rounded-full flex items-center justify-center  ${
                          selectedDocument === "Passport"
                            ? " bg-primary text-white"
                            : "bg-gray-300 text-gray-300  "
                        }`}
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.168 20.25V3.75C20.168 3.33579 19.8322 3 19.418 3L5.91797 3C5.50376 3 5.16797 3.33579 5.16797 3.75L5.16797 20.25C5.16797 20.6642 5.50376 21 5.91797 21H19.418C19.8322 21 20.168 20.6642 20.168 20.25Z"
                            stroke={`${
                              selectedDocument === "Passport"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="2.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.66797 6.375H15.668"
                            stroke={`${
                              selectedDocument === "Passport"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="2.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.668 15.75C14.3248 15.75 15.668 14.4069 15.668 12.75C15.668 11.0931 14.3248 9.75 12.668 9.75C11.0111 9.75 9.66797 11.0931 9.66797 12.75C9.66797 14.4069 11.0111 15.75 12.668 15.75Z"
                            stroke={`${
                              selectedDocument === "Passport"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="2.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.54297 17.5498C9.06953 16.9818 9.7077 16.5287 10.4175 16.2188C11.1273 15.909 11.8935 15.749 12.668 15.749C13.4425 15.749 14.2086 15.909 14.9184 16.2188C15.6282 16.5287 16.2664 16.9818 16.793 17.5498"
                            stroke={`${
                              selectedDocument === "Passport"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="2.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-[16px] mt-2">Passport</div>
                    </div>
                    <div
                      onClick={() => setSelectedDocument("Driving License")}
                      className={`border-2 px-4 py-2 rounded-xl cursor-pointer flex flex-col items-start justify-center w-[180px] h-[108px] ${
                        selectedDocument === "Driving License"
                          ? "shadow-lg border-primary"
                          : "border-gray-300"
                      }`}
                    >
                      <div
                        className={`h-[48px] w-[48px] rounded-full flex items-center justify-center  ${
                          selectedDocument === "Driving License"
                            ? " bg-primary text-white"
                            : "bg-gray-300 text-gray-300  "
                        }`}
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.83203 11.25H22.832"
                            stroke={`${
                              selectedDocument === "Driving License"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.332 17.25V19.5C21.332 19.6989 21.253 19.8897 21.1124 20.0303C20.9717 20.171 20.7809 20.25 20.582 20.25H18.332C18.1331 20.25 17.9424 20.171 17.8017 20.0303C17.661 19.8897 17.582 19.6989 17.582 19.5V17.25"
                            stroke={`${
                              selectedDocument === "Driving License"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.08203 17.25V19.5C7.08203 19.6989 7.00301 19.8897 6.86236 20.0303C6.72171 20.171 6.53094 20.25 6.33203 20.25H4.08203C3.88312 20.25 3.69235 20.171 3.5517 20.0303C3.41105 19.8897 3.33203 19.6989 3.33203 19.5V17.25"
                            stroke={`${
                              selectedDocument === "Driving License"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.33203 14.25H7.83203"
                            stroke={`${
                              selectedDocument === "Driving License"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.832 14.25H18.332"
                            stroke={`${
                              selectedDocument === "Driving License"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M21.332 11.25L18.5289 4.95C18.4707 4.81672 18.3751 4.70322 18.2536 4.62333C18.1321 4.54343 17.99 4.50058 17.8445 4.5H6.81953C6.67411 4.50058 6.532 4.54343 6.41049 4.62333C6.28898 4.70322 6.19332 4.81672 6.13516 4.95L3.33203 11.25V17.25H21.332V11.25Z"
                            stroke={`${
                              selectedDocument === "Driving License"
                                ? "white"
                                : "#7986A3 "
                            }`}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-[16px] mt-2">Driving Licence</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-6">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="documentFile"
                    >
                      Upload Document
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      className={`flex flex-col items-center justify-center border-dashed border-2 ${
                        formik.touched.documentFile &&
                        formik.errors.documentFile
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg py-10 cursor-pointer hover:bg-gray-100`}
                      onClick={() => fileInputRef.current.click()}
                    >
                      <FaUpload className="text-gray-400 mb-2" size={24} />
                      <p className="text-gray-500 text-center">
                        <span className="text-primary">
                        Click to upload </span>
                          or drag and drop 
                      </p>
                      <p className="text-gray-500">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="documentFile"
                        className="hidden"
                        onChange={(event) =>
                          formik.setFieldValue(
                            "documentFile",
                            event.target.files[0]
                          )
                        }
                      />
                    </div>
                    {formik.touched.documentFile &&
                      formik.errors.documentFile && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.documentFile}
                        </p>
                      )}
                  </div>
                  {formik.touched.documentFile &&
                    formik.errors.documentFile && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.documentFile}
                      </p>
                    )}
                </div>
                <div className="flex justify-between mb-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    className="bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            <div className="flex justify-between"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
