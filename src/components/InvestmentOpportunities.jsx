import React from 'react'
import CardSlider from './CardSlider'
const InvestmentOpportunities = () => {

  const cards = [
    {
      logoSrc: '/Avatar.png',
      projectName: 'Mohami Project 1',
      issueNumber: '28990',
      amount: '60,897.34',
      daysLeft: '29',
      progress: 70,
      annualReturn: '+3,50%',
      returnOnInvestment: '+3,50%',
      dueDate: '12/2/2024',
    },
    {
      logoSrc: '/path/to/logo2.png',
      projectName: 'Mohami Project 2',
      issueNumber: '28991',
      amount: '50,897.34',
      daysLeft: '20',
      progress: 60,
      annualReturn: '+3,60%',
      returnOnInvestment: '+3,60%',
      dueDate: '10/2/2024',
    },
    {
      logoSrc: '/path/to/logo3.png',
      projectName: 'Mohami Project 3',
      issueNumber: '28992',
      amount: '70,897.34',
      daysLeft: '25',
      progress: 80,
      annualReturn: '+3,70%',
      returnOnInvestment: '+3,70%',
      dueDate: '11/2/2024',
    },
    // Add more card data as needed
  ];
  return (
    <div class=" bg-[#FAFAFA] w-min-[1440px] h-auto pt-[96px] pr-[72px] pb-[112px] pl-[72px] flex-row gap-[64px] ">
      <div class="font-inter text-[18px] font-medium leading-[27px] text-left my-5">
      Unleash Investment
      </div>
      <div class="font-inter text-[48px] font-semibold leading-[57.6px] tracking-[-0.01em] text-left my-5">
      Investment opportunities
        </div>
        <div class="font-inter text-[18px] font-normal leading-[27px] text-left my-5 ">
        It offers services for fundraising, equity exchange, and business enhancement, and facilitates funds and financing and all kinds of support before, during, and after services. 
      </div>
      <div className='flex items-center justify-center '>
      <CardSlider cards={cards} />
      </div>
        <div className="flex items-center justify-center text-primary mt-7">        More Investment</div>

    </div>

  )
}

export default InvestmentOpportunities
