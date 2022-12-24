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
    <Layout handleClick={handleConnectWallet}>
      <div className=" flex justify-center flex-col items-center gap-y-10">
        <div className="flex justify-center flex-col items-center ">
          <p className="text-center text-[#111315] opacity-[1]  md:h-auto  lg:text-[44px] font-SpaceGrotesk lg:leading-[94px] font-[700] lg:h-[88px] lg:w-[838px]  md:w-4/5 h-[153px] w-[268px] text-[40px] leading-[51px]">
            Start building apps with{" "}
            <span className="text-[#174AFF]">useful cases</span>
          </p>
          <p className="lg:h-[59px] lg:w-[489px] md:w-[375px]  md:h-auto text-center lg:text-[18px] lg:leading-[23px] text-[#000] opacity-[0.6] font-DmSans h-[72px] w-[316px] text-[16px] leading-[150%] mt-3 lg:mt-0">
            Welcome to the EXX Developer’s Guide. Now you can begin building
            your first DApp on EXX.
          </p>
          <div className="space-y-4 lg:space-y-0 lg:flex md:flex md:justify-center gap-x-4 w-full lg:w-auto mt-[42px] lg:mt-[12px] md:flex-row md:w-full md:space-y-1">
            <button className="  bg-[#174AFF] text-white outline-none px-6 min-w-[112px] lg:min-w-[250px] h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full  md:w-1/3 lg:w-fit lg:px-10 border border-[#174AFF] bg-transparenttext-white">
              Get Started
            </button>
            <button className="text-[#0077FE] outline-none px-6 min-w-[112px] lg:min-w-[250px]  md:w-1/3  h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full lg:w-fit lg:px-10 border border-[#174AFF] bg-transparent">
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
            <div className="lg:w-[793px] lg:h-[133px] h-[199px] flex lg:justify-between  items-center gap-x-[32px] lg:gap-x-0 justify-center flex-wrap  lg:flex-nowrap">
              {links.map((item, index) => (
                <div
                  className={`${
                    index === 0 ? "order-0" : "order-1"
                  } lg:order-1`}
                  key={index}
                >
                  <button className="outline-none flex justify-center items-center ">
                    <p className="text-white lg:text-[18px] text-[16px] leading-[24px] font-SpaceGrotesk font-[700]">
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
                  <p className="text-white  opacity-[0.6] lg:text-[14px] text-[12px] leading-[20px] font-DmSans font-[400] ">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:absolute lg:-bottom-[19rem] bg-[#174AFF] lg:h-[512px] h-[425px] px-5 w-screen flex flex-col items-center relative">
            <p className="text-white lg:w-[937px] md:w-full md:text-center lg:text-[44px] font-SpaceGrotesk lg:leading-[54px] lg:mt-[51px] md:mt-[40px] text-[32px] leading-[41px] w-[317px] pt-10">
              Your journey to developing your first dapp.
            </p>
            <div
              style={{ boxShadow: "0px 4px 42px rgba(0, 0, 0, 0.1)" }}
              className="lg:absolute md:absolute lg:-bottom-10  md:-bottom-8 mt-10 bg-white lg:h-[332px] h-[709px]  md:h-auto   lg:w-[1259px] md:w-[750px] w-[335px] rounded-[19px]  flex justify-between items-center flex-co md:flex-row lg:flex-row p-5"
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

        <div className="flex lg:mt-[380px] mt-[450px] md:mt-[50px]">
          <div className="lg:bg-[#f6f6f6] lg:h-[354px] lg:w-[1130px] rounded-[20px] flex lg:flex-row md:flex-row flex-col gap-5 justify-around lg:items-center">
            <div className="lg:w-[402px] md:w-1/2 lg:h-[221px]">
              <p className="lg:w-[373px] lg:h-[108px] text-[44px] leading-[54px] text-[#000] font-SpaceGrotesk font-bold mb-10">
                Get connected to the EXX Network
              </p>
              {errMessage && (
                <p className="text-red-600 text-sm font-DmSans">{errMessage}</p>
              )}

              <div className=" lg:hidden md:hidden lg:w-[430px] lg:h-[258px] flex flex-col justify-between mb-[29px]">
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
              <div className="space-y-4 lg:space-y-0 lg:flex gap-x-4 w-full lg:w-auto md:flex md:flex-row md:items-center md:space-y-0">
                <button
                  onClick={handleConnectWallet}
                  className=" text-[12px] bg-[#174AFF] text-white outline-none px-6 min-w-[112px] lg:min-w-[192px] h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full lg:w-fit lg:px-10 border border-[#174AFF] bg-transparenttext-white"
                >
                  Add to Metamask
                </button>
                <button className="text-[#0077FE] outline-none px-6 min-w-[112px] lg:min-w-[192px] h-[54px] flex justify-center items-center gap-x-3 rounded-[10px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 bg-opacity-100 cursor-pointer w-full lg:w-fit lg:px-10 border border-[#174AFF] bg-transparent">
                  Learn More
                </button>
              </div>
            </div>

            <div className="lg:w-[430px] lg:h-[258px] lg:flex md:flex hidden flex-col justify-between ">
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
        <div className="flex justify-between lg:flex-row  md:flex-row flex-col lg:my-20 md:my-10 md:gap-x-3 w-full gap-y-5 lg:w-[1145px] md:w-full">
          {resources.map((item, index) => (
            <div
              key={index}
              className="lg:w-[386px] md:w-1/3 lg:h-[110px] flex flex-col justify-between  "
            >
              <p className="lg:block md:block hidden font-WorkSans font-bold text-[24px] leading-[125%] text-[#174AFF]  opacity-[0.7]">{`0${
                index + 1
              }`}</p>
              <p className="font-SpaceGrotesk font-bold lg:text-[24px] lg:leading-[125%] text-[#2c3131] text-[20px]">
                <span className="lg:hidden  md:hidden font-WorkSans font-bold text-[24px] leading-[125%] text-[#174AFF]">{`0${
                  index + 1
                }`}</span>{" "}
                {item.title}
              </p>
              <p className="text-[#626262] text-[18px] leading-[30px] font-DmSans md:w-[90%]">
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
          <div className="lg:w-[1129px] md:w-[95vw] md:flex-row lg:h-[460px] h-[707px] w-[90vw] bg-[#000] rounded-[24px] lg:relative overflow-hidden flex lg:items-center ">
            <div className="absolute z-50 left-2 text-white lg:p-10  py-8 px-12 flex flex-col  justify-center gap-y-5 lg:gap-y-10 lg:w-[535px] md:w-full">
              <p className="font-SpaceGrotesk font-bold lg:text-[56px] leading-[103.1%] lg:h-[116px] lg:w-[535px] text-[36px] w-[239px] h-[111px] md:w-1/2 md:mx-auto md:text-center  md:h-auto">
                Join our developer community
              </p>
              <p className="lg:h-[90px] lg:w-[535px] font-DmSans font-normal  text-[18px] leading-[30px] opacity-[0.6] md:w-4/5 md:text-center md:mx-auto ">
                Join our community of developers from diverse backgrounds where
                you can work collaboratively, develop projects, ask questions
                and grow your career.
              </p>
              <button className="flex justify-center gap-2 items-center h-[54px] rounded-[10px] outline-none bg-[#0077FE] md:w-1/2 md:mx-auto  lg:w-[250px]">
                <img src="/assets/discord-logo.svg" alt="" />
                <p>Join the community</p>
              </button>
            </div>
            <div className="lg:w-[1129px] lg:h-[460px] relative h-[606px] w-full">
              <div className="lg:w-[1228px] lg:h-[1228px] bg-[#fff] bg-opacity-[0.05] rounded-full absolute lg:left-[400px] lg:top-[-248px] w-[606px] h-[606px] left-[-24px] top-[331px] md:w-[1228px] md:h-[1228px] md:top-[150px]"></div>
              <div className="lg:w-[766px] lg:h-[766px] md:w-[766px] md:h-[766px] bg-[#174AFF] rounded-full absolute lg:left-[631px] lg:top-[-17px]  w-[392px] h-[392px] left-[83px] top-[438px] md:left-[160px] md:top-[330px] "></div>
              <div className="lg:w-[536px] lg:h-[536px] md:w-[536px] md:h-[536px] bg-[#C2F3FF] bg-opacity-[0.2] rounded-full absolute lg:left-[724px] lg:top-[98px]  w-[274.3px] h-[274.3px] left-[150.59px] top-[506.85px] md:left-[280px] md:top-[430px]"></div>
              <div className="lg:w-[356.83px] lg:h-[356.83px] md:w-[356.83px] md:h-[356.83px] md:top-[510px] bg-[#E2F8FF] rounded-full absolute lg:left-[803.9px] lg:top-[180.65px]  w-[182.61px] h-[182.61px] -right-4 top-[559.15px]"></div>
              <img
                src="/assets/code.svg"
                alt=""
                className="absolute lg:left-[714px] lg:top-[113px]  left-[145.48px] top-[518.53px] w-65.51px] h-[43.31px] lg:w-[128.02px] lg:h-[84.62px]"
              />
              <img
                src="/assets/blockchain-developer.svg"
                alt=""
                className="absolute lg:left-[952px] lg:top-[49px] left-[267.27px] top-[481.78px] w-[49.99px] h-[40.99px] lg:w-[80.11px] lg:h-[80.11px]"
              />
              <div className="absolute right-0 lg:bottom-0 bottom-[-5.5rem] z-50 md:right-20">
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
                className="lg:w-[400px] lg:h-[431px] lg:bg-[#f5f5f5] bg-[#F0F9FF] rounded-[20px]  flex flex-col justify-between"
                key={index}
              >
                <div className="flex justify-between   p-4">
                  <p className="font-DmSans text-[12px] leading-[20px] font-bold text-[#141830]">
                    {item.tag}
                  </p>
                  <p className="font-DmSans text-[12px] leading-[20px] font-bold text-[#141830] opacity-[0.5]">
                    {item.date}
                  </p>
                </div>
                <p className="p-4 font-DmSans text-[20px] leading-[34px] font-bold text-[#141830]">
                  {item.headline}
                </p>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-screen bg-black bg-[url(/assets/vector.svg)] bg-no-repeat bg-contain lg:h-[327px] lg:my-14 flex lg:flex-row  md:flex-row flex-col h-[278px] justify-center md:justify-between md:items-center lg:items-center  lg:gap-[145px]  gap-[14px]">
          <div className="px-4">
            <p className="lg:w-[475.5px] lg:h-[80px] lg:text-[44px] lg:leading-[80px] text-[24px] leading-[24px] font-SpaceGrotesk font-bold  text-white">
              Stay Updated
            </p>
            <p className="lg:text-[24px] lg:leading-[32px] text-[18px] leading-[26px] w-[327px] text-white font-bold font-DmSans lg:w-[458px] lg:h-[64px]">
              Subscribe to our newsletter. We only send important updates.
            </p>
          </div>

          <div className="flex gap-[14px]  lg:flex-row flex-col md:flex-row px-4">
            <input
              placeholder="Your email address"
              type="email"
              className="lg:w-[456px] h-[54px] w-full rounded-[10px] border border-[rgba(255, 255, 255, 0.48)] bg-transparent p-2"
            />

            <button className="outline-none p-[16.633px 24.95px] md:w-[219px] flex justify-center  items-center flex-row gap-[8.32px]  bg-[#174AFF] rounded-[10px] border border-[#174AFF] lg:w-[167px] h-[54px] text-white font-DmSans font-bold text-[14px]  leading-[18px]  md:text-xs">
              <p>Subscribe now</p>
              <img src="/assets/arrow.svg" alt="exx network" />
            </button>
          </div>
        </div>
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
