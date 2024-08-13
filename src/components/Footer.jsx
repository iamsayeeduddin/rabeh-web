import React from "react";
import Logo from "./Logo";
import { FaYoutube, FaInstagram, FaLinkedin, FaTimes, FaFacebook } from "react-icons/fa";
import useFonts from "@/utils/useFonts";
import Link from "next/link";

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
    <div className="md:py-16 md:px-36 bg-[url('/assets/bg-asset-1.png')] bg-right-top bg-no-repeat flex flex-col border-b-8 border-b-[#2C303B]  gap-16 p-5">
      <div className="md:max-w-6xl flex flex-col md:flex-row items-center md:items-start  md:justify-between ">
        <div className="max-w-80 self-center md:self-start text-center md:text-start">
          <Logo width={250} height={100} />
          <p className={"pt-8 md:pt-6 font-normal text-base text-[#2C303B] " + fonts.urbanist.className}>
            Empowering Businesses. <br /> Connecting Investors. <br />
            Transforming Finance.
          </p>
        </div>
        <div className="flex justify-center md:justify-start text-center md:text-left md:flex-row gap-10">
          <div className="mt-5 md:mt-0">
            <ul className={"text-[#2C303B] font-medium flex flex-col gap-3 " + fonts.urbanist.className}>
              <li className={"text-[#392E69] font-bold text-lg md:text-sm pb-2 md:pb-4 " + fonts.spaceG.className}>Company</li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/opportunities">Opportunities</Link>
              </li>
              <li>
                <Link href="/under-construction">Investments</Link>
              </li>
              <li>
                <Link href={"/under-construction"}>Partnerships</Link>
              </li>
              <li>
                <Link href={"/under-construction"}>Public Relations</Link>
              </li>
              <li>
                <Link href={"/under-construction"}>Knowledge Hub</Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 md:mt-0">
            <ul className={"text-[#2C303B] font-medium flex flex-col gap-3 " + fonts.urbanist.className}>
              <li className={"text-[#392E69] font-bold text-lg md:text-sm pb-2 md:pb-4 " + fonts.spaceG.className}>Fundraising</li>
              <li>
                <Link href={"/under-construction"}>Investment</Link>
              </li>
              <li>
                <Link href={"/business"}>Business</Link>
              </li>
              <li>
                <Link href={"/under-construction"}>Partner</Link>
              </li>
              <li>
                <Link href={"/under-construction"}>Regulations</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/under-construction"}>Cookies Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-80 mt-7 md:mt-0 ">
          <ul className={"text-[#2C303B] flex flex-col items-center md:justify-start gap-4 " + fonts.urbanist.className}>
            <li className="text-[#392E69] text-lg font-semibold">Policy</li>
            <li>
              Rabeh Financial Company is under the permit procedures of the Capital Market Authority and under the supervision of the Central Bank of
              Saudi Arabia to test its innovative products in the experimental environment (Sandbox) for more.{" "}
            </li>
            <li className={"text-[#7860DC] font-bold text-sm underline " + fonts.inter.className}>
              <Link href={"/under-construction"}>View Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={"max-w-6xl gap-8 justify-between flex flex-col md:flex-row " + fonts.spaceG.className}>
        <div>
          <h5 className="font-medium text-center md:text-left">Security Certificates</h5>
          <div className="flex gap-3 pt-5">
            {secCert.map((item, index) => (
              <div key={index + "cert"} className="md:w-20 md:h-10 border-2 border-[#EAECF0] rounded-md flex justify-center items-center">
                <img src={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <h5 className="font-medium text-center md:text-left">Flexible Payment options</h5>
          <div className="flex gap-3 pt-5">
            {paymentCert.map((item, index) => (
              <div
                key={index + "cert"}
                className={
                  "md:w-20 md:h-10 border-2 border-[#EAECF0] rounded-md flex justify-center items-center " +
                  (item.includes("amex") ? "bg-[#1F72CD]" : "")
                }
              >
                <img src={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"flex flex-col md:flex-row items-center md:items-start justify-between " + fonts.inter.className}>
        <div>&#169; {new Date().getFullYear()} Rabeh. All right reserved</div>
        <div className="flex space-x-4 text-[#3A404E] mt-5 md:mt-0">
          <Link href="https://www.instagram.com/rabehfinance/" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/RABEHclub" target="_blank">
            <FaFacebook />
          </Link>
          <Link href="https://www.linkedin.com/company/rabeh-ksa/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="https://x.com/RabehFinance" target="_blank">
            <FaYoutube />
          </Link>
          <Link href="https://x.com/RabehFinance" target="_blank">
            <FaTimes />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
