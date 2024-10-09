"use client";
import { Link } from "@/i18n/routing";
import Logo from "./Logo";
import { FaYoutube, FaInstagram, FaLinkedin, FaBars, FaTimes, FaFacebook } from "react-icons/fa";
import useFonts from "@/utils/useFonts";
import { CiLogout } from "react-icons/ci";
import { useEffect, useState } from "react";
// import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const Navbar = () => {
  const fonts = useFonts();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState();
  const [lang, setLang] = useState("en");
  const path = usePathname();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useRouter();
  const params = useParams();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    setLang(window.location.pathname.split("/")[1]);
  }, [locale, path]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleLinkClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  const handleLangChange = (lang) => {
    router.replace(pathname, { locale: lang });
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [path]);

  const handleLogout = () => {
    if (user?._id) {
      localStorage.removeItem("user");
      setUser({});
      if (path !== "/en" && path !== "/ar") {
        window.location.href = "/";
      } else {
        window.location.reload();
      }
    }
  };

  const sections = [
    {
      title: t("overview_title"),
      items: [
        {
          title: t("business_services_title"),
          description: t("business_services_description"),
          icon: (
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 6.5V4.2C19 3.0799 19 2.51984 18.782 2.09202C18.5903 1.7157 18.2843 1.40974 17.908 1.21799C17.4802 1 16.9201 1 15.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V13.8C1 14.9201 1 15.4802 1.21799 15.908C1.40973 16.2843 1.71569 16.5903 2.09202 16.782C2.51984 17 3.07989 17 4.2 17L15.8 17C16.9201 17 17.4802 17 17.908 16.782C18.2843 16.5903 18.5903 16.2843 18.782 15.908C19 15.4802 19 14.9201 19 13.8V11.5M14 9C14 8.53535 14 8.30302 14.0384 8.10982C14.1962 7.31644 14.8164 6.69624 15.6098 6.53843C15.803 6.5 16.0353 6.5 16.5 6.5H18.5C18.9647 6.5 19.197 6.5 19.3902 6.53843C20.1836 6.69624 20.8038 7.31644 20.9616 8.10982C21 8.30302 21 8.53535 21 9C21 9.46466 21 9.69698 20.9616 9.89018C20.8038 10.6836 20.1836 11.3038 19.3902 11.4616C19.197 11.5 18.9647 11.5 18.5 11.5H16.5C16.0353 11.5 15.803 11.5 15.6098 11.4616C14.8164 11.3038 14.1962 10.6836 14.0384 9.89018C14 9.69698 14 9.46465 14 9Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("marketplace_integration_title"),
          description: t("marketplace_integration_description"),
          icon: (
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.5 10.5C6.5 10.5 7.8125 12 10 12C12.1875 12 13.5 10.5 13.5 10.5M12.75 5.5H12.76M7.25 5.5H7.26M5 16V18.3355C5 18.8684 5 19.1348 5.10923 19.2716C5.20422 19.3906 5.34827 19.4599 5.50054 19.4597C5.67563 19.4595 5.88367 19.2931 6.29976 18.9602L8.68521 17.0518C9.17252 16.662 9.41617 16.4671 9.68749 16.3285C9.9282 16.2055 10.1844 16.1156 10.4492 16.0613C10.7477 16 11.0597 16 11.6837 16H14.2C15.8802 16 16.7202 16 17.362 15.673C17.9265 15.3854 18.3854 14.9265 18.673 14.362C19 13.7202 19 12.8802 19 11.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12C1 12.93 1 13.395 1.10222 13.7765C1.37962 14.8117 2.18827 15.6204 3.22354 15.8978C3.60504 16 4.07003 16 5 16ZM13.25 5.5C13.25 5.77614 13.0261 6 12.75 6C12.4739 6 12.25 5.77614 12.25 5.5C12.25 5.22386 12.4739 5 12.75 5C13.0261 5 13.25 5.22386 13.25 5.5ZM7.75 5.5C7.75 5.77614 7.52614 6 7.25 6C6.97386 6 6.75 5.77614 6.75 5.5C6.75 5.22386 6.97386 5 7.25 5C7.52614 5 7.75 5.22386 7.75 5.5Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("partner_app_title"),
          description: t("partner_app_description"),
          icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 13.6667C7.5 14.9553 8.54467 16 9.83333 16H12C13.3807 16 14.5 14.8807 14.5 13.5C14.5 12.1193 13.3807 11 12 11H10C8.61929 11 7.5 9.88071 7.5 8.5C7.5 7.11929 8.61929 6 10 6H12.1667C13.4553 6 14.5 7.04467 14.5 8.33333M11 4.5V6M11 16V17.5M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("partner_portal_title"),
          description: t("partner_portal_description"),
          icon: (
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 14C1 14 2 13 5 13C8 13 10 15 13 15C16 15 17 14 17 14V2C17 2 16 3 13 3C10 3 8 1 5 1C2 1 1 2 1 2L1 21"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: t("financial_management_title"),
      items: [
        {
          title: t("accounts_receivable_title"),
          description: t("accounts_receivable_description"),
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("autopay_title"),
          description: t("autopay_description"),
          icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.5 21V16M3.5 6V1M1 3.5H6M1 18.5H6M12 2L10.2658 6.50886C9.98381 7.24209 9.84281 7.60871 9.62353 7.91709C9.42919 8.1904 9.1904 8.42919 8.91709 8.62353C8.60871 8.8428 8.24209 8.98381 7.50886 9.26582L3 11L7.50886 12.7342C8.24209 13.0162 8.60871 13.1572 8.91709 13.3765C9.1904 13.5708 9.42919 13.8096 9.62353 14.0829C9.84281 14.3913 9.98381 14.7579 10.2658 15.4911L12 20L13.7342 15.4911C14.0162 14.7579 14.1572 14.3913 14.3765 14.0829C14.5708 13.8096 14.8096 13.5708 15.0829 13.3765C15.3913 13.1572 15.7579 13.0162 16.4911 12.7342L21 11L16.4911 9.26582C15.7579 8.98381 15.3913 8.8428 15.0829 8.62353C14.8096 8.42919 14.5708 8.1904 14.3765 7.91709C14.1572 7.60871 14.0162 7.24209 13.7342 6.50886L12 2Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("customized_disbursements_title"),
          description: t("customized_disbursements_description"),
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.5 22H14.5M8 2H16M12 5V2M4 12H20M17 19L18.5 22M7 19L5.5 22M8.5 15.5H8.51M15.5 15.5H15.51M8.8 19H15.2C16.8802 19 17.7202 19 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V9.8C20 8.11984 20 7.27976 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C17.7202 5 16.8802 5 15.2 5H8.8C7.11984 5 6.27976 5 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4 7.27976 4 8.11984 4 9.8V14.2C4 15.8802 4 16.7202 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C6.27976 19 7.11984 19 8.8 19ZM9 15.5C9 15.7761 8.77614 16 8.5 16C8.22386 16 8 15.7761 8 15.5C8 15.2239 8.22386 15 8.5 15C8.77614 15 9 15.2239 9 15.5ZM16 15.5C16 15.7761 15.7761 16 15.5 16C15.2239 16 15 15.7761 15 15.5C15 15.2239 15.2239 15 15.5 15C15.7761 15 16 15.2239 16 15.5Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("multiple_disbursement_title"),
          description: t("multiple_disbursement_description"),
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18.5H15M7 15H17M5 2H19C20.1046 2 21 2.99492 21 4.22222V19.7778C21 21.0051 20.1046 22 19 22H5C3.89543 22 3 21.0051 3 19.7778V4.22222C3 2.99492 3.89543 2 5 2ZM11.9976 6.21194C11.2978 5.4328 10.1309 5.22321 9.25414 5.93667C8.37738 6.65013 8.25394 7.84299 8.94247 8.6868C9.631 9.53061 11.9976 11.5 11.9976 11.5C11.9976 11.5 14.3642 9.53061 15.0527 8.6868C15.7413 7.84299 15.6329 6.64262 14.7411 5.93667C13.8492 5.23072 12.6974 5.4328 11.9976 6.21194Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: t("financial_services_title"),
      items: [
        {
          title: t("lending_features_title"),
          description: t("lending_features_description"),
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 13.3744C19.5318 14.0688 22 15.6547 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 15.6547 4.46819 14.0688 8 13.3744M12 17V3L17.3177 6.27244C17.7056 6.51114 17.8995 6.63049 17.9614 6.78085C18.0154 6.912 18.0111 7.0599 17.9497 7.18771C17.8792 7.33426 17.6787 7.44222 17.2777 7.65815L12 10.5"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("payments_solutions_title"),
          description: t("payments_solutions_description"),
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.9996 11.5C20.9996 16.1944 17.194 20 12.4996 20C11.4228 20 10.3928 19.7998 9.44478 19.4345C9.27145 19.3678 9.18478 19.3344 9.11586 19.3185C9.04807 19.3029 8.999 19.2963 8.92949 19.2937C8.85881 19.291 8.78127 19.299 8.62619 19.315L3.50517 19.8444C3.01692 19.8948 2.7728 19.9201 2.6288 19.8322C2.50337 19.7557 2.41794 19.6279 2.3952 19.4828C2.36909 19.3161 2.48575 19.1002 2.71906 18.6684L4.35472 15.6408C4.48942 15.3915 4.55677 15.2668 4.58728 15.1469C4.6174 15.0286 4.62469 14.9432 4.61505 14.8214C4.60529 14.6981 4.55119 14.5376 4.443 14.2166C4.15547 13.3636 3.99962 12.45 3.99962 11.5C3.99962 6.80558 7.8052 3 12.4996 3C17.194 3 20.9996 6.80558 20.9996 11.5Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("support_title"),
          description: t("support_description"),
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          title: t("through_partners_title"),
          description: t("through_partners_description"),
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.9996 11.5C20.9996 16.1944 17.194 20 12.4996 20C11.4228 20 10.3928 19.7998 9.44478 19.4345C9.27145 19.3678 9.18478 19.3344 9.11586 19.3185C9.04807 19.3029 8.999 19.2963 8.92949 19.2937C8.85881 19.291 8.78127 19.299 8.62619 19.315L3.50517 19.8444C3.01692 19.8948 2.7728 19.9201 2.6288 19.8322C2.50337 19.7557 2.41794 19.6279 2.3952 19.4828C2.36909 19.3161 2.48575 19.1002 2.71906 18.6684L4.35472 15.6408C4.48942 15.3915 4.55677 15.2668 4.58728 15.1469C4.6174 15.0286 4.62469 14.9432 4.61505 14.8214C4.60529 14.6981 4.55119 14.5376 4.443 14.2166C4.15547 13.3636 3.99962 12.45 3.99962 11.5C3.99962 6.80558 7.8052 3 12.4996 3C17.194 3 20.9996 6.80558 20.9996 11.5Z"
                stroke="#00B8D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-primary">
        <div className="flex justify-between items-center py-2 px-4 mx-auto md:w-[1440px] m-h-[88px] border-b">
          <div className="flex ltr:space-x-4 rtl:space-x-reverse rtl:space-x-4 text-white">
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
          <div
            className={
              "flex items-center ltr:space-x-4 rtl:space-x-reverse rtl:space-x-4 text-white " + (locale === "en" ? fonts.spaceG.className : "")
            }
          >
            <div className="relative inline-block">
              <select className="bg-primary text-white border-none rounded px-2 py-1">
                <option value="ar">🇸🇦 KSA</option>
                <option value="en">🇺🇸 USA</option>
              </select>
            </div>
            <div className="relative inline-block">
              <select className="bg-primary text-white border-none rounded px-2 py-1" value={lang} onChange={(e) => handleLangChange(e.target.value)}>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between py-4 px-4 mx-auto md:w-[1440px] md:h-[88px]">
          <div className="flex items-center ltr:space-x-6 rtl:space-x-reverse rtl:space-x-6">
            <Link href="/" onClick={handleLinkClick}>
              <Logo />
            </Link>

            <div className={"hidden md:flex ltr:space-x-6 rtl:space-x-reverse rtl:space-x-6 text-sm text-[#2C303B] " + fonts.inter.className}>
              <Link href="/" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                {t("home")}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary">
                {t("about")}
              </Link>
              <div className="relative">
                <button onClick={toggleDropdown} className="text-gray-700 hover:text-primary flex items-center">
                  <Link href="/opportunities" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                    {t("opportunities")}
                  </Link>
                  <span className={`ml-2 transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-primary">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#3A404E" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>

              {dropdownOpen && (
                <div className="flex md:hidden p-5 md:py-5 md:px-28 bg-[url('/assets/logo-ddwon.png')] bg-right-bottom bg-no-repeat">
                  <div className={"grid grid-cols-1  md:grid-cols-4 gap-8 text-left " + fonts.urbanist.className}>
                    {sections.map((section, index) => (
                      <div key={index}>
                        <h3 className={"font-semibold text-lg mb-4 text-[#004677]"}>{section.title}</h3>
                        <div className="space-y-6">
                          {section.items.map((item, itemIndex) => (
                            <div className="flex items-start gap-4 hover:text-[#00BFB2] cursor-pointer" key={itemIndex}>
                              <div className="mt-2">{item.icon}</div>
                              <div>
                                <h4 className={"font-semibold mb-2 " + (locale === "en" ? fonts.spaceG.className : "")}>{item.title}</h4>
                                <p className={"mt-5 " + fonts.inter.className}>{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link href="/business" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                {t("business")}
              </Link>
              <Link href="/investor" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                {t("investors")}
              </Link>
              <Link href="/help" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                {t("help")}
              </Link>
              <Link href="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                {t("contactUs")}
              </Link>
              <Link href="/careers" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                {t("careers")}
              </Link>
            </div>
          </div>
          <div className={"hidden md:flex items-center space-x-4 font-medium text-sm " + (locale === "en" ? fonts.spaceG.className : "")}>
            {!user?._id ? (
              <>
                <Link href="/login" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 rounded-lg px-4 py-2">
                  {t("signIn")}
                </Link>
                <Link href="/sign-up" onClick={handleLinkClick} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">
                  {t("getStarted")}
                </Link>
              </>
            ) : (
              <span className="flex items-center justify-center gap-4">
                <p className="rtl:text-right">
                  {t("welcome")}, {user?.name || "User"}!
                </p>
                <div
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-white cursor-pointer"
                  onClick={() => router.push("/my-account")}
                >
                  <p>{user?.name?.charAt(0).toUpperCase() || "U"}</p>
                </div>
                <CiLogout className="hover:text-primary text-lg" onClick={handleLogout} />
              </span>
            )}
          </div>

          <div className="md:hidden flex flex-col">
            <button onClick={toggleMenu} className="text-primary hover:text-gray-900">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white px-4 pt-4 pb-3 space-y-1 flex flex-col">
            <Link href="/" onClick={handleLinkClick} className="text-gray-700 hover:text-primary py-2">
              {t("home")}
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-primary py-2">
              {t("about")}
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="text-gray-700 hover:text-primary flex items-center justify-between w-full py-2">
                <Link href="/opportunities" onClick={handleLinkClick} className="text-gray-700 hover:text-primary">
                  {t("opportunities")}
                </Link>
                <span className={`ml-2 transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:text-primary">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#3A404E" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
            {dropdownOpen && (
              <div className={"grid grid-cols-1 md:grid-cols-4 gap-8 text-left " + fonts.urbanist.className}>
                {sections.map((section, index) => (
                  <div key={index}>
                    <h3 className={"font-semibold text-lg mb-4 text-[#004677]"}>{section.title}</h3>
                    <div className="space-y-6">
                      {section.items.map((item, itemIndex) => (
                        <div className="flex items-start gap-4 hover:text-[#00BFB2] cursor-pointer" key={itemIndex}>
                          <div className="mt-2">{item.icon}</div>
                          <div>
                            <h4 className={"font-semibold mb-2 " + (locale === "en" ? fonts.spaceG.className : "")}>{item.title}</h4>
                            <p className={"mt-5 " + fonts.inter.className}>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <Link href="/business" onClick={handleLinkClick} className="text-gray-700 hover:text-primary py-2">
              {t("business")}
            </Link>
            <Link href="/investor" onClick={handleLinkClick} className="text-gray-700 hover:text-primary py-2">
              {t("investors")}
            </Link>
            <Link href="/help" onClick={handleLinkClick} className="text-gray-700 hover:text-primary py-2">
              {t("help")}
            </Link>
            <Link href="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-primary py-2">
              {t("contactUs")}
            </Link>
            <Link href="/careers" onClick={handleLinkClick} className="text-gray-700 hover:text-primary py-2">
              {t("careers")}
            </Link>
            <Link href="/login" onClick={handleLinkClick} className="text-gray-700 hover:text-gray-900 rounded-lg px-4 py-2 border-2">
              {t("signIn")}
            </Link>
            <Link href="/sign-up" onClick={handleLinkClick} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">
              {t("getStarted")}
            </Link>
          </div>
        )}

        {dropdownOpen && (
          <div className="hidden md:flex p-5 md:py-5 md:px-28 bg-[url('/assets/logo-ddwon.png')] bg-right-bottom bg-no-repeat">
            <div className={"grid grid-cols-1  md:grid-cols-4 gap-8 text-left " + fonts.urbanist.className}>
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className={"font-semibold text-lg mb-4 text-[#004677]"}>{section.title}</h3>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div className="flex items-start gap-4 hover:text-[#00BFB2] cursor-pointer" key={itemIndex}>
                        <div className="mt-2">{item.icon}</div>
                        <div>
                          <h4 className={"font-semibold mb-2 " + (locale === "en" ? fonts.spaceG.className : "")}>{item.title}</h4>
                          <p className={"mt-5 " + fonts.inter.className}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
