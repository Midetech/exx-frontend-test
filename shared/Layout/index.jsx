import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="2xl:w-[1440px] m-auto overflow-hidden">
      <Header />
      <main className="2xl:w-[1440px] m-auto py-7 px-5 lg:py-7 lg:px-7 xl:py-6 xl:px-20 3xl:bg-transparent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
