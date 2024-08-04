import React from 'react'
import TitleHead from '@/components/TitleHead'
import WhyRabeh from '@/components/WhyRabeh'
import OurServices from '@/components/OurServices'
import UnleashInvestment from '@/components/UnleashInvestment'
import Newsletter from '@/components/Newsletter'
import Brands from '@/components/Brands'
const page = () => {
  return (
    <div>

      <TitleHead
        title={"Investor"}
        desc={
          "Rabeh is a revolutionary fintech application that redefines the travel experience."
        }
      />
      <WhyRabeh/>
      <OurServices/>
      <UnleashInvestment/>
     <Brands/>
      <Newsletter/>


    </div>  
  )
}

export default page
