import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, locale }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
};

export default Layout;
