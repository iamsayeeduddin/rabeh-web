"use client";
import React, { useRef, useState } from "react";
import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import endpoint from "@/utils/apiUtil";

const ContactForm = () => {
  const fonts = useFonts();
  const formRef = useRef();
  const [load, setLoad] = useState(false);
  const t = useTranslations();
  const handleSubmit = (values) => {
    endpoint
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/leads/getInTouch", values)
      .then((res) => {
        toast.success(res.data.message);
        formRef?.current?.resetForm();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => setLoad(false));
  };
  return (
    <section className="flex flex-col items-center gap-4 my-24 p-5 md:p-0">
      <p className={"text-md text-primary font-bold " + (locale === "en" ? fonts.spaceG.className : "")}>{t("contactUs")}</p>
      <h3 className={"text-4xl font-bold " + fonts.urbanist.className}>{t("getInTouch")}</h3>
      <p className={"text-gray-500 " + fonts.urbanist.className}>{t("weWouldLoveToHear")}</p>
      <Formik
        innerRef={formRef}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          privacyPolicy: false,
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string().email("Invalid email format").required("Email is required"),
          phone: Yup.string().required("Phone number is required"),
          message: Yup.string().required("Message is required"),
          privacyPolicy: Yup.bool().required("Privacy policy must be accepted"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setLoad(true);
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold   
 mb-2"
                  htmlFor="grid-first-name"
                >
                  {" "}
                   {t("firstName")}
                </label>
                <Field
                  name="firstName"
                  type="text"
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight   
 focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder={t("firstName")}
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  {" "}
                     {t("lastName")}
                </label>
                <Field
                  name="lastName"
                  type="text"
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight   
 focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder={t("lastName")}
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                {" "}
                 {t("email")}
              </label>
              <Field
                name="email"
                type="email"
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder={t("email")}
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                {t("phoneNumber")}
              </label>
              <Field
                name="phone"
                type="text"
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight   
 focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder={t("phoneNumber")}
              />
              <ErrorMessage name="phone" component="div" className="text-red-500" />
            </div>
            <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                {" "}
                 {t("message")}
              </label>
              <Field
                name="message"
                as="textarea"
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                rows="4"
                placeholder={t("message")}
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
            <div className="flex items-center mb-6">
              <Field name="privacyPolicy" type="checkbox" className="mr-2 leading-tight" />
              <label className="block text-gray-500 font-bold" htmlFor="privacy-policy">
                <span className="text-sm">
                  {t("privacyPolicyAgreement")}{" "}
                  <a href="#" className="text-primary">
                    {t("privPolicy")}
                  </a>
                  .
                </span>
              </label>
              <ErrorMessage name="privacyPolicy" component="div" className="text-red-500" />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={
                  "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full " +
                  (load ? "cursor-not-allowed animate-pulse" : "")
                }
              >
                {t("sendMessage")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
