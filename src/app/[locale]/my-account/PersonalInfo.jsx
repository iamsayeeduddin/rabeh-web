"use client";
import { useEffect, useState } from "react";
import useFonts from "@/utils/useFonts";
import { FaUpload } from "react-icons/fa";
import moment from "moment";
import { useTranslations } from "next-intl";

const PersonalInfo = ({ data, handleUpdate, isLoading, isSuccess, getData, locale }) => {
  const fonts = useFonts();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");
  const t = useTranslations();

  // User information state
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    createdAt: "",
    nationality: "Egyptian",
    documentFile: "Passport",
    profilePic: "/assets/mohd_alosaimi.png",
    image: "",
    isPhoneVerified: false,
  });

  const initVal = () => {
    setUserInfo({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      createdAt: data.createdAt,
      nationality: data.nationality,
      documentFile: data?.documentFile,
      profilePic: data?.profilePic ? process.env.NEXT_PUBLIC_API_URL + "/media/" + data?.profilePic : null,
      image: data?.profilePic ? process.env.NEXT_PUBLIC_API_URL + "/media/" + data?.profilePic : null,
      role: data?.type,
      isPhoneVerified: data?.isPhoneVerified,
    });
  };
  useEffect(() => {
    initVal();
  }, [data]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedDocument(file.name);
    }
  };

  const handleImageChange = (e) => {
    if (!isEditing) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prevInfo) => ({ ...prevInfo, profilePic: file, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    initVal();
    setIsEditing(false);
  };

  const handleSave = () => {
    let obj = { ...userInfo };
    if (!obj.documentFile) {
      delete obj.documentFile;
    }
    if (!obj?.profilePic || obj?.profilePic?.toString().includes("http")) {
      delete obj.profilePic;
    }
    delete obj.image;
    handleUpdate(obj);
  };

  useEffect(() => {
    if (isSuccess) {
      getData();
      setIsEditing(false);
    }
  }, [isLoading, isSuccess]);

  return (
    <div className={`personal-info ${locale === "en" ? fonts.spaceG.className : ""} flex flex-col items-start justify-start`}>
      <div className="w-full   bg-white ">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">{isEditing ? <> Edit Personal Information</> : <> Personal Information</>}</h3>

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

        <div className="user-info grid md:grid-cols-3 p-5 ">
          <div className="flex   mb-6 justify-center">
            <label htmlFor="upload-image">
              {userInfo.profilePic && (
                <img
                  src={userInfo.image}
                  alt="Profile"
                  className="rounded-full w-40 h-40 cursor-pointer object-cover border-4 border-white shadow-lg "
                />
              )}
              {!userInfo.profilePic && (
                <div className="w-40 h-40 flex justify-center items-center text-7xl border-white shadow-lg  rounded-full bg-primary text-white cursor-pointer">
                  <p className={locale === "en" ? fonts.spaceG.className : ""}>{userInfo?.firstName?.[0]?.toUpperCase()}</p>
                </div>
              )}
              {isEditing ? <input id="upload-image" type="file" accept="image/*" onChange={handleImageChange} className="hidden" /> : null}

              {isEditing ? (
                <div className="flex flex-row items-center justify-center rounded-md border-2 border-primary mt-5 p-2 cursor-pointer ">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.0391 2.95923C12.6486 2.56871 12.0154 2.56871 11.6249 2.95923L11.0963 3.48783L12.5105 4.90204L13.0391 4.37345C13.4296 3.98292 13.4296 3.34976 13.0391 2.95923ZM11.5677 5.84485L10.1535 4.43064L2.66536 11.9188V13.3567H4.05589L11.5677 5.84485ZM10.6821 2.01643C11.5933 1.1052 13.0707 1.1052 13.9819 2.01643C14.8931 2.92765 14.8931 4.40503 13.9819 5.31626L4.80344 14.4947C4.67841 14.6198 4.50884 14.69 4.33203 14.69H1.9987C1.63051 14.69 1.33203 14.3915 1.33203 14.0233V11.6426C1.33203 11.4658 1.40227 11.2962 1.52729 11.1712L10.6821 2.01643Z"
                      fill="#7860DC"
                    />
                  </svg>
                  <p className="text-primary">{userInfo?.profilePic ? t("changePhoto") : t("addPhoto")}</p>
                </div>
              ) : null}
            </label>
          </div>

          <div className="grid gap-4 mb-6">
            {isEditing ? (
              <>
                <div className="flex flex-row gap-2">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-2">{t("firstName")}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={userInfo.firstName}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-2">{t("lastName")}</label>
                    <input
                      type="text"
                      name="lastName"
                      value={userInfo.lastName}
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>
                </div>
                <div></div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-2">{t("email")}</label>
                  <input
                    type="email"
                    name="email"
                    disabled
                    value={userInfo.email}
                    onChange={handleChange}
                    className="border bg-slate-200 border-gray-300 rounded p-2 w-full"
                  />
                </div>

                <div className="mb-6 relative">
                  <label
                    className={`block tracking-wide text-gray-700 text-xs font-bold mb-2 ${locale === "en" ? "" : "text-right"}`}
                    htmlFor="phone"
                  >
                    {t("phoneNumber")}
                  </label>
                  <div className="relative">
                    <input
                      className={`appearance-none bg-slate-200 block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                        locale === "en" ? "pr-16" : "pl-16"
                      }`}
                      id="phone"
                      type="text"
                      disabled
                      value={userInfo.phoneNumber}
                      onChange={handleChange}
                    />
                    <div className={`absolute inset-y-0 ${locale === "en" ? "right-0" : "left-0"} flex items-center px-2 text-gray-700`}>
                      <select
                        value={userInfo.countryCode || "KSA"}
                        className="block bg-transparent border-none bg-no-repeat text-gray-700 pr-8 focus:outline-none focus:bg-white h-full"
                        id="country-code"
                      >
                        <option value="" label="" />
                        <option value="KSA" label="Saudi Arabia" />
                        <option value="USA" label="United States" />
                      </select>
                    </div>
                  </div>
                </div>

                {data?.type !== "Admin" ? (
                  <div className="mb-6  ">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">{t("role")}</label>
                    <select
                      onChange={handleChange}
                      className="appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={userInfo?.role}
                    >
                      <option value="Investor">Investor</option>
                      <option value="Consultant">Consultant</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                    </select>
                  </div>
                ) : null}

                <div>
                  <label className="block text-gray-700 text-sm mb-2">{t("nationality")}</label>
                  <select
                    name="nationality"
                    value={userInfo.nationality}
                    onChange={handleChange}
                    disabled={data?.nationality}
                    className={
                      "appearance-none block w-full text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " +
                      (userInfo?.nationality ? "bg-slate-200" : "")
                    }
                    id="country-code"
                  >
                    <option value="" label="Select your nationality" />
                    <option value="KSA" label="Saudi Arabia" />
                    <option value="USA" label="United States" />
                  </select>
                </div>

                {data?.type !== "Admin" && false ? (
                  <div className="mb-6">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="documentFile">
                      {t("uploadDoc")}
                    </label>
                    <div className={`flex flex-col items-center justify-center border-dashed border-2 rounded-md md:h-48 `}>
                      <FaUpload className="text-gray-400 mb-2" size={24} />
                      <p className="text-gray-500 text-center">
                        <span className="text-primary">Click to upload </span>
                        or drag and drop
                      </p>
                      <p className="text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                      <input type="file" id="documentFile" className="hidden" />
                    </div>
                  </div>
                ) : null}

                <div className="flex justify-between mb-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    disabled={isLoading}
                    className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                  >
                    {t("cancel")}
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={
                      "bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full " + (isLoading ? "cursor-not-allowed animate-pulse" : "")
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
                    <p className="text-[#495162] text-[12px] font-bold">{t("fullName")} </p>
                    <p> {`${userInfo.firstName} ${userInfo.lastName}`}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("email")} </p>
                    <p>{userInfo.email}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("phoneNumber")} </p>
                    <p> {userInfo.phoneNumber}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("createdAt")}</p>
                    <p>{moment(userInfo.createdAt).format("DD/MM/YYYY - hh:mm A")}</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">{t("nationality")}</p>
                    <p> {userInfo.nationality === "KSA" ? "Saudi Arabia" : "United States" || "NA"}</p>
                  </div>
                  {userInfo?.documentFile && data?.type !== "Admin" ? (
                    <div>
                      <p className="text-[#495162] text-[12px] font-bold">{data?.documentType}</p>

                      <div
                        className="md:w-[900px] rounded-md mt-2 shadow-sm border h-full flex flex-row gap-5 p-2 cursor-pointer"
                        onClick={() => {
                          window.open(process.env.NEXT_PUBLIC_API_URL + "/media/" + userInfo.documentFile, "_blank");
                        }}
                      >
                        <div className="mt-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4 0C2.89543 0 2 0.89543 2 2V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V0H4ZM22 1.57356e-05V4L18 1.53859e-05L22 1.57356e-05Z"
                              fill="#CFD3DE"
                            />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0V3.99998H22L18 0Z" fill="#949EB5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 8V4H18L22 8Z" fill="#AFB7C8" />
                            <rect x="1" y="8" width="22" height="12" rx="1" fill="#7860DC" />
                            <path
                              d="M5.06578 17V11.4H8.44978V12.008H5.73778V13.888H8.23378V14.496H5.73778V17H5.06578ZM9.38609 17V11.4H10.0581V17H9.38609ZM11.3392 17V11.4H12.0112V16.392H14.8432V17H11.3392ZM15.7064 17V11.4H19.1544V12.008H16.3784V13.88H18.9304V14.488H16.3784V16.392H19.1944V17H15.7064Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="text-sm mt-2"> {userInfo?.documentFile?.split(data?._id + "-")}</div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
