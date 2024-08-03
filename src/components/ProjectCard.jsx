import Image from "next/image";

const ProjectCard = ({
  logoSrc,
  projectName,
  issueNumber,
  amount,
  daysLeft,
  progress,
  annualReturn,
  returnOnInvestment,
  dueDate,
  onInvestClick,
}) => {
  return (
    <div className="bg-white w-max-[370.67px] p-4 gap-[16px] border-t border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logoSrc}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <h2 className="font-semibold text-lg">{projectName}</h2>
            <p className="text-secondary"> Issue number {issueNumber}</p>
          </div>
        </div>

        <div className="text-secondary rounded-full bg-[#F4F6F8]">
          <div className="flex flex-row items-center justify-center p-1 ">
            {" "}
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.66667 3.60659C5.72115 3.60659 3.33333 5.9944 3.33333 8.93992C3.33333 11.8854 5.72115 14.2733 8.66667 14.2733C11.6122 14.2733 14 11.8854 14 8.93992C14 5.9944 11.6122 3.60659 8.66667 3.60659ZM2 8.93992C2 5.25802 4.98477 2.27325 8.66667 2.27325C12.3486 2.27325 15.3333 5.25802 15.3333 8.93992C15.3333 12.6218 12.3486 15.6066 8.66667 15.6066C4.98477 15.6066 2 12.6218 2 8.93992ZM8.66667 5.60659C9.03486 5.60659 9.33333 5.90506 9.33333 6.27325V8.66378L11.1381 10.4685C11.3984 10.7289 11.3984 11.151 11.1381 11.4113C10.8777 11.6717 10.4556 11.6717 10.1953 11.4113L8.19526 9.41133C8.07024 9.2863 8 9.11673 8 8.93992V6.27325C8 5.90506 8.29848 5.60659 8.66667 5.60659Z"
                fill="#495162"
              />
            </svg>
            <div className="text-[12px]">{daysLeft} Day left</div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-xl font-semibold">SAR {amount}</p>
        <div className="relative pt-2 flex items-center">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200 w-full">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
            ></div>
          </div>
          <span className="text-secondary text-lg ml-3">{progress}%</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-gray-700 border-b-2 border-[#EAECF1] p-[12px]">
          <div className="flex items-center gap-2 ">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.7999 0.739929C1.47442 0.739929 0.399902 1.81445 0.399902 3.13993V7.93993C0.399902 9.26541 1.47442 10.3399 2.7999 10.3399L2.7999 3.13993H14.7999C14.7999 1.81445 13.7254 0.739929 12.3999 0.739929H2.7999Z"
                fill="#616B82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.1999 7.93993C5.1999 6.61445 6.27442 5.53993 7.5999 5.53993H17.1999C18.5254 5.53993 19.5999 6.61445 19.5999 7.93993V12.7399C19.5999 14.0654 18.5254 15.1399 17.1999 15.1399H7.5999C6.27442 15.1399 5.1999 14.0654 5.1999 12.7399V7.93993ZM12.3999 12.7399C13.7254 12.7399 14.7999 11.6654 14.7999 10.3399C14.7999 9.01445 13.7254 7.93993 12.3999 7.93993C11.0744 7.93993 9.9999 9.01445 9.9999 10.3399C9.9999 11.6654 11.0744 12.7399 12.3999 12.7399Z"
                fill="#616B82"
              />
            </svg>
            Annual Return (APR)
          </div>
          <p className="text-green-500">{annualReturn}%</p>
        </div>
        <div className="flex items-center justify-between text-gray-700 border-b-2 border-[#EAECF1] p-[12px]">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.7999 0.739929C1.47442 0.739929 0.399902 1.81445 0.399902 3.13993V7.93993C0.399902 9.26541 1.47442 10.3399 2.7999 10.3399L2.7999 3.13993H14.7999C14.7999 1.81445 13.7254 0.739929 12.3999 0.739929H2.7999Z"
                fill="#616B82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.1999 7.93993C5.1999 6.61445 6.27442 5.53993 7.5999 5.53993H17.1999C18.5254 5.53993 19.5999 6.61445 19.5999 7.93993V12.7399C19.5999 14.0654 18.5254 15.1399 17.1999 15.1399H7.5999C6.27442 15.1399 5.1999 14.0654 5.1999 12.7399V7.93993ZM12.3999 12.7399C13.7254 12.7399 14.7999 11.6654 14.7999 10.3399C14.7999 9.01445 13.7254 7.93993 12.3999 7.93993C11.0744 7.93993 9.9999 9.01445 9.9999 10.3399C9.9999 11.6654 11.0744 12.7399 12.3999 12.7399Z"
                fill="#616B82"
              />
            </svg>
            Return on investment
          </div>
          <p className="text-green-500">{returnOnInvestment}%</p>
        </div>
        <div className="flex items-center justify-between text-gray-700 border-b-2 border-[#EAECF1] p-[12px]">
          <div className="flex items-center gap-2 ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.1999 5.13997V3.93997C5.1999 1.95174 6.81168 0.339966 8.7999 0.339966H11.1999C13.1881 0.339966 14.7999 1.95174 14.7999 3.93997V5.13997H17.1999C18.5254 5.13997 19.5999 6.21448 19.5999 7.53997V11.8249C16.6115 12.9336 13.3778 13.5399 9.99993 13.5399C6.62208 13.5399 3.38834 12.9336 0.399902 11.8249V7.53997C0.399902 6.21448 1.47442 5.13997 2.7999 5.13997H5.1999ZM7.5999 3.93997C7.5999 3.27722 8.13716 2.73997 8.7999 2.73997H11.1999C11.8626 2.73997 12.3999 3.27722 12.3999 3.93997V5.13997H7.5999V3.93997ZM8.7999 9.93997C8.7999 9.27722 9.33716 8.73997 9.9999 8.73997H10.0119C10.6746 8.73997 11.2119 9.27722 11.2119 9.93997C11.2119 10.6027 10.6746 11.14 10.0119 11.14H9.9999C9.33716 11.14 8.7999 10.6027 8.7999 9.93997Z"
                fill="#616B82"
              />
              <path
                d="M0.399902 14.3707V17.14C0.399902 18.4654 1.47442 19.54 2.7999 19.54H17.1999C18.5254 19.54 19.5999 18.4654 19.5999 17.14V14.3707C16.5846 15.3885 13.3556 15.9399 9.99993 15.9399C6.64425 15.9399 3.41526 15.3885 0.399902 14.3707Z"
                fill="#616B82"
              />
            </svg>
            Due date
          </div>
          <p className="text-gray-700">{dueDate}</p>
        </div>
      </div>
      <div className="mt-5">
        <button
          className="bg-primary text-white w-full py-2 rounded-md hover:bg-primary-light"
          onClick={onInvestClick}
        >
          Invest
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
