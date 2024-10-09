"use client";

import { useEffect, useState } from "react";
import useFonts from "@/utils/useFonts";
import PersonalInfo from "./PersonalInfo";
import FinancialInfo from "./FinancialInfo";
import WorkInfo from "./WorkInfo";
import NationalInfo from "./NationalInfo";
import BankInfo from "./BankInfo";
import GeneralInfo from "./GeneralInfo";
import { useRouter } from "@/i18n/routing";
import { toast } from "react-toastify";
import useAxios from "@/utils/useAxios";
import axios from "axios";

const MyAccount = ({ params: { locale } }) => {
  const fonts = useFonts();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Personal");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  let user = JSON.parse(localStorage?.getItem("user"));

  const handleUpdate = (vals) => {
    const formData = new FormData();

    Object.keys(vals).forEach((key) => {
      formData.append(key, vals[key]);
    });
    setIsLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/api/users/updateUser/" + user?._id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsSuccess(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        if (err.status === 403) {
          localStorage.removeItem("user");
          router.push("/login");
        }
        setIsSuccess(false);
      })
      .finally(() => setIsLoading(false));
  };

  const getData = async () => {
    setIsSuccess(false);
    setData({});
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/users/getUserDetails/" + user?._id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        if (err.status === 403) {
          localStorage.removeItem("user");
          router.push("/login");
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const tabArr = [
    { value: "Personal", show: true },
    { value: "Financial", show: false },
    { value: "Work", show: false },
    { value: "National", show: false },
    { value: "Bank", show: false },
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case "Personal":
        return <PersonalInfo locale={locale} data={data} handleUpdate={handleUpdate} isLoading={isLoading} isSuccess={isSuccess} getData={getData} />;
      case "Financial":
        return <FinancialInfo locale={locale} data={data} handleUpdate={handleUpdate} isLoading={isLoading} isSuccess={isSuccess} />;
      case "Work":
        return <WorkInfo locale={locale} data={data} handleUpdate={handleUpdate} isLoading={isLoading} isSuccess={isSuccess} />;
      case "General":
        return <GeneralInfo />;
      case "National":
        return <NationalInfo locale={locale} data={data} handleUpdate={handleUpdate} isLoading={isLoading} isSuccess={isSuccess} />;
      case "Bank":
        return <BankInfo locale={locale} data={data} handleUpdate={handleUpdate} isLoading={isLoading} isSuccess={isSuccess} />;
      default:
        return <PersonalInfo locale={locale} data={data} handleUpdate={handleUpdate} isLoading={isLoading} isSuccess={isSuccess} />;
    }
  };

  return (
    <div className={`container mx-auto p-6 ${locale === "en" ? fonts.spaceG.className : ""}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="breadcrumbs text-sm text-gray-500">
          <div className="flex flex-row items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.41205 1.91107C9.73748 1.58563 10.2651 1.58563 10.5906 1.91107L18.0906 9.41107C18.416 9.73651 18.416 10.2641 18.0906 10.5896C17.7651 10.915 17.2375 10.915 16.912 10.5896L16.668 10.3455V16.667C16.668 17.5875 15.9218 18.3337 15.0013 18.3337H5.0013C4.08083 18.3337 3.33464 17.5875 3.33464 16.667V10.3455L3.09056 10.5896C2.76512 10.915 2.23748 10.915 1.91205 10.5896C1.58661 10.2641 1.58661 9.73651 1.91205 9.41107L9.41205 1.91107ZM5.0013 8.67884V16.667H7.5013V13.3337C7.5013 12.4132 8.24749 11.667 9.16797 11.667H10.8346C11.7551 11.667 12.5013 12.4132 12.5013 13.3337V16.667H15.0013V8.67884L10.0013 3.67884L5.0013 8.67884ZM10.8346 16.667V13.3337H9.16797V16.667H10.8346Z"
                fill="#7986A3"
              />
            </svg>
            <span className="mr-2"> Account</span>{" "}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.52729 13.1377C5.26694 12.8774 5.26694 12.4553 5.52729 12.1949L9.72256 7.99967L5.52729 3.80441C5.26694 3.54406 5.26694 3.12195 5.52729 2.8616C5.78764 2.60125 6.20975 2.60125 6.4701 2.8616L11.1368 7.52827C11.3971 7.78862 11.3971 8.21073 11.1368 8.47108L6.4701 13.1377C6.20975 13.3981 5.78764 13.3981 5.52729 13.1377Z"
                fill="#AFB7C8"
              />
            </svg>
            <span className="ml-2">My Account</span>
          </div>
        </div>
        <button className=" text-[#B21531] px-4 py-2 rounded-md border-2 border-[#B21531] ">Deactivate</button>
      </div>

      <div className="border-b mt-6">
        <nav className="-mb-px flex md:space-x-8 space-x-1" aria-label="Tabs">
          {tabArr
            .filter((tab) => (user?.type === "Consultant" || user?.type === "Admin" ? tab.show : true))
            .map((tab) => (
              <button
                key={tab.value}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.value
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.value}
              </button>
            ))}
        </nav>
      </div>

      <div className="mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default MyAccount;
