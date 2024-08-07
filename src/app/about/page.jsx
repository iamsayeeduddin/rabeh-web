import CardSlider from "@/components/CardSlider";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import SupportedCompainies from "@/components/SupportedCompainies";
import TitleHead from "@/components/TitleHead";
import useFonts from "@/utils/useFonts";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import ClickTabs from "./ClickTabs";

const Page = () => {
  const fonts = useFonts();
  const cards = [
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 1",
      issueNumber: "28990",
      amount: "60,897.34",
      daysLeft: "29",
      progress: 70,
      annualReturn: "+3,50%",
      returnOnInvestment: "+3,50%",
      dueDate: "12/2/2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 2",
      issueNumber: "28991",
      amount: "50,897.34",
      daysLeft: "20",
      progress: 60,
      annualReturn: "+3,60%",
      returnOnInvestment: "+3,60%",
      dueDate: "10/2/2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 3",
      issueNumber: "28992",
      amount: "70,897.34",
      daysLeft: "25",
      progress: 80,
      annualReturn: "+3,70%",
      returnOnInvestment: "+3,70%",
      dueDate: "11/2/2024",
    },
    {
      logoSrc: "/Avatar.png",
      projectName: "Mohami Project 4",
      issueNumber: "28992",
      amount: "70,897.34",
      daysLeft: "25",
      progress: 80,
      annualReturn: "+3,70%",
      returnOnInvestment: "+3,70%",
      dueDate: "11/2/2024",
    },
  ];

  const team = [
    {
      name: "Mohammed Alsolami",
      title: "Founder & CEO",
      img: "/assets/mohd_alosaimi.png",
    },
    {
      name: "Mohammed Alomar",
      title: "Board Member",
      img: "/assets/mohd_alomar.png",
    },
    {
      name: "Anas Alsalman",
      title: "Board Member",
      img: "/assets/anas_alsalman.png",
    },
    {
      name: "Houda Ahmed",
      title: "Head of Investment",
      img: "/assets/houda_ahmed.png",
    },
  ];

  return (
    <div>
      <TitleHead
        title={"About"}
        desc={
          "Welcome to RABEH, your comprehensive fintech platform designed to revolutionize the way businesses and investors connect. We specialize in crowdfunding and real-time ownership exchange systems, catering to all types of businesses and companies. Our mission is to facilitate the journey of entrepreneurs and business owners in accessing financial support and achieving success in their ventures."
        }
      />
      <section className="flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>About Rabeh</h5>
          <p>
            At RABEH, we believe in democratizing investment opportunities for everyone, regardless of location. Our platform offers a seamless
            investment experience for all segments of investors around the globe, providing access to successful and lucrative investment
            opportunities.
          </p>
        </div>
        <div className={"flex gap-6 pt-20 " + fonts.spaceG.className}>
          <div className="flex flex-col gap-4 max-w-xl px-10 py-14 bg-[#F9F9FB] rounded-3xl border border-[#0206171B]">
            <img src="/assets/logo_mini.png" className="pb-4" height={35} width={30} />
            <h5 className="font-medium text-2xl">Our Vision</h5>
            <p className="text-[#36364A]">
              To be the leading fintech platform that empowers businesses and investors through innovative, automated technologies, transforming the
              financial landscape and fostering entrepreneurial success in Saudi and MENA region and worldwide.
            </p>
          </div>
          <div className="flex flex-col gap-4 max-w-xl px-10 py-14 bg-[#7860DC] rounded-3xl text-white">
            <img src="/assets/logo_mini_light.png" className="pb-4" height={35} width={30} />
            <h5 className="font-medium text-2xl">Our Mission</h5>
            <p>
              To provide an advanced, secure, and efficient platform that simplifies the funding process for businesses and enhances the investment
              experience for investors. We aim to leverage artificial intelligence and a centralized blockchain network to automate financing,
              allocation, follow-up, and decision support processes.
            </p>
          </div>
        </div>
      </section>
      <section className={"flex flex-col items-center px-32 py-24 " + fonts.spaceG.className}>
        <div className="max-w-7xl">
          <div className="w-full space-y-4 pb-12">
            <h5 className="font-bold text-4xl">Why Choose Rabeh?</h5>
            <p className="max-w-xl text-lg">Discover our innovative features crafted to elevate your user journey and exceed your expectations.</p>
          </div>
          <div className="flex gap-6">
            <div className="max-w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-1.png" />
                Innovative Technology
              </span>
              <p className="text-sm text-[#525252]">
                We harness the power of artificial intelligence and blockchain to provide a seamless, secure, and efficient platform for both
                businesses and investors.
              </p>
            </div>
            <div className="max-w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-5.png" />
                Global Reach
              </span>
              <p className="text-sm text-[#525252]">
                Our platform is designed to accommodate investors and businesses from all over the world, providing access to a global pool of
                opportunities and resources.
              </p>
            </div>
            <div className="max-w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-4.png" />
                Entrepreneurial Support
              </span>
              <p className="text-sm text-[#525252]">
                We are committed to supporting entrepreneurs by providing the tools and resources needed to achieve financial success and growth.
              </p>
            </div>
            <div className="max-w-[300px] bg-[#F9F9FB] rounded-2xl p-6 space-y-3">
              <span className="flex gap-3 font-bold text-lg">
                <img src="/assets/icon-6.png" />
                Investor Empowerment
              </span>
              <p className="text-sm text-[#525252]">
                We empower investors by offering a diverse range of investment opportunities and the tools to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div className="max-w-7xl">
          <div className="flex justify-between w-full pb-12">
            <h5 className={"w-1/2 text-[#263238] font-bold text-4xl " + fonts.spaceG.className}>How it works</h5>
            <p className="text-lg text-[#667085]">
              It offers services for fundraising, equity exchange, and business enhancement, and facilitates funds and financing and all kinds of
              support before, during, and after services.{" "}
            </p>
          </div>
          <div className={"flex justify-between " + fonts.inter.className}>
            <div className="rounded-3xl drop-shadow-xl w-96 bg-white p-8 flex flex-col gap-4">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">For Entreprenuer</h5>
              <p className="text-[#667085]">
             Start by setting up your campaign on our platform, outlining your project’s objectives and funding requirements. Promote your campaign to attract and engage potential backers. Keep supporters updated with regular progress reports and use the funds raised to bring your vision to life.															
															

              </p>
              <span className={"pt-4 font-medium gap-2 items-center text-[#667085] flex " + fonts.spaceG.className}>
                Join Entreprenuership Community <FaChevronRight />
              </span>
            </div>
            <div className="rounded-3xl drop-shadow-xl w-96 bg-white p-8 flex flex-col gap-4">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">For Investors</h5>
              <p className="text-[#667085]">
              Enjoy personalized assistance and expert guidance from our dedicated support team, helping you navigate every step of your fundraising journey.

              </p>
              <span className={"pt-4 font-medium gap-2 items-center text-[#667085] flex " + fonts.spaceG.className}>
                Join Investors Hub <FaChevronRight />
              </span>
            </div>
            <div className="rounded-3xl drop-shadow-xl w-96 bg-white p-8 flex flex-col gap-4">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">For Consultants</h5>
              <p className="text-[#667085]">
      Join Rabeh to provide expert advice and support to entrepreneurs. Review and improve project proposals, offer strategic guidance to enhance campaign success, and connect with a network of entrepreneurs and investors to expand your professional opportunities.															
															

															

              </p>
              <span className={"pt-4 font-medium gap-2 items-center text-[#667085] flex " + fonts.spaceG.className}>
                Join Consultants Circles <FaChevronRight />
              </span>
            </div>
          </div>
        <ClickTabs/>
          
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div className="max-w-7xl py-24">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>Advanced Technologies</h5>
            <p className={"text-[#667085] " + fonts.inter.className}>
              Efficiently oversee your freelance workforce within a dedicated talent pool for enhanced productivity and streamlined collaboration
            </p>
          </div>
          <div className={"pt-24 gap-4 flex justify-between " + fonts.spaceG.className}>
            <div className="w-96 bg-[#FAFAFA] rounded-3xl p-6 flex flex-col gap-2">
              <img src="/assets/img-1.png" />
              <h5 className="font-bold text-2xl">Artificial Intelligence</h5>
              <p className="text-[#525252]">
                Our AI-driven system automates various processes, including financing, allocation, and follow-up, ensuring efficiency and accuracy.
              </p>
            </div>
            <div className="w-96 bg-[#FAFAFA] rounded-3xl p-6 flex flex-col gap-2">
              <img src="/assets/img-2.png" />
              <h5 className="font-bold text-2xl">Blockchain Security</h5>
              <p className="text-[#525252]">
                We utilize a centralized blockchain network to secure all transactions, providing transparency, speed, and security.
              </p>
            </div>
            <div className="w-96 bg-[#FAFAFA] rounded-3xl p-6 flex flex-col gap-2">
              <img src="/assets/img-3.png" />
              <h5 className="font-bold text-2xl">Decision Support Tools</h5>
              <p className="text-[#525252]">
                Our platform offers advanced tools to support decision-making for both businesses and investors, ensuring well-informed choices and
                successful outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div className="max-w-7xl py-24">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>Discover</h5>
            <p className={"text-[#667085] " + fonts.inter.className}>
              An innovative platform for Crowdfunding, Crowd-investing, and Exchange platform that utilizes advanced technologies
            </p>
          </div>
          <div className="pt-8 w-full flex justify-center">
            <div
              className={
                "mt-3 bg-[#F9FAFB] rounded-lg cursor-pointer w-fit px-1 py-3 font-semibold border border-[#EAECF0] " + fonts.urbanist.className
              }
            >
              <span className={`px-3 py-2 rounded-md ${true ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Just Launched</span>
              <span className={`px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Early Stage</span>
              <span className={`px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Late Stage</span>
              <span className={`px-3 py-2 rounded-md ${false ? "bg-white text-[#344054]" : "text-[#667085]"}`}>Completed Projects</span>
            </div>
          </div>
          <div className={"flex items-center justify-center pt-10 " + fonts.spaceG.className}>
            <CardSlider cards={cards} />
          </div>
        </div>
      </section>
      <SupportedCompainies />
      <section className="flex flex-col items-center">
        <div className="max-w-7xl flex flex-col items-center p-24">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>Meet Our Team</h5>
            <p className={"text-[#667085] max-w-3xl " + fonts.inter.className}>
              Our team is the driving force behind our innovative fintech platform. We are a diverse group of professionals with a shared passion for
              transforming the financial landscape and empowering businesses and investors. Get to know the dedicated individuals who make RABEH a
              success.
            </p>
          </div>
          <div className="flex justify-between gap-11 pt-16">
            {team.map((member, index) => (
              <div key={index + member.title} className={"flex px-10 flex-col justify-between items-center " + fonts.inter.className}>
                <img src={member.img} className="mb-5 w-24 h-24 rounded-full" />
                <h5 className="text-lg font-semibold">{member.name}</h5>
                <p className="text-[#6941C6]">{member.title}</p>
                <div className="flex space-x-4 text-[#98A2B3] pt-4">
                  <FaTwitter />
                  <FaLinkedin />
                  <FaFacebook />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#F9F9FB]">
        <StrategicPartnerships />
      </div>
    </div>
  );
};

export default Page;
