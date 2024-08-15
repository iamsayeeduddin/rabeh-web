import "./globals.css";
import Layout from "../components/_Layout";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rabeh</title>
        <link rel="icon" type="image/x-icon" href="/assets/rabeh-icon.ico" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId={"G-550WGYWGEQ"} />
    </html>
  );
}
