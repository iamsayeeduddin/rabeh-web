"use client";
import useFonts from "@/utils/useFonts";
import { useTranslations } from "next-intl";
import React, { useState, useRef } from "react";
import endpoint from "@/utils/apiUtil";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const Newsletter = () => {
  const fonts = useFonts();
  const formRef = useRef();
  const [load, setLoad] = useState(false);
  const t = useTranslations();
  const handleSubmit = (values) => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/subscribers/subscribe", values)
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
    <div className={"gap-[16px] md:p-[16px] mb-5 text-center md:text-[none]  " + fonts.spaceG.className}>
      <div className="md:p-12 p-5 flex flex-col items-center justify-center ">
        <div className="text-[36px] text-secondary">{t("signUpNews")}</div>
        <div className="text-[20px] text-[#616B82] mt-2">{t("signUpNewsSub")}</div>
      </div>

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Invalid email format").required("Email is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setLoad(true);
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center justify-center mt-3">
              <div className="flex p-5 md:p-0 flex-col items-start w-[360px]">
                <Field
                  name="email"
                  type="text"
                  placeholder={t("enterEmail")}
                  className="w-full h-[48px] border border-secondary rounded-[8px] p-5 mt-3"
                />
                <ErrorMessage name="email" component="div" className="text-[14px] text-red-500 mt-1 w-full" />
                <div className="text-[14px] text-gray-500 mt-1 w-full">{t("careDataPolicy")}</div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={
                  "text-xl bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-[8px] ml-5 " + (load ? "cursor-not-allowed animate-pulse" : "")
                }
              >
                {t("subscribe")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Newsletter;
