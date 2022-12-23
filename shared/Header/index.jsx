/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import logo from "../../public/assets/exx-logo.svg";
import globe from "../../public/assets/globe.svg";
import selector from "../../public/assets/selector.svg";
import arrowPointer from "../../public/assets/arrow.svg";
import Head from "next/head";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const handleToggle = () => {
    setActive(!active);
  };
  React.useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "unset";
    };
  }, [active]);
  return (
    <div
      className={` ${
        active ? "bg-[#CEF2FE] " : ""
      } font-DmSans overflow-hidden lg:bg-white flex items-center justify-between py-7 px-5 lg:py-7 lg:px-7 xl:py-6 xl:px-20 3xl:bg-transparent flex-col lg:flex-row w-full`}
    >
      <Head>
        <link rel="icon" href="https://exx.network/favicon.ico" />
      </Head>

      <div className="self-center flex justify-between px-2 lg:px-0  lg:w-screen w-full">
        <img
          className="w-[75px] lg:w-28 "
          src="/assets/exx-logo.svg"
          alt="exx network"
        />
        <div
          className="outline-none-right-3 lg:hidden flex items-start relative z-999"
          onClick={handleToggle}
          aria-label="toggle button"
        >
          {active ? (
            <svg
              className="transition duration-[all, 0.4s]"
              width="20"
              height="29"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0022 15L27.2359 27.2337M2.76855 27.2337L15.0022 15L2.76855 27.2337ZM27.2359 2.76633L14.9999 15L27.2359 2.76633ZM14.9999 15L2.76855 2.76633L14.9999 15Z"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="transition duration-[all, 0.4s]"
              width="20"
              height="29"
              viewBox="0 0 37 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.94971 2.9498H34.9497"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.94971 14.9498H34.9497"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.94971 26.9498H34.9497"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <nav
        className={`${
          active ? "min-h-screen  px-2 py-10 overflow-hidden " : "hidden"
        } lg:flex lg:min-h-0 gap-x-5 xl:gap-x-12  lg:w-screen w-full`}
      >
        <ul className="flex gap-x-12 xl:gap-x-12 lg:items-center flex-col lg:flex-row">
          <li>
            About{" "}
            <div class="lg:hidden my-5 border-t border-[#0000001C] w-full"></div>
          </li>
          <li>
            Developers
            <div class="lg:hidden my-5 border-t border-[#0000001C] w-full"></div>
          </li>
          <li>
            Blog
            <div class="lg:hidden my-5 border-t border-[#0000001C] w-full"></div>
          </li>
          <li>
            <button className="outline-none flex gap-x-3 items-center">
              <Image src={globe} alt="exx network" />
              <p>EN</p>
              <Image src={selector} alt="exx network" />
            </button>
            <div class="lg:hidden my-5 border-t border-[#0000001C] w-full"></div>
          </li>
          <li>
            <button className="lg:w-[197px] w-full lg:h-[54px] h-[64px] rounded-[10px] bg-[#174AFF] text-white capitalize disabled:opacity-60 flex gap-x-4 items-center justify-center">
              <p>Connect Wallet</p>
              <Image src={arrowPointer} alt="exx network" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
