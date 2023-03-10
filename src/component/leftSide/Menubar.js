import React, { useContext } from "react";
import TurnedInNotRoundedIcon from "@mui/icons-material/TurnedInNotRounded";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GifOutlinedIcon from "@mui/icons-material/GifOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PestControlOutlinedIcon from "@mui/icons-material/PestControlOutlined";

import { ThemeContext } from "../../context/global";
import { Link } from "react-router-dom";

function Menubar() {
  const { theme, toggleDarkMode, toggleMenu, setArchive, setSetting } =
    useContext(ThemeContext);
  return (
    <div className="absolute select-none z-50">
      <div
        className="bg-[#FFFFFF] mt-1 dark:bg-[#222222] shadow-xl
                    rounded-xl px-1 py-2 font-roboto shadow-[#F4F4F5]-500/50"
      >
        <ul className="dark:text-white ">
          <Link to="/MainrightCont/2093858">
            <li
              className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-5 py-1 
                    cursor-pointer tracking-wide rounded-md items-center dark:hover:bg-[#141414]"
              onClick={toggleMenu}
            >
              <TurnedInNotRoundedIcon className=" text-[#899196]" />
              <span>Saved Messages</span>
            </li>
          </Link>
          <li
            className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-5 py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
            onClick={() => {
              setArchive(true);
              toggleMenu();
            }}
          >
            <ArchiveOutlinedIcon className=" text-[#899196]" />
            <span>Archived Chats</span>
          </li>
          <li
            className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-5 py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
            onClick={toggleMenu}
          >
            <PeopleAltOutlinedIcon className=" text-[#899196]" />
            <span>Contacts</span>
          </li>
          <li
            className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-5 py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
            onClick={() => {
              setSetting(true);
              toggleMenu();
            }}
          >
            <SettingsOutlinedIcon className=" text-[#899196]" />
            <span>Settings</span>
          </li>
          <li
            onClick={toggleDarkMode}
            className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-20 py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
          >
            <div className=" flex gap-5 items-center">
              <DarkModeOutlinedIcon className=" text-[#899196]" />
              <span>Night Mode</span>
            </div>
            <div className=" w-8 h-2.5 relative bg-[#c4c9cc] rounded-full dark:bg-[#8774E1]">
              <span
                className={`bg-white w-4 h-4 absolute top-[-3px] border-2
                       border-[#c4c9cc] rounded-full duration-700 dark:bg-[#212121] dark:border-[#8774E1]
                         ${theme === "dark" ? "translate-x-[100%]" : ""}`}
              ></span>
            </div>
          </li>
          <li
            className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-20 py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
          >
            <div className=" flex gap-5 items-center">
              <GifOutlinedIcon className=" text-[#899196]" />
              <span>Animations</span>
            </div>
            <div className=" w-8 h-2.5 relative bg-[#c4c9cc] rounded-full dark:bg-[#71767a]">
              <span
                className=" bg-white w-4 h-4 absolute top-[-3px]
                         border-2 border-[#c4c9cc] rounded-full duration-700
                          dark:bg-[#212121] dark:border-[#71767a]"
              ></span>
            </div>
          </li>
          <li
            className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-5 py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
          >
            <HelpOutlineOutlinedIcon className=" text-[#899196]" />
            <span>Telegram Features</span>
          </li>
          <li
            className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-5 py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
          >
            <PestControlOutlinedIcon className=" text-[#899196]" />
            <span>Report Bug</span>
          </li>
          <li
            className=" hover:bg-[#EEEEEE] px-3.5 text-sm flex gap-[1.6rem] py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
          >
            <span className="text-[#899196] font-normal text-xl">K</span>
            <span>Switch to K Version</span>
          </li>
          <li
            className=" hover:bg-[#EEEEEE] px-3.5 text-sm flex gap-[1.2rem] py-1 
                    cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
          >
            <span className="text-[#899196] font-normal text-xl">W</span>
            <span>Switch to Old Version</span>
          </li>
        </ul>
        <p className=" text-xs tracking-wide text-[#899196] text-center mt-3 mb-1">
          Telegram WebZ 1.50.12
        </p>
      </div>
    </div>
  );
}

export default Menubar;
