import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";
import { FaMapMarkerAlt, FaUpload } from "react-icons/fa";

// Yup validation schema
const validationSchema = Yup.object({
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  countryOfResidence: Yup.string().required("Country of Residence is required"),
  city: Yup.string().required("City is required"),
  region: Yup.string().required("Region is required"),
  neighbourhood: Yup.string().required("Neighbourhood is required"),
  street: Yup.string().required("Street is required"),
  address: Yup.string().required("Address is required"),
});

const NationalInfo = ({ locale }) => {
  const fonts = useFonts();
  const [isEditing, setIsEditing] = useState(false);

  // Initial form values for Formik
  const initialValues = {
    dateOfBirth: "12/2/2002",
    nationality: "Egypt",
    countryOfResidence: "Egypt",
    city: "Cairo",
    region: "Region",
    neighbourhood: "Neighborhood",
    street: "Street",
    address: "Address",
  };

  // Formik setup
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle save logic
      console.log("User Info Saved:", values);
      setIsEditing(false);
    },
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className={`personal-info ${locale === "en" ? fonts.spaceG.className : ""} flex flex-col items-start justify-start`}>
      <div className="w-full bg-white">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">
            {isEditing ? <>Edit National Address Information</> : <>National Address Information</>}
          </h3>

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
                  </select>
                  {formik.touched.nationality && formik.errors.nationality && (
                    <p className="text-red-500 text-xs italic">{formik.errors.nationality}</p>
                  )}
                </div>

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
                  </select>
                  {formik.touched.countryOfResidence && formik.errors.countryOfResidence && (
                    <p className="text-red-500 text-xs italic">{formik.errors.countryOfResidence}</p>
                  )}
                </div>

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
                  {formik.touched.city && formik.errors.city && <p className="text-red-500 text-xs italic">{formik.errors.city}</p>}
                </div>

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
                  </select>
                  {formik.touched.region && formik.errors.region && <p className="text-red-500 text-xs italic">{formik.errors.region}</p>}
                </div>

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
                  {formik.touched.street && formik.errors.street && <p className="text-red-500 text-xs italic">{formik.errors.street}</p>}
                </div>

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
                  {formik.touched.address && formik.errors.address && <p className="text-red-500 text-xs italic">{formik.errors.address}</p>}
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
                    onClick={handleCancel}
                    className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full">
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <>
                  <div className="grid grid-rows-4 grid-flow-col  gap-5 mt-10">
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Date of birth</p>
                      <p>{formik.values.dateOfBirth}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">JCountry of residence</p>
                      <p>{formik.values.countryOfResidence}</p>
                    </div>
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Region</p>
                      <p>{formik.values.region}</p>
                    </div>
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Street</p>
                      <p>{formik.values.street}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Nationality</p>
                      <p>{formik.values.nationality}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">City</p>
                      <p>{formik.values.city}</p>
                    </div>
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Neighborhood</p>
                      <p>{formik.values.neighbourhood}</p>
                    </div>
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Address</p>
                      <p>{formik.values.address}</p>
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

export default NationalInfo;
