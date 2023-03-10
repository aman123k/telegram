import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/global";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ProfileEdit from "./ProfileEdit";
import General from "./General";
function UserSetting() {
  const { setting, setSetting } = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [editProfile, setEditProfile] = useState(false);
  const [generalSetting, setGeneralSetting] = useState(false);
  const [logOut, setLogOut] = useState(false);

  return (
    <>
      <div
        className={`absolute top-0 h-screen w-full duration-700 select-none
           dark:bg-[#0F0F0F] dark:border-[#161618] border-r bg-[#F4F4F4]
           ${setting ? " translate-x-0" : "translate-x-[-100%]"}
           ${editProfile ? "translate-x-[-100%]" : " translate-x-0"}
           ${generalSetting ? "translate-x-[-100%]" : " translate-x-0"}
           `}
      >
        <header
          className=" py-1.5 px-3 flex items-center justify-between z-50 max-h-[8vh]
       bg-white select-none dark:bg-[#212121] sticky top-0 max-[650px]:h-[8vh]"
        >
          <div
            className=" flex gap-4 items-center"
            onClick={() => setLogOut(false)}
          >
            <button
              className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
              onClick={() => setSetting(false)}
            >
              <ArrowBackRoundedIcon />
            </button>
            <p className="font-semibold text-xl font-roboto dark:text-white">
              Settings
            </p>
          </div>
          <div>
            <button
              className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
              onClick={() => {
                setLogOut(false);
                setEditProfile(true);
              }}
            >
              <CreateOutlinedIcon />
            </button>
            <button
              className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 
          rounded-full text-[#7C7F82]"
              onClick={() => setLogOut(!logOut)}
            >
              <MoreVertRoundedIcon />
            </button>
          </div>
          {logOut ? (
            <div
              className=" absolute right-10 top-14 z-10 bg-white opacity-80 tracking-wider
        font-semibold text-sm py-1.5 pl-3 pr-14  dark:bg-[#1A1214] dark:text-white cursor-pointer rounded-lg"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
                setSetting(false);
              }}
            >
              <LogoutRoundedIcon className="text-[#707579] text-xs mr-3" />
              Log Out
            </div>
          ) : (
            ""
          )}
        </header>
        <section
          onClick={() => setLogOut(false)}
          className="scrollbar-thin scroll-smooth pt-0.5 h-[92vh]
        dark:bg-[#0F0F0F] scrollbar-thumb-[#CDCDCD] max-[650px]:h-screen
         dark:scrollbar-thumb-[#323232]  bg-[#F4F4F4]"
        >
          <section className="bg-white dark:bg-[#212121] pb-3 ">
            <div className="relative">
              <img
                className=" w-full h-80 bg-[#B9C2CA]"
                src={user.picture}
                alt="04"
              />
              <div className="absolute bottom-[10px] left-6">
                <h2
                  className="text-white font-semibold tracking-wider
           font-roboto text-lg text capitalize"
                >
                  {user.name}
                </h2>
                <p className="text-[#d3d5d6] tracking-wide text-sm">online</p>
              </div>
            </div>
            <div>
              <div
                className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-2 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
              >
                <LocalPhoneOutlinedIcon className="text-[#808488] " />
                <div>
                  <span className=" font-roboto font-normal">{user.phone}</span>
                  <p className="text-[#808488] text-sm">Phone</p>
                </div>
              </div>
              <div
                className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer 
        px-3 py-2 my-2 hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
              >
                <span className="text-[#808488] text-2xl font-semibold">@</span>
                <div>
                  <span className=" font-roboto font-normal">
                    {user.userName}
                  </span>
                  <p className="text-[#808488] text-sm">Username</p>
                </div>
              </div>
              <div
                className=" flex items-center gap-8 ml-2 mr-3 cursor-text 
        px-3 py-2 my-2 rounded-md dark:text-white "
              >
                <InfoOutlinedIcon className="text-[#808488] " />
                <div>
                  <span className=" font-roboto font-normal">{user.bio}</span>
                  <p className="text-[#808488] text-sm">bio</p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-2 bg-white dark:bg-[#212121] py-1 ">
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
              onClick={() => {
                setGeneralSetting(true);
              }}
            >
              <SettingsOutlinedIcon className="text-[#808488] " />
              <div className=" font-roboto font-normal tracking-wide">
                General Settings
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <NotificationsNoneOutlinedIcon className="text-[#808488] " />
              <div className=" font-roboto font-normal tracking-wide">
                Notifications
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <DataSaverOffOutlinedIcon className="text-[#808488] " />
              <div className=" font-roboto font-normal tracking-wide">
                Data and Storage
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <LockOutlinedIcon className="text-[#808488] " />
              <div className=" font-roboto font-normal tracking-wide">
                Privacy and Security
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <FolderOpenIcon className="text-[#808488] " />
              <div className=" font-roboto font-normal tracking-wide">
                Chat Folders
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <DesktopWindowsOutlinedIcon className="text-[#808488] " />
              <div className="flex w-full justify-between">
                <div className="font-roboto font-normal tracking-wide">
                  Devices
                </div>
                <p>1</p>
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <TranslateOutlinedIcon className="text-[#808488] " />
              <div className="font-roboto font-normal tracking-wide">
                Language
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <EmojiEmotionsOutlinedIcon className="text-[#808488] " />
              <div className="font-roboto font-normal tracking-wide">
                Stickers and Emoji
              </div>
            </div>
            <div
              className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            >
              <StarRoundedIcon className="text-purple-500 " />
              <div className="font-roboto font-normal tracking-wide">
                Telegram Premium
              </div>
            </div>
          </section>
        </section>
      </div>
      <ProfileEdit editProfile={editProfile} setEditProfile={setEditProfile} />
      <General
        generalSetting={generalSetting}
        setGeneralSetting={setGeneralSetting}
      />
    </>
  );
}

export default UserSetting;
