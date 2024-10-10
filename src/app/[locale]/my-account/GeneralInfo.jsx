import { useState } from "react";
import { useFormik } from "formik";
import useFonts from "@/utils/useFonts";

const GeneralInfo = () => {
  const fonts = useFonts(); // Get the font object from the hook
  const [isEditing, setIsEditing] = useState(false);

  // Initial states for financial questions (default 'No')
  const [answers, setAnswers] = useState({
    boardMember: "No",
    financialExperience: "No",
    workedInFinancialSector: "No",
    relatedToBoard: "No",
    memberOfListedCompany: "No",
    seniorTaskAssignment: "No",
    financialSituationInfo: "No",
    realBeneficiary: "No",
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      // other form fields if needed
    },
    onSubmit: (values) => {
      // Save logic
      console.log("General Info Submitted:", values, answers);
      setIsEditing(false);
    },
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleAnswerChange = (field, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [field]: value,
    }));
  };

  return (
    <div className={`personal-info ${locale === "en" ? fonts.spaceG.className : ""} flex flex-col items-start justify-start`}>
      <div className="w-full bg-white">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">{isEditing ? <>Edit General Information</> : <>General Information</>}</h3>

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

        <form onSubmit={formik.handleSubmit} className="user-info grid md:grid-cols-1 p-5">
          <div className="grid gap-4 mb-6">
            {isEditing ? (
              <>
                {[
                  { label: "Are you a current member of the board of directors of any company?", field: "boardMember" },
                  { label: "Do you have any other work experience related to the financial sector?", field: "financialExperience" },
                  { label: "Have you worked in the financial sector in the past five years?", field: "workedInFinancialSector" },
                  {
                    label: "Are you related to a member of the board of directors, audit committee, or a senior executive in a listed company?",
                    field: "relatedToBoard",
                  },
                  {
                    label: "Are you a member of the board of directors, audit committee, or a senior executive of a listed company?",
                    field: "memberOfListedCompany",
                  },
                  {
                    label:
                      "Are you assigned to senior tasks in the Kingdom or in a foreign country, senior management positions, or a job in an international organization?",
                    field: "seniorTaskAssignment",
                  },
                  { label: "Any other financial information about the client’s financial situation?", field: "financialSituationInfo" },
                  { label: "Are you a real beneficiary of the investment account?", field: "realBeneficiary" },
                ].map(({ label, field }) => (
                  <div key={field} className=" shadow-md rounded-md w-full flex flex-col gap-2 p-5">
                    <p>{label}</p>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name={field}
                          value="Yes"
                          checked={answers[field] === "Yes"}
                          onChange={() => handleAnswerChange(field, "Yes")}
                          className="checked:bg-primary checked:active:bg-primary checked:focus:bg-primary focus:bg-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />{" "}
                        Yes
                      </label>
                      <label className="ml-4">
                        <input
                          type="radio"
                          name={field}
                          value="No"
                          checked={answers[field] === "No"}
                          onChange={() => handleAnswerChange(field, "No")}
                          className="checked:bg-primary checked:active:bg-primary checked:focus:bg-primary focus:bg-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />{" "}
                        No
                      </label>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col   justify-between p-5">
                  <p>Are you a current member of the board of directors of any company?</p>
                  <p>{answers.boardMember}</p>
                </div>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col  justify-between p-5">
                  <p>Do you have any other work experience related to the financial sector?</p>
                  <p>{answers.financialExperience}</p>
                </div>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col  justify-between p-5">
                  <p>Have you worked in the financial sector in the past five years?</p>
                  <p>{answers.workedInFinancialSector}</p>
                </div>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col  justify-between p-5">
                  <p>Are you related to a member of the board of directors, audit committee, or a senior executive in a listed company?</p>
                  <p>{answers.relatedToBoard}</p>
                </div>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col  justify-between p-5">
                  <p>Are you a member of the board of directors, audit committee, or a senior executive of a listed company?</p>
                  <p>{answers.memberOfListedCompany}</p>
                </div>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col  justify-between p-5">
                  <p>
                    Are you assigned to senior tasks in the Kingdom or in a foreign country, senior management positions, or a job in an international
                    organization?
                  </p>
                  <p>{answers.seniorTaskAssignment}</p>
                </div>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col  justify-between p-5">
                  <p>Any other financial information about the client’s financial situation?</p>
                  <p>{answers.financialSituationInfo}</p>
                </div>
                <div className=" shadow-md rounded-md w-full flex md:flex-row flex-col  justify-between p-5">
                  <p>Are you a real beneficiary of the investment account?</p>
                  <p>{answers.realBeneficiary}</p>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralInfo;
