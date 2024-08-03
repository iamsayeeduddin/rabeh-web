import React from 'react'
import CardSlider from './CardSliderBlack'

const SupportedCompainies = () => {
  return (
    <div className='bg-secondary h-max-[653px] w-max-[] p-[75px]  '>
        <div className="grid grid-cols-2 ">
            <div className="text-white text-start font-inter px-20 text-[32px]">

            Supported more than 150+ companies worldwide
            </div>
            <div className="text-white text-start font-inter px-20 text-[12px] ">
            We've worked with hundreds of companies that have made jobify a platform to get employees for them. Interested in becoming a partner?
            <div className="text-white texxt-start text-[18px] mt-5 underline">Register Partner</div>
</div>
        </div>
      
      <CardSlider/>
    </div>
  )
}

export default SupportedCompainies
