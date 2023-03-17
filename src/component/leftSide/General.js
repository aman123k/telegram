import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/global";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ChatBg from "./ChatBg";
import Header from "./helper/Header";
import List from "./helper/List";

function General({ generalSetting, setGeneralSetting }) {
  const { font, setFont, theme, setTheme, t } = useContext(ThemeContext);
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
        <Header title={t("General.General")} setItems={setGeneralSetting} />
        <section className="bg-transparent select-none">
          <section className="bg-white py-3 dark:bg-[#212121] dark:text-white">
            <h1 className="px-5 text-lg font-roboto  text-[#707579]">
              {t("Menubar.Settings")}
            </h1>
            <div className="px-5">
              <div className="flex justify-between font-roboto mt-7">
                <span>{t("General.Message Text Size")}</span>
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
            <List
              title={t("General.Chat Background")}
              Icon={InsertPhotoIcon}
              setItem={setChatBg}
            />
          </section>

          <section className="bg-white mt-3 py-3 dark:bg-[#212121] dark:text-white">
            <h1 className="px-5 text-lg font-roboto text-[#707579]">
              {t("General.Theme")}
            </h1>
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
                  <label htmlFor="light">{t("General.Light")}</label>
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
                  <label htmlFor="dark">{t("General.Dark")}</label>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white mt-3 py-3 dark:bg-[#212121] dark:text-white">
            <h1 className="px-5 text-lg font-roboto text-[#707579]">
              {t("General.Time Format")}
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
