import React from 'react'
import Hero from '../components/HeroSection';
import TrustedBy from '../components/TrustedBy';
import InvestmentOpportunities from '@/components/InvestmentOpportunities';
const page = () => {
  return (
    <div>
        <Hero
        subtitle="Investing opportunities"
        title={<>
          Unleash <br />
          Investment and <br />
          grow <br />
          businesses
        </>}
        description="An innovative platform for Crowdfunding, Crowd-investing, and Exchange platform that utilizes advanced technologies."
        button1Text="Get Started"
        button1Link="/get-started"
        button2Text="Opportunities"
        button2Link="/opportunities"
        svgImage="illustration.png" 
        titleColor="text-secoundary"
        titleSize="text-[60px]"
        imageWidth="w-auto  "
        imageHeight="h-auto"
      />
     <TrustedBy />
     <InvestmentOpportunities/>
          

    </div>
  )
}

export default page
