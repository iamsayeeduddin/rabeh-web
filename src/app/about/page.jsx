import TitleHead from "@/components/TitleHead";
import useFonts from "@/utils/useFonts";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Page = () => {
  const fonts = useFonts();
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
                <img src="/assets/icon-1.png" />
                Innovative Technology
              </span>
              <p className="text-sm text-[#525252]">
                We harness the power of artificial intelligence and blockchain to provide a seamless, secure, and efficient platform for both
                businesses and investors.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer.
              </p>
              <span className={"pt-4 font-medium gap-2 items-center text-[#667085] flex " + fonts.spaceG.className}>
                Join Entreprenuership Community <FaChevronRight />
              </span>
            </div>
            <div className="rounded-3xl drop-shadow-xl w-96 bg-white p-8 flex flex-col gap-4">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">For Investors</h5>
              <p className="text-[#667085]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer.
              </p>
              <span className={"pt-4 font-medium gap-2 items-center text-[#667085] flex " + fonts.spaceG.className}>
                Join Investors Hub <FaChevronRight />
              </span>
            </div>
            <div className="rounded-3xl drop-shadow-xl w-96 bg-white p-8 flex flex-col gap-4">
              <img src="/assets/icon-2.png" height={84} width={84} />
              <h5 className="pt-4 font-bold text-2xl">For Consultants</h5>
              <p className="text-[#667085]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer.
              </p>
              <span className={"pt-4 font-medium gap-2 items-center text-[#667085] flex " + fonts.spaceG.className}>
                Join Consultants Circles <FaChevronRight />
              </span>
            </div>
          </div>
          <div className={"pt-16 " + fonts.manrope.className}>
            <div className={"flex text-center font-bold text-xl "}>
              <div
                className={`w-1/3 p-6 ${
                  true ? "bg-[#F9F8FD] border-t-2 border-[#7860DC] text-[#616B82]" : "text-[#7986A3] border-t-2 border-[#DCE4E8]"
                }`}
              >
                <h5>For Entrepreneur</h5>
              </div>
              <div
                className={`w-1/3 p-6 ${
                  false ? "bg-[#F9F8FD] border-t-2 border-[#7860DC] text-[#616B82]" : "text-[#7986A3] border-t-2 border-[#DCE4E8]"
                }`}
              >
                <h5>For Investors</h5>
              </div>
              <div
                className={`w-1/3 p-6 ${
                  false ? "bg-[#F9F8FD] border-t-2 border-[#7860DC] text-[#616B82]" : "text-[#7986A3] border-t-2 border-[#DCE4E8]"
                }`}
              >
                <h5>For Consultants</h5>
              </div>
            </div>
            <div className="pt-8 w-full flex">
              <div className="w-1/2">
                <div className="flex items-center p-6">
                  <img src="/assets/icon-3.png" />
                  <div className="pl-6">
                    <h5 className="text-[#616B82] font-bold text-2xl">Sign Up & Create a Profile</h5>
                    <p className="text-[#6C7278] font-medium">
                      offers a seamless and efficient platform that connects businesses and investors through cutting-edge technologies. Here&apos;s
                      how it works: For Businesses
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-6">
                  <img src="/assets/icon-3.png" />
                  <div className="pl-6">
                    <h5 className="text-[#616B82] font-bold text-2xl">Sign Up & Create a Profile</h5>
                    <p className="text-[#6C7278] font-medium">
                      offers a seamless and efficient platform that connects businesses and investors through cutting-edge technologies. Here&apos;s
                      how it works: For Businesses
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-6">
                  <img src="/assets/icon-3.png" />
                  <div className="pl-6">
                    <h5 className="text-[#616B82] font-bold text-2xl">Sign Up & Create a Profile</h5>
                    <p className="text-[#6C7278] font-medium">
                      offers a seamless and efficient platform that connects businesses and investors through cutting-edge technologies. Here&apos;s
                      how it works: For Businesses
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center p-6">
                  <img src="/assets/icon-3.png" />
                  <div className="pl-6">
                    <h5 className="text-[#616B82] font-bold text-2xl">Sign Up & Create a Profile</h5>
                    <p className="text-[#6C7278] font-medium">
                      offers a seamless and efficient platform that connects businesses and investors through cutting-edge technologies. Here&apos;s
                      how it works: For Businesses
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-6">
                  <img src="/assets/icon-3.png" />
                  <div className="pl-6">
                    <h5 className="text-[#616B82] font-bold text-2xl">Sign Up & Create a Profile</h5>
                    <p className="text-[#6C7278] font-medium">
                      offers a seamless and efficient platform that connects businesses and investors through cutting-edge technologies. Here&apos;s
                      how it works: For Businesses
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-6">
                  <img src="/assets/icon-3.png" />
                  <div className="pl-6">
                    <h5 className="text-[#616B82] font-bold text-2xl">Sign Up & Create a Profile</h5>
                    <p className="text-[#6C7278] font-medium">
                      offers a seamless and efficient platform that connects businesses and investors through cutting-edge technologies. Here&apos;s
                      how it works: For Businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </section>
    </div>
  );
};

export default Page;
