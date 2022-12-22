import React from "react";

const Footer = () => {
  return (
    <div className=" w-[1440px]  font-SpaceGrotesk relative overflow-hidden lg:bg-white flex  justify-between py-7 px-5 lg:py-7 lg:px-7 xl:py-6 xl:px-20 3xl:bg-transparent flex-col lg:flex-row w-full">
      <div className="flex flex-col gap-y-4 pb-5">
        <p className="text-[#1D2A65] lg:text-[24px] leading-[31px] font-[700]">
          EXX Blockchain
        </p>
        <p className="lg:w-[330px] lg:h-[54px] font-[400] lg:text-[18px] leading-[150%] text-[#596780]  font-DmSans">
          EXX builds on the efficacy of Ethereum, it is faster, powerful and
          more secured
        </p>
      </div>{" "}
      <div className="flex flex-row  flex-wrap lg:flex-nowrap justify-center gap-[120px] w-full">
        <div className="flex flex-col gap-y-4 w-1/2 lg:w-auto">
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
        <div className="flex flex-col gap-y-4 w-1/2 lg:w-auto">
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
        <div className="flex flex-col gap-y-4 w-1/2 lg:w-auto">
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
        <div className="flex flex-col gap-y-4 w-1/2 lg:w-auto">
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
      <div class="flex-1 my-5 border-t border-[#0000001C] w-full"></div>
    </div>
  );
};

export default Footer;
