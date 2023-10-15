import React from "react";
import Header from "./header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-w-[350px] bg-slate-200">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
