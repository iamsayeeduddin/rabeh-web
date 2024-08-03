import React from 'react'
import Image from 'next/image';
const RestAssured = () => {
  return (
    <div className="flex flex-col md:flex-row bg-secondary text-white  ">
      <div className="flex-1 md:mr-8   pt-[128px] pb-[128px] pl-[80px] pr-[80px]">
        <h2 className="text-4xl font-bold mb-4 ">Rest Assured</h2>
        <p className=" mt-8">All Financing And Investment Campaigns In Rabeh Are Compatible With Islamic Sharia And Regulations</p>
        <div className="flex space-x-8 mt-[48px] ">
          <div className="text-start border-l-0 "> 
            <div className="text-3xl font-bold">132+</div>
            <div>Completed Projects<br></br> & Opportunities</div>
          </div>    
          <div className="text-start  pl-10 border-l-2 border-l-white">
            <div className="text-3xl font-bold">85</div>
            <div>Entrepreneurs</div>
          </div>
          <div className="text-start   pl-10 border-l-2 border-l-white">
            <div className="text-3xl font-bold">150M</div>
            <div>Investors</div>    
          </div>
        </div>
      </div>

      <div className="flex-1 h-[579px] bg-white p-8 md:p-16 mt-8 md:mt-0 relative ">
      <Image
          src='/image.png'
          alt="Investment Projects"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default RestAssured
