import React, { useContext } from "react";
import { ThemeContext } from "../../context/global";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
function Message() {
  const { search, setSearch, t } = useContext(ThemeContext);
  return (
    <div
      className={`
          w-[60%] h-screen bg-white absolute top-0 right-0 duration-700
          max-[780px]:w-full z-50 
          ${search ? "translate-x-0" : "translate-x-[200%]"} dark:bg-[#212121]
          `}
    >
      <header className="py-1.5 px-3 flex gap-2 items-center h-[8vh]">
        <button
          className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
          onClick={() => setSearch(false)}
        >
          <CloseRoundedIcon />
        </button>
        <div
          className="w-[75%] flex bg-[#F4F4F5] dark:bg-[#2C2C2C] gap-2 items-center
             px-2 py-1.5 font-roboto rounded-3xl text-[#B2B5B7]"
        >
          <span className="text-xs py-1 cursor-text">
            <SearchRoundedIcon />
          </span>
          <input
            className=" outline-none cursor-text bg-transparent text-black dark:text-white w-[79%]"
            type="text"
            placeholder={t("Search")}
          />
        </div>
        <button className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 text-sm rounded-full text-[#7C7F82]">
          <CalendarMonthOutlinedIcon />
        </button>
      </header>
    </div>
  );
}

export default Message;
