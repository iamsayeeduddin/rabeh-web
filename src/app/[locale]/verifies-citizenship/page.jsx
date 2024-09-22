"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";
import { FaMapMarkerAlt } from "react-icons/fa";

const Page = () => {
  const fonts = useFonts();
  const [filledFields, setFilledFields] = useState(0);
  
  const totalFields = 8; // Adjust this based on the actual number of fields

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
    },
    validationSchema: Yup.object({
      dateOfBirth: Yup.string().required("Date of Birth is required"),
      nationality: Yup.string().required("Nationality is required"),
      countryOfResidence: Yup.string().required("Country of Residence is required"),
      city: Yup.string().required("City is required"),
      region: Yup.string().required("Region is required"),
      neighbourhood: Yup.string().required("Neighbourhood is required"),
      street: Yup.string().required("Street is required"),
      address: Yup.string().required("Address is required"),
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

  return (
    <div className="w-full p-5 bg-gradient-to-b from-[#F5F8FF] to-[rgba(244, 253, 255, 0)] flex items-center justify-center shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)]">
    <div
      className="flex flex-col gap-5 bg-[#FFFFFF] md:px-28  py-[32px] rounded-b-[12px] md:w-[798px]"
      style={{ boxShadow: "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A" }}
    >
        <p className={`text-[#7986A3] text-start ${fonts.spaceG.className}`}>1/5</p>
        <h2 className={`font-bold text-[24px] md:text-start text-center ${fonts.spaceG.className}`}>
        Verifies Citizenship
        </h2>
        <p className={`text-[16px] md:text-start text-center mb-4 p-5 md:p-0 ${fonts.spaceG.className}`}>
        Enter your Identity information to complete the registration process
                </p>

        <div className="mb-6 flex items-center p-5 md:p-0">
              <div className="relative w-full h-1 bg-gray-200 rounded-lg">
                <div
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-lg"
                  style={{ width: `${ {completionPercentage}}%` }}
                />
              </div>
              <span className={`ml-4 ${fonts.spaceG.className}`}>{Math.round( completionPercentage)}%</span>
            </div>

        <div className={`w-full md:p-0 p-3 max-w-lg ${fonts.spaceG.className}`}>
          <form onSubmit={formik.handleSubmit}>
            {/* Date of Birth */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dateOfBirth">
                Date of Birth
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

            {/* Nationality Dropdown */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nationality">
                Nationality
              </label>
              <select
                className={`block w-full bg-white text-gray-700 border ${
                  formik.touched.nationality && formik.errors.nationality ? "border-red-500" : "border-gray-200"
                } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="nationality"
                {...formik.getFieldProps("nationality")}
              >
                <option value="" label="Select your nationality" />
                <option value="ksa" label="Saudi Arabia" />
                <option value="us" label="United States" />
                <option value="india" label="India" />
                {/* Add more options as needed */}
              </select>
              {formik.touched.nationality && formik.errors.nationality && (
                <p className="text-red-500 text-xs italic">{formik.errors.nationality}</p>
              )}
            </div>

            {/* Country of Residence Dropdown */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="countryOfResidence">
                Country of Residence
              </label>
              <select
                className={`block w-full bg-white text-gray-700 border ${
                  formik.touched.countryOfResidence && formik.errors.countryOfResidence ? "border-red-500" : "border-gray-200"
                } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="countryOfResidence"
                {...formik.getFieldProps("countryOfResidence")}
              >
                <option value="" label="Select your country" />
                <option value="ksa" label="Saudi Arabia" />
                <option value="us" label="United States" />
                <option value="india" label="India" />
                {/* Add more options as needed */}
              </select>
              {formik.touched.countryOfResidence && formik.errors.countryOfResidence && (
                <p className="text-red-500 text-xs italic">{formik.errors.countryOfResidence}</p>
              )}
            </div>

            {/* City */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${
                  formik.touched.city && formik.errors.city ? "border-red-500" : "border-gray-200"
                } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="city"
                type="text"
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-xs italic">{formik.errors.city}</p>
              )}
            </div>

            {/* Region Dropdown */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="region">
                Region
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
                {/* Add more options as needed */}
              </select>
              {formik.touched.region && formik.errors.region && (
                <p className="text-red-500 text-xs italic">{formik.errors.region}</p>
              )}
            </div>

            {/* Neighbourhood */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="neighbourhood">
                Neighbourhood
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

            {/* Street */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="street">
                Street
              </label>
              <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${
                  formik.touched.street && formik.errors.street ? "border-red-500" : "border-gray-200"
                } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="street"
                type="text"
                {...formik.getFieldProps("street")}
              />
              {formik.touched.street && formik.errors.street && (
                <p className="text-red-500 text-xs italic">{formik.errors.street}</p>
              )}
            </div>

            {/* Address */}
            <div className="mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${
                  formik.touched.address && formik.errors.address ? "border-red-500" : "border-gray-200"
                } rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="address"
                type="text"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500 text-xs italic">{formik.errors.address}</p>
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

          {/* Buttons for Skip and Next */}
          <div className="flex justify-between mb-4">
            <button
              type="button"
              className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
            >
              Skip
            </button>
            <button
              type="submit"
              className="bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              Next
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

