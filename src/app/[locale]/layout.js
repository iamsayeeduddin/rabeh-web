import { routing } from "@/i18n/routing";
import "./globals.css";
import Layout from "../../components/_Layout";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import { unstable_setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";

const arabicFont = localFont({
  src: [
    {
      path: "../ArbFONTS-Montserrat-Arabic-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../ArbFONTS-Montserrat-Arabic-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang="en">
      <head>
        <title>Rabeh</title>
        <link rel="icon" type="image/x-icon" href="/assets/rabeh-icon.ico" />
        <meta property="og:title" content="Rabeh" />
        <meta
          property="og:description"
          content="An innovative platform for Crowdfunding, Crowd-investing, and Exchange platform that utilizes advanced technologies."
        />
        <meta property="og:image" content="/public/assets/logo_mini.png" />
        <meta property="og:url" content="https://www.rabeh.sa" />
        <meta property="og:type" content="website" />
      </head>
      <body dir={locale === "en" ? "ltr" : "rtl"} className={locale === "en" ? "" : arabicFont.className}>
        <NextIntlClientProvider messages={messages}>
          <Layout locale={locale}>{children}</Layout>
          <ToastContainer position="bottom-center" pauseOnFocusLoss={false} autoClose={3000} />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId={"G-550WGYWGEQ"} />
    </html>
  );
}

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }
