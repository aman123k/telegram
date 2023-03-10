import React, { useContext } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Menubar from "./Menubar";
import { ThemeContext } from "../../context/global";
function Hearder() {
  const { menu, toggleMenu, value, setValue } = useContext(ThemeContext);
  return (
    <div
      className=" flex gap-3 px-3 items-center pt-3 pb-3 sticky 
    top-0 bg-white dark:bg-[#212121] h-[8vh]"
    >
      <div>
        <button
          className={`text-3xl flex hover:bg-[#F4F4F5] 
                w-10 h-10 items-center justify-center 
                dark:hover:bg-[#2C2C2C] px-1.5 rounded-full 
                ${menu ? "bg-[#F4F4F5] dark:bg-[#2C2C2C]" : ""}
                `}
          onClick={value ? () => setValue("") : toggleMenu}
        >
          {value ? (
            <ArrowBackRoundedIcon className="text-[#707579]" />
          ) : (
            <MenuRoundedIcon className="text-[#707579] dark:text-[#d4cbcb] hidden" />
          )}
        </button>
        {menu ? <Menubar /> : ""}
      </div>
      <div
        className="w-full flex bg-[#F4F4F5] dark:bg-[#2C2C2C] gap-2 items-center
             px-2 py-1.5 font-roboto rounded-3xl text-[#B2B5B7]"
      >
        <span className="text-xs py-1 cursor-text">
          <SearchRoundedIcon />
        </span>
        <input
          className=" outline-none cursor-text bg-transparent text-black dark:text-white w-[79%]"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        {value ? (
          <span
            className="hover:bg-[#F4F4F5] cursor-pointer
           p-1 dark:hover:bg-[#2C2C2C] text-[.25rem] rounded-full"
            onClick={() => setValue("")}
          >
            <CloseRoundedIcon />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Hearder;
