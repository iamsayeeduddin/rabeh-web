import "./globals.css";
import Layout from "../../components/_Layout";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);
  return (
    <html lang="en">
      <head>
        <title>Rabeh</title>
        <link rel="icon" type="image/x-icon" href="/assets/rabeh-icon.ico" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
          <ToastContainer position="bottom-center" />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId={"G-550WGYWGEQ"} />
    </html>
  );
}
