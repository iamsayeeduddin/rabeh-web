"use client";
import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";

const Page = () => {
  const fonts = useFonts();
  const [step, setStep] = useState(1);
  const [filledFields, setFilledFields] = useState(0);
  const [selectedDocument, setSelectedDocument] = useState("");

  const totalFields = 8;

  // Formik setup
  const formik = useFormik({
 initialValues: {
    annualIncome: '',
    educationalLevel: '',
    primarySourceOfIncome: '',
    netWorth: '',
    anotherPhone: false,
    anotherPhoneNumber: '',
    noEmployer: false,
    employerName: '',
    employerAddress: '',
    jobName: '',
    employerPhone: '',
    employmentStartDate: '',
    stillWorking: false,
    employmentEndDate: '',
    bankName: '',
    accountHolderName: '',
    iban: '',
},
validationSchema: Yup.object({
    annualIncome: Yup.string().required("Annual income is required"),
    educationalLevel: Yup.string().required("Educational level is required"),
    primarySourceOfIncome: Yup.string().required("Primary source of income is required"),
    netWorth: Yup.string().required("Net worth is required"),
    anotherPhoneNumber: Yup.string().when("anotherPhone", {
        is: true,
        then: Yup.string().required("Another phone number is required"),
        otherwise: Yup.string().notRequired(),
    }),
    employerName: Yup.string().when("noEmployer", {
        is: false,
        then: Yup.string().required("Employer name is required"),
        otherwise: Yup.string().notRequired(),
    }),
    employerAddress: Yup.string().when("noEmployer", {
        is: false,
        then: Yup.string().required("Employer address is required"),
        otherwise: Yup.string().notRequired(),
    }),
    jobName: Yup.string().when("noEmployer", {
        is: false,
        then: Yup.string().required("Job name is required"),
        otherwise: Yup.string().notRequired(),
    }),
    employerPhone: Yup.string().when("noEmployer", {
        is: false,
        then: Yup.string().required("Employer phone number is required"),
        otherwise: Yup.string().notRequired(),
    }),
    employmentStartDate: Yup.string().when("noEmployer", {
        is: false,
        then: Yup.string().required("Employment start date is required"),
        otherwise: Yup.string().notRequired(),
    }),
    employmentEndDate: Yup.string().when("stillWorking", {
        is: false,
        then: Yup.string().required("Employment end date is required"),
        otherwise: Yup.string().notRequired(),
    }),
    bankName: Yup.string().required("Bank name is required"),
    accountHolderName: Yup.string().required("Account holder name is required"),
    iban: Yup.string().required("IBAN is required"),
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
          {step+1}/5
        </p>
        <h2
          className={`font-bold text-[24px] md:text-start text-center ${fonts.spaceG.className}`}
        >
          {step === 1
            ? "Financial Information"
            : step === 2
            ? "Work Information"
            : "Bank Information"}
        </h2>
        <p
          className={`text-[16px] md:text-start text-center mb-4 p-5 md:p-0 ${fonts.spaceG.className}`}
        >
          {step === 1
            ? "Please add your financial information"
            : step === 2
            ? "Please add your work information"
            : "Please add your Bank information"}
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
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="annualIncome">
                Annual Income
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.annualIncome && formik.errors.annualIncome ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
                Educational Level
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.educationalLevel && formik.errors.educationalLevel ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="educationalLevel"
                type="text"
                {...formik.getFieldProps("educationalLevel")}
            />
            {formik.touched.educationalLevel && formik.errors.educationalLevel && (
                <p className="text-red-500 text-xs italic">{formik.errors.educationalLevel}</p>
            )}                </div>

                <div className="mb-6">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="primarySourceOfIncome">
                Primary Source of Income
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.primarySourceOfIncome && formik.errors.primarySourceOfIncome ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
                Net Worth in Riyals (excluding house)
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.netWorth && formik.errors.netWorth ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="netWorth"
                type="text"
                {...formik.getFieldProps("netWorth")}
            />
            {formik.touched.netWorth && formik.errors.netWorth && (
                <p className="text-red-500 text-xs italic">{formik.errors.netWorth}</p>
            )}
                </div>

                <div className="mb-6">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="netWorth">
                Net Worth in Riyals (excluding house)
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.netWorth && formik.errors.netWorth ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="netWorth"
                type="text"
                {...formik.getFieldProps("netWorth")}
            />
            {formik.touched.netWorth && formik.errors.netWorth && (
                <p className="text-red-500 text-xs italic">{formik.errors.netWorth}</p>
            )}
                </div>

                <div className="mb-6">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="anotherPhoneNumber">
                    Another Phone Number
                </label>
                <input
                    className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.anotherPhoneNumber && formik.errors.anotherPhoneNumber ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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

            {step === 2 && (
              <>
               <div className="mb-4">
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    className="form-checkbox"
                    {...formik.getFieldProps("noEmployer")}
                />
                <span className="ml-2">There is no employer?</span>
            </label>
        </div>
        {!formik.values.noEmployer && (
            <>
                <div className="mb-6">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employerName">
                        Employer Name
                    </label>
                    <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.employerName && formik.errors.employerName ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
                        Employer Address
                    </label>
                    <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.employerAddress && formik.errors.employerAddress ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
                        Job Name
                    </label>
                    <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.jobName && formik.errors.jobName ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="jobName"
                        type="text"
                        {...formik.getFieldProps("jobName")}
                    />
                    {formik.touched.jobName && formik.errors.jobName && (
                        <p className="text-red-500 text-xs italic">{formik.errors.jobName}</p>
                    )}
                </div>

             <div className="mb-6">
  <label className="flex items-center text-gray-700 text-xs font-bold mb-2">
    <input
      className="mr-2 leading-tight"
      type="checkbox"
      {...formik.getFieldProps("hasEmployerPhone")}
    />
    <span className="text-sm">Do you have an employer phone?</span>
  </label>
</div>

{formik.values.hasEmployerPhone && (
  <div className="mb-6">
    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employerPhone">
      Employer Phone
    </label>
    <input
      className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.employerPhone && formik.errors.employerPhone ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
                        Employment Start Date
                    </label>
                    <input
                        className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.employmentStartDate && formik.errors.employmentStartDate ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            {...formik.getFieldProps("stillWorking")}
                        />
                        <span className="ml-2">Still working?</span>
                    </label>
                </div>

                {formik.values.stillWorking === false && (
                    <div className="mb-6">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employmentEndDate">
                            Employment End Date
                        </label>
                        <input
                            className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.employmentEndDate && formik.errors.employmentEndDate ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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

            {step === 3 && (
             <>
              <div className="mb-6">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bankName">
                Bank Name
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.bankName && formik.errors.bankName ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="bankName"
                type="text"
                {...formik.getFieldProps("bankName")}
            />
            {formik.touched.bankName && formik.errors.bankName && (
                <p className="text-red-500 text-xs italic">{formik.errors.bankName}</p>
            )}
        </div>

        <div className="mb-6">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="accountHolderName">
                Account Holder Name
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.accountHolderName && formik.errors.accountHolderName ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
                IBAN
            </label>
            <input
                className={`appearance-none block w-full bg-white text-gray-700 border ${formik.touched.iban && formik.errors.iban ? "border-red-500" : "border-gray-200"} rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="iban"
                type="text"
                {...formik.getFieldProps("iban")}
            />
            {formik.touched.iban && formik.errors.iban && (
                <p className="text-red-500 text-xs italic">{formik.errors.iban}</p>
            )}
        </div>

             </>
            )}

            <div className="flex justify-between">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
