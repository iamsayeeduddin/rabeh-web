import CardSlider from "@/components/CardSlider";
import Newsletter from "@/components/Newsletter";
import SupportedCompainies from "@/components/SupportedCompainies";
import TitleHead from "@/components/TitleHead";
import TrustedBy from "@/components/TrustedBy";
import UnleashInvestment from "@/components/UnleashInvestment";
import useFonts from "@/utils/useFonts";
import Link from "next/link";

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
  return (
    <div>
      <TitleHead title={"Opportunities"} desc={"Rabeh is a revolutionary fintech application that redefines the travel experience. "} />
      <section className="flex flex-col items-center">
        <div className="max-w-7xl py-28">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>Highlighted projects</h5>
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
      <section className={"flex flex-col items-center " + fonts.plusJakarta.className}>
        <div className="max-w-7xl flex gap-10">
          <div className="max-w-96">
            <h5 className="font-bold text-4xl">Explore Projects</h5>
            <p className="text-[#0B0B0B] text-sm py-6">
              Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily
              build a page.
            </p>
            <div className={"flex space-x-4 " + fonts.spaceG.className}>
              <Link href={""} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light">
                Join Now
              </Link>
              <Link href={""} className="  text-black px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-200 ">
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-start gap-6 p-6 border border-[#E4E4E7] rounded-xl max-w-72">
              <img className="w-14 h-14 bg-[#004677] p-4 rounded-full" src="/assets/building-06.png" />
              <h5 className="font-bold">Startups</h5>
              <p className={"text-[#12141D] text-sm " + fonts.inter.className}>Create beautiful landing pages with Rareblocks that converts.</p>
            </div>
            <div className="flex flex-col items-start gap-6 p-6 border border-[#E4E4E7] rounded-xl max-w-72">
              <img className="w-14 h-14 bg-[#004677] p-4 rounded-full" src="/assets/chart-breakout-circle.png" />
              <h5 className="font-bold">Businesses</h5>
              <p className={"text-[#12141D] text-sm " + fonts.inter.className}>Create beautiful landing pages with Rareblocks that converts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div className="max-w-7xl py-28">
          <div className="text-center">
            <h5 className={"text-[#263238] font-bold text-4xl pb-4 " + fonts.spaceG.className}>New projects</h5>
          </div>

          <div className={"flex items-center justify-center pt-10 " + fonts.spaceG.className}>
            <CardSlider cards={cards} />
          </div>
        </div>
      </section>
      <UnleashInvestment />
      <SupportedCompainies />
      <TrustedBy />
      <div className="pb-24">
        <Newsletter />
      </div>
    </div>
  );
};

export default Page;
