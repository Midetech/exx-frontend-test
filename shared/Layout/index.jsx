import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, handleClick }) => {
  return (
    <div className="m-auto overflow-hidden">
      <Header handleClick={handleClick} />
      <main className="m-auto py-7 px-5 lg:py-7 lg:px-7 xl:py-6 xl:px-20 3xl:bg-transparent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
