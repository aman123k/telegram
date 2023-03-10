import React, { useContext } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { ThemeContext } from "../../context/global";
function Archivedchats() {
  const { archive, setArchive } = useContext(ThemeContext);
  return (
    <div
      className={` absolute top-0 pt-2 h-screen w-full duration-700
           dark:bg-[#212121] dark:border-[#161618] border-r bg-white
           ${archive ? " translate-x-0" : "translate-x-[-100%]"}
        `}
    >
      <header className="px-3 flex items-center gap-6">
        <button
          className={`text-3xl flex hover:bg-[#F4F4F5] w-10 h-10 
              items-center justify-center dark:hover:bg-[#2C2C2C] px-1.5 rounded-full 
                `}
          onClick={() => setArchive(false)}
        >
          <ArrowBackRoundedIcon className="text-[#707579] dark:text-[#d4cbcb] hidden" />
        </button>
        <p className=" font-[500px] text-lg tracking-wide font-roboto dark:text-white">
          Archived Chats
        </p>
      </header>
    </div>
  );
}

export default Archivedchats;
