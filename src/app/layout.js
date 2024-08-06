import "./globals.css";

import Layout from "../components/_Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rabeh</title>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
