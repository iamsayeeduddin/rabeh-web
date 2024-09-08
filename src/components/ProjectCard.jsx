const ProjectCard = ({ logoSrc, projectName, issueNumber, amount, daysLeft, progress, annualReturn, returnOnInvestment, dueDate, onInvestClick }) => {
  return (
    <div className="bg-white w-max-[370.67px] p-4 gap-[16px] border-t border-gray-200 rounded-lg shadow-md mb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoSrc} alt="Logo" width={40} height={40} className="rounded-full" />
          <div className="ml-3">
            <h2 className="font-semibold text-lg">{projectName}</h2>
            <p className="text-secondary"> Issue number {issueNumber}</p>
          </div>
        </div>

        <div className="text-secondary rounded-full bg-[#F4F6F8]">
          <div className="flex flex-row items-center justify-center p-1 ">
            {" "}
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
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
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.7999 0.739929C1.47442 0.739929 0.399902 1.81445 0.399902 3.13993V7.93993C0.399902 9.26541 1.47442 10.3399 2.7999 10.3399L2.7999 3.13993H14.7999C14.7999 1.81445 13.7254 0.739929 12.3999 0.739929H2.7999Z"
                fill="#616B82"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
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
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.1999 8.13997V6.93997C7.1999 4.95174 8.81168 3.33997 10.7999 3.33997H13.1999C15.1881 3.33997 16.7999 4.95174 16.7999 6.93997V8.13997H19.1999C20.5254 8.13997 21.5999 9.21448 21.5999 10.54V14.8249C18.6115 15.9336 15.3778 16.5399 11.9999 16.5399C8.62208 16.5399 5.38834 15.9336 2.3999 14.8249V10.54C2.3999 9.21448 3.47442 8.13997 4.7999 8.13997H7.1999ZM9.5999 6.93997C9.5999 6.27722 10.1372 5.73997 10.7999 5.73997H13.1999C13.8626 5.73997 14.3999 6.27722 14.3999 6.93997V8.13997H9.5999V6.93997ZM10.7999 12.94C10.7999 12.2772 11.3372 11.74 11.9999 11.74H12.0119C12.6746 11.74 13.2119 12.2772 13.2119 12.94C13.2119 13.6027 12.6746 14.14 12.0119 14.14H11.9999C11.3372 14.14 10.7999 13.6027 10.7999 12.94Z"
                fill="#616B82"
              />
              <path
                d="M2.3999 17.3707V20.14C2.3999 21.4654 3.47442 22.54 4.7999 22.54H19.1999C20.5254 22.54 21.5999 21.4654 21.5999 20.14V17.3707C18.5846 18.3885 15.3556 18.9399 11.9999 18.9399C8.64425 18.9399 5.41526 18.3885 2.3999 17.3707Z"
                fill="#616B82"
              />
            </svg>
            Return on investment
          </div>
          <p className="text-green-500">{returnOnInvestment}%</p>
        </div>
        <div className="flex items-center justify-between text-gray-700 border-b-2 border-[#EAECF1] p-[12px]">
          <div className="flex items-center gap-2 ">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.1999 3.33997C6.53716 3.33997 5.9999 3.87722 5.9999 4.53997V5.73997H4.7999C3.47442 5.73997 2.3999 6.81448 2.3999 8.13997V20.14C2.3999 21.4654 3.47442 22.54 4.7999 22.54H19.1999C20.5254 22.54 21.5999 21.4654 21.5999 20.14V8.13997C21.5999 6.81448 20.5254 5.73997 19.1999 5.73997H17.9999V4.53997C17.9999 3.87722 17.4626 3.33997 16.7999 3.33997C16.1372 3.33997 15.5999 3.87722 15.5999 4.53997V5.73997H8.3999V4.53997C8.3999 3.87722 7.86264 3.33997 7.1999 3.33997ZM7.1999 9.33997C6.53716 9.33997 5.9999 9.87722 5.9999 10.54C5.9999 11.2027 6.53716 11.74 7.1999 11.74H16.7999C17.4626 11.74 17.9999 11.2027 17.9999 10.54C17.9999 9.87722 17.4626 9.33997 16.7999 9.33997H7.1999Z"
                fill="#616B82"
              />
            </svg>
            Due date
          </div>
          <p className="text-gray-700">{dueDate}</p>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-primary hover:bg-primary/80 text-white w-full py-2 rounded-md transition" onClick={onInvestClick}>
          Invest
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
