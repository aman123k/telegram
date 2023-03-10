import React, { useContext, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { ThemeContext } from "../../context/global";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ChatBg from "./ChatBg";

function General({ generalSetting, setGeneralSetting }) {
  const { font, setFont, theme, setTheme } = useContext(ThemeContext);
  const [chatbg, setChatBg] = useState(false);
  const [time, setTime] = useState(false);

  return (
    <>
      <div
        className={`absolute w-full top-0 h-screen duration-700
        bg-[#F4F4F4] dark:bg-[#0F0F0F] 
         ${generalSetting ? "translate-x-[0]" : " translate-x-[-100%]"}
        `}
      >
        <header
          className=" py-1.5 px-3 bg-white select-none dark:bg-[#212121]
           sticky top-0 max-[650px]:h-[8vh] border-b dark:border-[#707579]"
        >
          <div className=" flex gap-4 items-center">
            <button
              className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
              onClick={() => setGeneralSetting(false)}
            >
              <ArrowBackRoundedIcon />
            </button>
            <p className=" text-xl  tracking-wide font-roboto dark:text-white">
              General
            </p>
          </div>
        </header>

        <section className="bg-transparent select-none">
          <section className="bg-white py-3 dark:bg-[#212121] dark:text-white">
            <h1 className="px-5 text-lg font-roboto  text-[#707579]">
              Settings
            </h1>
            <div className="px-5">
              <div className="flex justify-between font-roboto mt-7">
                <span>Message Text Size</span>
                <span className="text-[#707579]">{font ? font : 16}</span>
              </div>
              <input
                value={font ? font : 16}
                onChange={(e) => setFont(e.currentTarget.value)}
                type="range"
                min="12"
                max="20"
                className="h-0.5 cursor-pointer w-full"
              />
            </div>
            <div
              className=" flex items-center gap-8 mx-2 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md  dark:hover:bg-[#2C2C2C]"
              onClick={() => setChatBg(true)}
            >
              <InsertPhotoIcon className="text-[#808488] " />
              <div className=" font-roboto font-normal tracking-wide">
                Chat Background
              </div>
            </div>
          </section>

          <section className="bg-white mt-3 py-3 dark:bg-[#212121] dark:text-white">
            <h1 className="px-5 text-lg font-roboto text-[#707579]">Theme</h1>
            <div className="px-6">
              <div className="flex flex-col gap-10 font-roboto mt-7 mb-5">
                <div
                  htmlFor="light"
                  className="flex gap-10 items-center"
                  onClick={() => setTheme("light")}
                >
                  <div
                    className=" w-[1.1rem] h-[1.1rem] rounded-full border-2 border-[#005CC8]
                     dark:border-gray-500 dark:p-0.5 flex items-center justify-center dark:bg-white"
                  >
                    {theme === "light" ? (
                      <div className="bg-[#005CC8] w-2.5 h-2.5 rounded-full"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="light">Light</label>
                </div>
                <div
                  className="flex gap-10 items-center"
                  onClick={() => setTheme("dark")}
                >
                  <div
                    className=" w-[1.1rem] h-[1.1rem] rounded-full border-2 dark:border-[#005CC8]
                     border-gray-500 dark:p-0.5 flex items-center justify-center dark:bg-white"
                  >
                    {theme === "dark" ? (
                      <div className="bg-[#005CC8] w-2.5 h-2.5 rounded-full"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <label htmlFor="dark">Dark</label>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white mt-3 py-3 dark:bg-[#212121] dark:text-white">
            <h1 className="px-5 text-lg font-roboto text-[#707579]">
              Time Format
            </h1>
            <div className="px-6">
              <div className="flex flex-col gap-10 font-roboto mt-7 mb-5">
                <div
                  className="flex gap-10 items-center"
                  onClick={() => setTime(true)}
                >
                  <div
                    className=" w-[1.1rem] h-[1.1rem] rounded-full border-2 border-[#005CC8]
                      dark:p-0.5 flex items-center justify-center dark:bg-white"
                  >
                    {time ? (
                      <div className="bg-[#005CC8] w-2.5 h-2.5 rounded-full"></div>
                    ) : (
                      ""
                    )}
                  </div>

                  <label htmlFor="12-hour">12-hour</label>
                </div>

                <div
                  className="flex gap-10 items-center"
                  onClick={() => setTime(false)}
                >
                  <div
                    className=" w-[1.1rem] h-[1.1rem] rounded-full border-2 border-[#005CC8]
                      dark:p-0.5 flex items-center justify-center dark:bg-white"
                  >
                    {time ? (
                      ""
                    ) : (
                      <div className="bg-[#005CC8] w-2.5 h-2.5 rounded-full"></div>
                    )}
                  </div>

                  <label htmlFor="12-hour">24-hour</label>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <ChatBg chatbg={chatbg} setChatBg={setChatBg} />
    </>
  );
}

export default General;
