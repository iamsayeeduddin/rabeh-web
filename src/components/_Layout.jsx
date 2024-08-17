import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
