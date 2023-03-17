import React, { useContext, useState } from "react";
import Header from "./helper/Header";
import { ThemeContext } from "../../context/global";
import Languages from "../../data/Language";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
function Language({ language, setlanguage }) {
  const { setLanguage, t } = useContext(ThemeContext);
  const [translate, setTranslate] = useState(false);
  return (
    <div
      className={`absolute w-full top-0 h-screen duration-700
        bg-[#F4F4F4] dark:bg-[#0F0F0F] border-r
         ${language ? "translate-x-[0]" : " translate-x-[-100%]"}
        `}
    >
      <Header title={`${t("UserSetting.Language")}`} setItems={setlanguage} />
      <div
        className=" scrollbar-thin scrollbar-thumb-[#CDCDCD] h-[92vh] 
        max-[650px]:h-screen scroll-smooth dark:scrollbar-thumb-[#323232]"
      >
        <section className="bg-white dark:bg-[#212121] px-2  ">
          <div
            className="pb-2 pt-9 px-4 flex items-center gap-10 cursor-pointer select-none"
            onClick={() => setTranslate(!translate)}
          >
            {translate === true ? (
              <CheckBoxRoundedIcon className="text-[#005cc8] dark:text-[#8774E1" />
            ) : (
              <CheckBoxOutlineBlankRoundedIcon className="text-[#5B5B5A]" />
            )}
            <p className="dark:text-white font-roboto tracking-wide">
              {t("Header.Show Translate Button")}
            </p>
          </div>
          {translate === true ? (
            <div
              className=" flex justify-between cursor-pointer dark:text-white hover:bg-[#F4F4F5]
         dark:hover:bg-[#2C2C2C] p-4 rounded-xl mb-2"
            >
              <p>{t("Header.Do Not Translate")}</p>
              <span className="text-[#5B5B5A] font-semibold">
                {localStorage.getItem("language")
                  ? localStorage.getItem("language")
                  : "English"}
              </span>
            </div>
          ) : (
            ""
          )}
          <p className="pb-4 px-4 text-[#5B5B5A] font-semibold ">
            {t("Header.P5")}
          </p>
        </section>
        <section className="bg-white dark:bg-[#212121] py-3 mt-4 select-none">
          {Languages.map((language) => {
            return (
              <div
                key={language.id}
                onClick={() => {
                  setLanguage(language.title);
                  localStorage.setItem("language", language.title);
                  localStorage.setItem("subTitle", language.subTitle);
                }}
                className="cursor-pointer"
              >
                <div className="flex gap-7 font-roboto items-center mb-5 px-6">
                  <div
                    className=" w-[1.1rem] h-[1.1rem] rounded-full border-2 border-[#005CC8]
                     dark:border-[#8774E1] dark:p-0.5 flex items-center justify-center "
                  >
                    {language.title ===
                    (localStorage.getItem("language")
                      ? localStorage.getItem("language")
                      : "English") ? (
                      <div className="bg-[#005CC8] dark:bg-[#8774E1] w-2.5 h-2.5 rounded-full"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <label className="cursor-pointer capitalize dark:text-white tracking-wide">
                      {language.title}
                    </label>
                    <p className="text-sm text-[#5B5B5A] cap">
                      {language.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Language;
