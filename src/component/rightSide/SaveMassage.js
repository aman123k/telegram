import React, { useContext } from "react";
import { ThemeContext } from "../../context/global";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function SaveMassage() {
  const { profile, setProfile } = useContext(ThemeContext);
  return (
    <div
      className={`w-[60%] bg-[#F4F4F5] absolute duration-700 top-0 right-0 
          max-[780px]:w-full h-screen dark:bg-[#181818] z-50
           ${profile ? "translate-x-0" : "translate-x-[200%]"}
          `}
    >
      <header className="py-2 px-5 select-none bg-white dark:bg-[#212121] ">
        <div className=" flex gap-6 items-center">
          <button
            className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
            onClick={() => setProfile(false)}
          >
            <CloseRoundedIcon />
          </button>
          <p className="font-semibold font-roboto tracking-wide text-xl dark:text-white ">
            Profile
          </p>
        </div>
        <div className="w-28 h-28 mt-7 ml-[50%] translate-x-[-50%]">
          <img
            className="w-full h-full rounded-full bg-cover"
            src="https://static9.tgstat.ru/channels/_0/3b/3bdc7810ebf4c3de0646923f39267695.jpg"
            alt=""
          />
        </div>
        <p className="text-center mb-5 mt-3 dark:text-white font-semibold font-roboto text-[1.30rem] tracking-wide">
          Saved Message
        </p>
      </header>
    </div>
  );
}

export default SaveMassage;
