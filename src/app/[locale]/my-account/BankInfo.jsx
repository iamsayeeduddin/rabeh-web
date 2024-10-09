import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";
import { FaMapMarkerAlt, FaUpload } from "react-icons/fa";

const validationSchema = Yup.object({
  bankName: Yup.string().required("Bank Name is required"),
  accountHolderName: Yup.string().required("Account Holder Name is required"),
  iban: Yup.string()
    .required("IBAN is required")
    .matches(/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/, "IBAN format is invalid"),
});

const BankInfo = ({ data, handleUpdate, isLoading, isSuccess, locale }) => {
  const fonts = useFonts();
  const [isEditing, setIsEditing] = useState(false);

  // Initial form values for Formik
  const initialValues = {
    bankName: "Your Bank Name",
    accountHolderName: "Your Name",
    iban: "Your IBAN",
  };

  // Formik setup
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle save logic
      handleUpdate(values);
      // setIsEditing(false);
    },
  });

  const setInitVal = () => {
    formik.setValues({
      bankName: data?.bankName,
      accountHolderName: data?.accountHolderName,
      iban: data?.iban,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    setInitVal();
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      setIsEditing(false);
    }
  }, [isLoading, isSuccess]);

  const handleCancel = () => {
    setInitVal();
    setIsEditing(false);
  };

  return (
    <div className={`personal-info ${locale === "en" ? fonts.spaceG.className : ""} flex flex-col items-start justify-start`}>
      <div className="w-full bg-white">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">{isEditing ? <>Edit Bank Information</> : <>Bank Information</>}</h3>

          <div className="flex justify-end mb-4">
            {!isEditing && (
              <button
                className="font-semibold py-2 px-4 rounded-md flex flex-row text-[15px] text-[#495162] gap-3 border-2"
                onClick={handleEditClick}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3018 3.69978C15.8137 3.21162 15.0222 3.21162 14.534 3.69978L13.8733 4.36052L15.6411 6.12829L16.3018 5.46754C16.79 4.97939 16.79 4.18793 16.3018 3.69978ZM14.4626 7.3068L12.6948 5.53903L3.33464 14.8992V16.6966H5.07279L14.4626 7.3068ZM13.3555 2.52126C14.4946 1.38223 16.3413 1.38223 17.4803 2.52126C18.6193 3.66029 18.6193 5.50702 17.4803 6.64605L6.00722 18.1191C5.85094 18.2754 5.63898 18.3632 5.41797 18.3632H2.5013C2.04106 18.3632 1.66797 17.9901 1.66797 17.5299V14.554C1.66797 14.333 1.75577 14.121 1.91205 13.9647L13.3555 2.52126Z"
                    fill="#495162"
                  />
                </svg>
                Edit
              </button>
            )}
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="user-info grid md:grid-cols-2 p-5">
          <div className="grid gap-4 mb-6">
            {isEditing ? (
              <>
                <div className="mb-6">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bankName">
                    Bank Name
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
                    Account Holder Name
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
                    IBAN
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
                {JSON.stringify(formik.errors)}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={"bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full " + (isLoading ? "animate-pulse" : "")}
                  >
                    Save{" "}
                  </button>
                </div>
              </>
            ) : (
              <>
                <>
                  <div className="grid grid-rows-4 grid-flow-col  gap-5 mt-10">
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Bank Name</p>
                      <p>{formik.values.bankName || "NA"}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Account Holder Name</p>
                      <p>{formik.values.accountHolderName || "NA"}</p>
                    </div>
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">IBAN</p>
                      <p>{formik.values.iban || "NA"}</p>
                    </div>
                  </div>
                </>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankInfo;
