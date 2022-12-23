/* eslint-disable @next/next/no-img-element */
import { ethers } from "ethers";
import React from "react";
import Layout from "../shared/Layout";

export default function Home() {
  const [data, setData] = React.useState(null);
  const [isConnecting, setIsConnnecting] = React.useState(false);
  const [errMessage, SetErrMessage] = React.useState("");

  const handleConnectWallet = async () => {
    setIsConnnecting(true);
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();

    try {
      await provider.send("eth_requestAccounts", []).then((res) => {
        if (res) {
          setIsConnnecting(false);
          const signer = provider.getSigner(res[0]);
          setData(signer);
        }
      });
    } catch (error) {
      setIsConnnecting(false);
      SetErrMessage(error.message);
    }
  };

  return (
    <Layout>
      <div className=" flex justify-center flex-col items-center gap-y-10">
        <div className="flex justify-center flex-col items-center ">
          <p className="text-center text-[#111315] opacity-[1] lg:text-[44px] font-SpaceGrotesk lg:leading-[94px] font-[700] lg:h-[88px] lg:w-[838px] h-[153px] w-[268px] text-[40px] leading-[51px]">
            Start building apps with{" "}
            <span className="text-[#174AFF]">useful cases</span>
          </p>
          <p className="lg:h-[59px] lg:w-[489px] text-center lg:text-[18px] lg:leading-[23px] text-[#000] opacity-[0.6] font-DmSans h-[72px] w-[316px] text-[16px] leading-[150%] mt-3 lg:mt-0">
            Welcome to the EXX Developer’s Guide. Now you can begin building
            your first DApp on EXX.
          </p>
          <div className="space-y-4 lg:space-y-0 lg:flex gap-x-4 w-full lg:w-auto mt-[42px] lg:mt-[12px]">
            <button className="  bg-[#174AFF] text-white outline-none px-6 min-w-[112px] lg:min-w-[250px] h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full lg:w-fit lg:px-10 border border-[#174AFF] bg-transparenttext-white">
              Get Started
            </button>
            <button className="text-[#0077FE] outline-none px-6 min-w-[112px] lg:min-w-[250px] h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full lg:w-fit lg:px-10 border border-[#174AFF] bg-transparent">
              <p>Faucet</p>
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="#0077FE"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.51044 7.48014L16.842 7.48014M16.842 7.48014L16.842 14.2987M16.842 7.48014L8.04412 15.6624"
                    stroke="#0077FE"
                    stroke-width="2.07917"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center border relative">
          <img src="/assets/dashboard.png" alt="exx network" />

          <div className="lg:absolute lg:top-[14.6rem] relative text-white bg-[#111315] lg:h-[133px] h-[199px] w-screen flex justify-center items-center  font-SpaceGrotesk">
            <div className="lg:w-[793px] flex justify-between">
              {links.map((item, index) => (
                <div className="flex-0" key={index}>
                  <button className="outline-none flex justify-center items-center ">
                    <p className="text-white text-[18px] leading-[24px] font-SpaceGrotesk font-[700]">
                      {item.title}
                    </p>
                    <span>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="#0077FE"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.51044 7.48014L16.842 7.48014M16.842 7.48014L16.842 14.2987M16.842 7.48014L8.04412 15.6624"
                          stroke="#FFFFFF"
                          stroke-width="2.07917"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <p className="text-white  opacity-[0.6] text-[14px] leading-[20px] font-DmSans font-[400] ">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:absolute lg:-bottom-[19rem] bg-[#174AFF] lg:h-[512px] h-[425px] px-5 w-screen flex flex-col items-center relative">
            <p className="text-white lg:w-[937px] lg:text-[44px] font-SpaceGrotesk lg:leading-[54px] lg:mt-[51px] text-[32px] leading-[41px] w-[317px] pt-10">
              Your journey to developing your first dapp.
            </p>
            <div
              style={{ boxShadow: "0px 4px 42px rgba(0, 0, 0, 0.1)" }}
              className="lg:absolute lg:-bottom-10 bg-white lg:h-[332px] h-[709px] lg:w-[1259px] w-[335px] rounded-[19px]  flex justify-between items-center flex-col lg:flex-row p-5"
            >
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="p-6 lg:w-[395px] lg:h-[274px] bg-white flex flex-col gap-5"
                >
                  <div className="w-[54px] h-[54px] bg-[#DCF3FE] rounded-[500px] grid items-center justify-center">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <p className="font-[700] lg:text-[24px] lg:leading-[34px] font-SpaceGrotesk text-[#333333]">
                    {item.title}
                  </p>
                  <p className="lg:w-[355px] lg:h-[90px]  lg:text-[18px] lg:leading-[30px] font-DmSans font-thin text-[#000] opacity-[0.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex lg:mt-[380px] mt-[450px]">
          <div className="lg:bg-[#f6f6f6] lg:h-[354px] lg:w-[1130px] rounded-[20px] flex lg:flex-row flex-col gap-5 justify-around lg:items-center">
            <div className="lg:w-[402px] lg:h-[221px]">
              <p className="lg:w-[373px] lg:h-[108px] text-[44px] leading-[54px] text-[#000] font-SpaceGrotesk font-bold mb-10">
                Get connected to the EXX Network
              </p>

              <div className="space-y-4 lg:space-y-0 lg:flex gap-x-4 w-full lg:w-auto">
                <button className=" text-[12px] bg-[#174AFF] text-white outline-none px-6 min-w-[112px] lg:min-w-[192px] h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full lg:w-fit lg:px-10 border border-[#174AFF] bg-transparenttext-white">
                  Add to Metamask
                </button>
                <button className="text-[#0077FE] outline-none px-6 min-w-[112px] lg:min-w-[192px] h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full lg:w-fit lg:px-10 border border-[#174AFF] bg-transparent">
                  Learn More
                </button>
              </div>
            </div>

            <div className="lg:w-[430px] lg:h-[258px] flex flex-col justify-between ">
              <p className="lg:text-[18px] font-DmSans leading-[30px] text-[#000]">
                <span className="opacity-[0.6]">PRC URL:</span>{" "}
                https://ds2.exx.network
              </p>
              <p className="lg:text-[18px] font-DmSans leading-[30px] text-[#000]">
                <span className="opacity-[0.6]"> Network name:</span> Exx
                Testnet
              </p>
              <p className="lg:text-[18px] font-DmSans leading-[30px] text-[#000]">
                <span className="opacity-[0.6]">Symbol: </span> EXX
              </p>
              <p className="lg:text-[18px] font-DmSans leading-[30px] text-[#000]">
                <span className="opacity-[0.6]"> Chain ID:</span> 47
              </p>
              <p className="lg:text-[18px] font-DmSans leading-[30px] text-[#000]">
                <span className="opacity-[0.6]"> Block Explorer: </span>
                https://exxscan.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:flex-row flex-col lg:my-20 w-full gap-y-5">
          {resources.map((item, index) => (
            <div
              key={index}
              className="lg:w-[386px] lg:h-[110px] flex flex-col justify-between  "
            >
              <p className="font-WorkSans font-bold text-[24px] leading-[125%] text-[#2A6CF9B5]  opacity-[0.7]">{`0${
                index + 1
              }`}</p>
              <p className="font-SpaceGrotesk font-bold lg:text-[24px] lg:leading-[125%] text-[#2c3131]">
                {item.title}
              </p>
              <p className="text-[#626262] text-[18px] leading-[30px] font-DmSans">
                {item.text}
              </p>
              <a
                href="#"
                className="text-[#174AFF] underline text-[18px] leading-[30px] font-normal font-DmSans"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>

        <div>
          <div className="lg:w-[1129px] lg:h-[460px] h-[707px] w-[90vw] bg-[#000] rounded-[24px] lg:relative overflow-hidden flex lg:items-center ">
            <div className="absolute z-50 left-2 text-white lg:p-10  py-8 px-12 flex flex-col justify-center gap-y-5 lg:gap-y-10 lg:w-[535px]">
              <p className="font-SpaceGrotesk font-bold lg:text-[56px] leading-[103.1%] lg:h-[116px] lg:w-[535px] text-[36px] w-[239px] h-[111px] ">
                Join our developer community
              </p>
              <p className="lg:h-[90px] lg:w-[535px] font-DmSans font-normal  text-[18px] leading-[30px] opacity-[0.6]">
                Join our community of developers from diverse backgrounds where
                you can work collaboratively, develop projects, ask questions
                and grow your career.
              </p>
              <button className="flex justify-center gap-2 items-center h-[54px] rounded-[10px] outline-none bg-[#0077FE]  lg:w-[250px]">
                <img src="/assets/discord-logo.svg" alt="" srcset="" />
                <p>Join the community</p>
              </button>
            </div>
            <div className="lg:w-[1129px] lg:h-[460px] relative h-[606px]  w-full">
              <div className="lg:w-[1228px] lg:h-[1228px] bg-[#fff] bg-opacity-[0.05] rounded-full absolute lg:left-[400px] lg:top-[-248px] w-[606px] h-[606px] left-[-24px] top-[331px]"></div>
              <div className="lg:w-[766px] lg:h-[766px] bg-[#174AFF] rounded-full absolute lg:left-[631px] lg:top-[-17px]  w-[392px] h-[392px] left-[83px] top-[438px]"></div>
              <div className="lg:w-[536px] lg:h-[536px] bg-[#C2F3FF] bg-opacity-[0.2] rounded-full absolute lg:left-[724px] lg:top-[98px]  w-[274.3px] h-[274.3px] left-[150.59px] top-[506.85px]"></div>
              <div className="lg:w-[356.83px] lg:h-[356.83px] bg-[#E2F8FF] rounded-full absolute lg:left-[803.9px] lg:top-[180.65px]  w-[182.61px] h-[182.61px] -right-4 top-[559.15px]"></div>

              <div className="absolute right-0 lg:bottom-0 bottom-[-5.5rem] z-50">
                <svg
                  width="294"
                  height="189"
                  viewBox="0 0 294 189"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-[152px] h-[127px] lg:w-[298.39px] lg:h-[248.37px] "
                >
                  <path
                    d="M156.508 77.9668H139.26C111.664 77.9668 89.2416 100.389 89.2416 127.986V163.344H206.527V127.986C206.527 100.389 184.105 77.9668 156.508 77.9668Z"
                    fill="#81E5FF"
                  />
                  <path
                    d="M147.884 62.4438C165.03 62.4438 178.93 48.5439 178.93 31.3977C178.93 14.2514 165.03 0.351532 147.884 0.351532C130.737 0.351532 116.837 14.2514 116.837 31.3977C116.837 48.5439 130.737 62.4438 147.884 62.4438Z"
                    fill="#174AFF"
                  />
                  <path
                    d="M63.406 110.789H242.709L234.913 216.812H71.2018L63.406 110.789Z"
                    fill="#174AFF"
                  />
                  <path
                    d="M148.381 178.613C156.561 178.613 163.193 171.981 163.193 163.801C163.193 155.62 156.561 148.989 148.381 148.989C140.2 148.989 133.569 155.62 133.569 163.801C133.569 171.981 140.2 178.613 148.381 178.613Z"
                    fill="#81E5FF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-SpaceGrotesk font-bold text-[44px] leading-[40px] text-[#141830] py-[31px]">
            Exx Updates
          </p>
          <p className="text-[#626262] text-[18px] leading-[30px] font-DmSans  font-normal lg:w-[590px] lg:h-[60px] mb-[30px]">
            Catch up with news, blog posts, events and other happenings within
            the EXX ecosystem.
          </p>

          <div className="flex justify-between flex-col lg:flex-row gap-5">
            {news.map((item, index) => (
              <div
                className="lg:w-[400px] lg:h-[431px] bg-[#f5f5f5] rounded-[20px]  flex flex-col justify-between"
                key={index}
              >
                <div className="flex justify-between   p-4">
                  <p>{item.tag}</p>
                  <p>{item.date}</p>
                </div>
                <p className="p-4">{item.headline}</p>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-screen bg-black  h-[327px] lg:my-14"></div>
      </div>
    </Layout>
  );
}

const steps = [
  {
    title: "Write Smart Contract ",
    text: "Write instructions via code on the Exx network. {solidity}",
    icon: "/assets/smart-contract.svg",
  },
  {
    title: "Build Web Apps",
    text: "Build a frontend application for easier interaction {next} {react} ",
    icon: "/assets/web-apps.svg",
  },
  {
    title: "Integrate Dapp",
    text: "Connect your contract with your web app. {web3.js} {ethers.js} ",
    icon: "/assets/dapp.svg",
  },
];

const links = [
  {
    title: "Documentation",
    text: "EXX seamless swap portal",
  },
  {
    title: "Exx Incubator",
    text: "Launch with EXX platform",
  },
  {
    title: "Video Tutorial",
    text: "Earn seamlessly with EXX",
  },
];

const resources = [
  {
    title: "Documentation",
    text: "Everything needed to build on Exx",
    link: "View docs",
  },
  {
    title: "Documentation",
    text: "Everything needed to build on Exx",
    link: "View docs",
  },
  {
    title: "Documentation",
    text: "Everything needed to build on Exx",
    link: "View docs",
  },
];

const news = [
  {
    tag: "Blockchain tips",
    date: " March 27, 2022",
    headline: "The design language of the Cross Chain- pekele pekele",
    image: "/assets/code.png",
  },
  {
    tag: "Blockchain tips",
    date: " March 27, 2022",
    headline: "The design language of the Cross Chain- pekele pekele",
    image: "/assets/customer-care.png",
  },
  {
    tag: "Blockchain tips",
    date: " March 27, 2022",
    headline: "The design language of the Cross Chain- pekele pekele",
    image: "/assets/learners.png",
  },
];
