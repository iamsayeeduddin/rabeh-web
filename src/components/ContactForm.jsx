import React from 'react'
import useFonts from "@/utils/useFonts";

const ContactForm = () => {
    const fonts = useFonts()
  return (
    <section className="flex flex-col items-center gap-4 my-24 p-5 md:p-0">
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
  );
}

export default ContactForm
