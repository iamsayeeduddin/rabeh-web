import { useEffect, useState } from "react";
import useFonts from "@/utils/useFonts";
import { FaUpload } from "react-icons/fa";

const FinancialInfo = ({ data, handleUpdate, isLoading, isSuccess, getData, locale }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");

  // User information state
  const [userInfo, setUserInfo] = useState({
    theannualincome: "3,4490SAR",
    Educationallevel: "level",
    primarysourceofincome: "source",
    netWorth: "445555SAR",
    anotherPhoneNumber: "+9961234567890",
  });

  const setInitVal = () => {
    setUserInfo({
      theannualincome: data?.annualIncome,
      Educationallevel: data?.educationalLevel,
      primarysourceofincome: data?.primarySourceOfIncome,
      netWorth: data?.netWorth,
      anotherPhoneNumber: data?.anotherPhoneNumber,
    });
  };

  useEffect(() => {
    setInitVal();
  }, [data]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleCancel = () => {
    setInitVal();
    setIsEditing(false);
  };

  const handleSave = () => {
    if (!isLoading) {
      handleUpdate(userInfo);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      getData();
      setIsEditing(false);
    }
  }, [isSuccess]);

  return (
    <div className={`personal-info ${locale === "en" ? fonts.spaceG.className : ""} flex flex-col items-start justify-start`}>
      <div className="w-full   bg-white ">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">
              {isEditing ? (
                <>
                  {t("edit")} {t("financialInfo")}
                </>
              ) : (
                <>{t("financialInfo")}</>
              )}
          </h3>

          <div className="flex justify-end mb-4">
            {!isEditing && (
              <button
                className="  font-semibold py-2 px-4 rounded-md flex flex-row text-[15px] text-[#495162] gap-3 border-2"
                onClick={handleEditClick}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3018 3.69978C15.8137 3.21162 15.0222 3.21162 14.534 3.69978L13.8733 4.36052L15.6411 6.12829L16.3018 5.46754C16.79 4.97939 16.79 4.18793 16.3018 3.69978ZM14.4626 7.3068L12.6948 5.53903L3.33464 14.8992V16.6966H5.07279L14.4626 7.3068ZM13.3555 2.52126C14.4946 1.38223 16.3413 1.38223 17.4803 2.52126C18.6193 3.66029 18.6193 5.50702 17.4803 6.64605L6.00722 18.1191C5.85094 18.2754 5.63898 18.3632 5.41797 18.3632H2.5013C2.04106 18.3632 1.66797 17.9901 1.66797 17.5299V14.554C1.66797 14.333 1.75577 14.121 1.91205 13.9647L13.3555 2.52126Z"
                    fill="#495162"
                  />
                </svg>
                {t("edit")}
              </button>
            )}
          </div>
        </div>

        <div className="user-info grid md:grid-cols-2 p-5 ">
          <div className="grid gap-4 mb-6">
            {isEditing ? (
              <>
                <div className="">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-2">{t("annualIncome")}</label>
                    <input
                      type="text"
                      name="theannualincome"
                      value={userInfo.theannualincome}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                </div>
                <div></div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-2">{t("eduLevel")}</label>
                  <input
                    type="text"
                    name="Educationallevel"
                    value={userInfo.Educationallevel}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>

                <div className="mb-6 relative">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Primary source of income">
                    {t("primarySourceOfIncome")}
                  </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id=""
                    name="primarysourceofincome"
                    type="text"
                    value={userInfo.primarysourceofincome}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6  ">
                  <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">{t("netWorthRiyalsEx")} </label>
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    type="text"
                    value={userInfo.netWorth}
                    name="netWorth"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-2">{t("anotherPhone")}</label>
                  <input
                    type="phone"
                    className="border border-gray-300 rounded p-2 w-full"
                    value={userInfo?.anotherPhoneNumber}
                    onChange={handleChange}
                    name="anotherPhoneNumber"
                  />
                </div>

                <div className="flex justify-between mb-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    disabled={isLoading}
                    className={
                      (isLoading ? "animate-pulse" : "") + " border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                    }
                  >
                    {t("cancel")}
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={
                      "bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full " +
                      (isLoading ? "animate-pulse" : "")
                    }
                    onClick={handleSave}
                  >
                    {t("save")}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-5 ">
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("annualIncome")}</p>
                    <p> {userInfo.theannualincome ? `${userInfo.theannualincome} SAR` :"NA"}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("eduLevel")} </p>
                    <p>{userInfo.Educationallevel || "NA"}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("primarySourceOfIncome")}</p>
                    <p>{userInfo.primarysourceofincome}</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("netWorthRiyalsEx")}</p>
                    <p>{userInfo.netWorth} SAR</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("anotherPhone")}</p>
                    <p>{userInfo.anotherPhoneNumber}</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold"></p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialInfo;
