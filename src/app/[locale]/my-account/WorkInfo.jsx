import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFonts from "@/utils/useFonts";
import moment from "moment";

// Yup validation schema
const validationSchema = Yup.object({
  employerName: Yup.string().required("Employer name is required"),
  employerAddress: Yup.string().required("Employer address is required"),
  jobName: Yup.string().required("Job name is required"),
  employerPhone: Yup.string().when("hasEmployerPhone", {
    is: true,
    then: () =>
      Yup.string()
        .required("Employer phone is required")
        .matches(/^\+?[0-9]+$/, "Phone number is not valid"),
  }),
  employmentStartDate: Yup.date().required("Start date is required"),
  employmentEndDate: Yup.date().when("stillWorking", {
    is: false,
    then: () => Yup.date().required("End date is required"),
  }),
});

const WorkInfo = ({ data }) => {
  const fonts = useFonts(); // Get the font object from the hook
  const [isEditing, setIsEditing] = useState(false);

  // Initial form values for Formik
  const initialValues = {
    employerName: "Mohamed Abo Soliman",
    employerAddress: "Cairo, Egypt",
    jobName: "Product Designer",
    employerPhone: "+9961234567890",
    employmentStartDate: "2024-12-02",
    employmentEndDate: "2024-12-02",
    noEmployer: false,
    hasEmployerPhone: true,
    stillWorking: false,
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

  useEffect(() => {
    formik.setValues({
      employerName: data?.employerName,
      employerAddress: data?.employerAddress,
      jobName: data?.jobName,
      employerPhone: data?.employerPhone,
      employmentStartDate: moment(data?.employmentStartDate || new Date()).format("YYYY-MM-DD"),
      employmentEndDate: moment(data?.employmentEndDate || new Date()).format("YYYY-MM-DD"),
      noEmployer: data?.noEmployer,
      hasEmployerPhone: true,
      stillWorking: data?.stillWorking,
    });
  }, [data]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className={`personal-info ${fonts.spaceG.className} flex flex-col items-start justify-start`}>
      <div className="w-full bg-white">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">{isEditing ? <>Edit Work Information</> : <>Work Information</>}</h3>

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
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" {...formik.getFieldProps("noEmployer")} />
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
                        Employer Address
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
                        Job Name
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
                          Employer Phone
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
                        Employment Start Date
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
                        <span className="ml-2">Still working?</span>
                      </label>
                    </div>

                    {formik.values.stillWorking === false && (
                      <div className="mb-6">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="employmentEndDate">
                          Employment End Date
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
                  <div className="flex flex-col gap-5 mt-10">
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Employer Name</p>
                      <p>{formik.values.employerName}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Employer Address</p>
                      <p>{formik.values.employerAddress}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Job Name</p>
                      <p>{formik.values.jobName}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Employer Phone</p>
                      <p>{formik.values.employerPhone}</p>
                    </div>

                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Employment Start Date</p>
                      <p>{formik.values.employmentStartDate}</p>
                    </div>
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">Employment end Date</p>
                      <p>{formik.values.employmentStartDate}</p>
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

export default WorkInfo;
