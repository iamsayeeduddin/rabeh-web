import Image from 'next/image';

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
  onInvestClick 
}) => {
  return (
    <div className="bg-white w-[370.67px] p-4 gap-[16px] border-t border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={logoSrc} alt="Logo" width={40} height={40} className="rounded-full" />
          <div className="ml-3">
            <h2 className="font-semibold text-lg">{projectName}</h2>
            <p className="text-gray-500">Issue number {issueNumber}</p>
          </div>
        </div>
        <div className="text-gray-500">{daysLeft} Day left</div>
      </div>
      <div className="mt-4"> 
        <p className="text-gray-700 text-xl font-semibold">SAR {amount}</p>
        <div className="relative pt-2">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
            <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
          </div>
          <span className="text-gray-500 text-sm">{progress}%</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-gray-700">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 5a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 112 2 2 2 0 01-2-2zM2 10a2 2 0 112-2 2 2 0 01-2 2zm3-2a2 2 0 11-2 2 2 2 0 012-2zm5-4a2 2 0 11-2 2 2 2 0 012-2zm5 2a2 2 0 11-2 2 2 2 0 012-2zm1-8a1 1 0 110 2 1 1 0 010-2z" /></svg>
            Annual Return (APR)
          </div>
          <p className="text-green-500">{annualReturn}%</p>
        </div>
        <div className="flex items-center justify-between text-gray-700">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 5a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 112 2 2 2 0 01-2-2zM2 10a2 2 0 112-2 2 2 0 01-2 2zm3-2a2 2 0 11-2 2 2 2 0 012-2zm5-4a2 2 0 11-2 2 2 2 0 012-2zm5 2a2 2 0 11-2 2 2 2 0 012-2zm1-8a1 1 0 110 2 1 1 0 010-2z" /></svg>
            Return on investment
          </div>
          <p className="text-green-500">{returnOnInvestment}%</p>
        </div>
        <div className="flex items-center justify-between text-gray-700">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 5a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 112 2 2 2 0 01-2-2zM2 10a2 2 0 112-2 2 2 0 01-2 2zm3-2a2 2 0 11-2 2 2 2 0 012-2zm5-4a2 2 0 11-2 2 2 2 0 012-2zm5 2a2 2 0 11-2 2 2 2 0 012-2zm1-8a1 1 0 110 2 1 1 0 010-2z" /></svg>
            Due date
          </div>
          <p className="text-gray-700">{dueDate}</p>
        </div>
      </div>
      <div className="mt-4">
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
