import React from 'react'
import Hero from '../components/HeroSection';
const page = () => {
  return (
    <div>
        <Hero
        subtitle="Investing opportunities"
        title="Unleash Investment and grow businesses"
        description="An innovative platform for Crowdfunding, Crowd-investing, and Exchange platform that utilizes advanced technologies."
        button1Text="Get Started"
        button1Link="/get-started"
        button2Text="Opportunities"
        button2Link="/opportunities"
        svgImage="/illustration.svg" 
        titleColor="text-secoundary"
        titleSize="text-5xl"
        imageWidth="w-auto"
        imageHeight="h-auto"
      />
    </div>
  )
}

export default page
