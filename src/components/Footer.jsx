import React from "react";
import Logo from "./Logo";
import { FaYoutube, FaInstagram, FaLinkedin, FaTimes, FaFacebook } from "react-icons/fa";
import useFonts from "@/utils/useFonts";

function Footer() {
  const fonts = useFonts();
  const secCert = [
    "/assets/norton_logo.png",
    "/assets/mcafee_logo.png",
    "/assets/w3c_logo.png",
    "/assets/ssl_logo.png",
    "/assets/pci_logo.png",
    "/assets/soc_logo.png",
  ];
  const paymentCert = [
    "/assets/mada_logo.png",
    "/assets/apay_logo.png",
    "/assets/gpay_logo.png",
    "/assets/paypal_logo.png",
    "/assets/mastercard_logo.png",
    "/assets/visa_logo.png",
    "/assets/stripe_logo.png",
    "/assets/amex_logo.png",
  ];
  return (
    <div className="py-16 px-36 bg-[url('/assets/bg-asset-1.png')] bg-right-top bg-no-repeat flex flex-col gap-16">
      <div className="max-w-6xl flex justify-between">
        <div className="max-w-80">
          <Logo />
          <p className={"pt-6 font-normal text-sm text-[#2C303B] " + fonts.urbanist.className}>
            Empowering Businesses. <br /> Connecting Investors. <br />
            Transforming Finance.
          </p>
        </div>
        <div>
          <ul className={"text-[#2C303B] font-medium flex flex-col gap-3 " + fonts.urbanist.className}>
            <li className={"text-[#392E69] font-bold text-sm pb-4 " + fonts.spaceG.className}>Company</li>
            <li>About us</li>
            <li>Opportunities</li>
            <li>Investments</li>
            <li>Partnerships</li>
            <li>Public Relations</li>
            <li>Knowledge Hub</li>
          </ul>
        </div>
        <div>
          <ul className={"text-[#2C303B] font-medium flex flex-col gap-3 " + fonts.urbanist.className}>
            <li className={"text-[#392E69] font-bold text-sm pb-4 " + fonts.spaceG.className}>Fundraising</li>
            <li>Investment</li>
            <li>Business</li>
            <li>Partner</li>
            <li>Regulations</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div className="max-w-80">
          <ul className={"text-[#2C303B] flex flex-col gap-4 " + fonts.urbanist.className}>
            <li className="text-[#392E69] font-semibold">Policy</li>
            <li>
              Rabeh Financial Company is under the permit procedures of the Capital Market Authority and under the supervision of the Central Bank of
              Saudi Arabia to test its innovative products in the experimental environment (Sandbox) for more.{" "}
            </li>
            <li className={"text-[#7860DC] font-bold text-sm underline " + fonts.inter.className}>View Policy</li>
          </ul>
        </div>
      </div>
      <div className={"max-w-6xl gap-8 flex justify-between " + fonts.spaceG.className}>
        <div>
          <h5 className="font-medium">Security Certificates</h5>
          <div className="flex gap-3 pt-5">
            {secCert.map((item, index) => (
              <div key={index + "cert"} className="w-20 h-10 border-2 border-[#EAECF0] rounded-md flex justify-center items-center">
                <img src={item} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-medium">Flexible Payment options</h5>
          <div className="flex gap-3 pt-5">
            {paymentCert.map((item, index) => (
              <div
                key={index + "cert"}
                className={
                  "w-20 h-10 border-2 border-[#EAECF0] rounded-md flex justify-center items-center " + (item.includes("amex") ? "bg-[#1F72CD]" : "")
                }
              >
                <img src={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"flex justify-between " + fonts.inter.className}>
        <div>&#169; {new Date().getFullYear()} Rabeh. All right reserved</div>
        <div className="flex space-x-4 text-[#3A404E]">
          <FaYoutube />
          <FaInstagram />
          <FaLinkedin />
          <FaTimes />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}

export default Footer;
