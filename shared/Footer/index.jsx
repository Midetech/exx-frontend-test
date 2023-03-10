/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="  font-SpaceGrotesk overflow-hidden lg:bg-white flex justify-center py-7 px-5 lg:py-7 lg:px-7 xl:py-6 xl:px-20 3xl:bg-transparent flex-col  w-full">
      <div className="flex  justify-center lg:flex-row flex-col">
        <div className="flex flex-col gap-y-4 pb-5">
          <img
            className="w-[99px] lg:w-28 lg:hidden block "
            src="/assets/exx-logo.svg"
            alt="exx network"
          />
          <p className="hidden lg:block text-[#1D2A65] lg:text-[24px] leading-[31px] font-[700]">
            EXX Blockchain
          </p>
          <p className="lg:w-[330px] lg:h-[54px] font-[400] lg:text-[18px] text-[14px] leading-[150%] text-[#596780]  font-DmSans w-[327px]">
            EXX builds on the efficacy of Ethereum, it is faster, powerful and
            more secured
          </p>
        </div>{" "}
        <div className="flex flex-row  flex-wrap lg:flex-nowrap justify-center lg:gap-x-[120px]  gap-y-[40px] w-full">
          <div className="flex flex-col gap-y-4 w-[50%] lg:w-auto  md:w-1/4">
            <p className="text-[#1D2A65] lg:text-[24px] leading-[31px] font-[700]">
              General
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              About
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Contact us
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Brand Kits
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              New & Updates
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-[50%] lg:w-auto  md:w-1/4">
            <p className="text-[#1D2A65] lg:text-[24px] leading-[31px] font-[700]">
              Explore
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Documentation
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Block Explorer
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Github
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Community
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-[50%] lg:w-auto  md:w-1/4">
            <p className="text-[#1D2A65] lg:text-[24px] leading-[31px] font-[700]">
              Apply
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              {" "}
              Dev. Incubator{" "}
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Career
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Ambassador
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-[50%] lg:w-auto  md:w-1/4">
            <p className="text-[#1D2A65] lg:text-[24px] leading-[31px] font-[700]">
              Follow Us
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              {" "}
              Twitter{" "}
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Medium
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Telegram
            </p>
            <p className="text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
              Discord
            </p>
          </div>
        </div>
      </div>
      <div class="my-5 border-t border-[rgba(23, 74, 255, 0.13)] w-full  lg:mt-[40px]"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[22px]">
        <div className="flex items-center lg:gap-[32px] gap-[15px]">
          <p className="text-[12px] lg:text-[16px] leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
            Privacy Policy
          </p>

          <div className="border-r border-[rgba(23, 74, 255, 0.13)] hidden lg:block h-[27px]"></div>
          <p className="text-[12px] lg:text-[16px]  leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
            Terms & Conditions
          </p>

          <div className="border-r border-[rgba(23, 74, 255, 0.13)] hidden lg:block h-[27px]"></div>
          <p className="text-[12px] lg:text-[16px]  leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
            Disclaimer
          </p>
        </div>

        <p className="text-[12px] lg:text-[16px]  leading-[150%] text-[#596780] text-justify font-[400] font-DmSans">
          With love ???? from Exxample, Inc
        </p>
      </div>
    </div>
  );
};

export default Footer;
