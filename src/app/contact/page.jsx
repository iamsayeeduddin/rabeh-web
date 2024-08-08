import React from "react";
import useFonts from "@/utils/useFonts";
import TitleHead from "@/components/TitleHead";
import SingleCard from "@/components/SingleCard";

const Page = () => {
  const fonts = useFonts();
  return (
    <div>
      <TitleHead title={"Contact us"} desc={"Rabeh is a revolutionary fintech application that redefines the travel experience."} />
      <section className="flex flex-col items-center gap-4">
        <p className={"font-medium text-[#6941C6] " + fonts.spaceG.className}>About us</p>
        <h1 className={"text-4xl font-bold " + fonts.urbanist.className}>We’re a distributed team</h1>
        <h3 className={"text-xl text-[#475467] " + fonts.urbanist.className}>We have offices and teams all around the world.</h3>
        <img src="/assets/map.png" alt="" className="w-full my-24 " />
      </section>
      <section className={"grid grid-cols-12 my-4 " + fonts.inter.className}>
        <SingleCard title={"Support"} subtitle={"Our friendly team is here to help."} link={"support@rabeh.sa"} />
        <SingleCard title={"Sales"} subtitle={"Questions or queries? Get in touch!"} link={"Sales@rabeh.sa"} />
        <SingleCard title={"Phone"} subtitle={"Mon-Fri from 8am to 5pm."} link={"+1(202)-656-5556"} />
      </section>
      <section className="my-24">
        <img src="/assets/map-2.png" alt="" className="w-full" />
      </section>
      <section className="flex flex-col items-center gap-4 my-24">
        <p className={"text-md text-primary font-bold " + fonts.spaceG.className}>Contact us</p>
        <h3 className={"text-4xl font-bold " + fonts.urbanist.className}>Get in touch</h3>
        <p className={"text-gray-500 " + fonts.urbanist.className}>We’d love to hear from you. Please fill out this form.</p>
        <form
          className="w-full max-w-lg mt-8"
          action="https://formspree.io/f/{your-form-id}" // replace {your-form-id} with your actual Formspree form ID
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                name="first-name"
                placeholder="Jane"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="last-name"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="text"
              name="phone"
              placeholder="+1 (202) 656-5556"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-message"
              name="message"
              rows="4"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <div className="flex items-center mb-6">
            <input className="mr-2 leading-tight" type="checkbox" id="privacy-policy" name="privacy-policy" required />
            <label className="block text-gray-500 font-bold" htmlFor="privacy-policy">
              <span className="text-sm">
                You agree to our friendly{" "}
                <a href="#" className="text-primary">
                  privacy policy
                </a>
                .
              </span>
            </label>
          </div>
          <div className="flex items-center">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Page;
