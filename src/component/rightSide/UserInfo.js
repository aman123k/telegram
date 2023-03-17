import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/global";
import { users } from "../../data/users";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
function UserInfo({ id }) {
  const { profile, setProfile, t } = useContext(ThemeContext);
  const [notification, setNotification] = useState(false);
  const newUser = users.filter((user) => {
    return user.id.toString() === id;
  });
  return (
    <div
      className={`
          w-[60%]  bg-white absolute duration-700 top-0 right-0 dark:bg-[#212121]
          max-[780px]:w-full z-50 pb-3
           ${profile ? "translate-x-0" : "translate-x-[200%]"}
          `}
    >
      <header className="py-0.5 px-5 flex items-center justify-between  select-none">
        <div className=" flex gap-6 items-center">
          <button
            className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-1.5 rounded-full text-[#7C7F82]"
            onClick={() => setProfile(false)}
          >
            <CloseRoundedIcon />
          </button>
          <p className="font-bold text-xl font-roboto dark:text-white">
            {t("SaveMessage.User Info")}
          </p>
        </div>
        <button className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-1.5 rounded-full text-[#7C7F82]">
          <CreateOutlinedIcon />
        </button>
      </header>
      <section
        className="overscroll-y scrollbar-thin scroll-smooth 
         scrollbar-thumb-[#CDCDCD] dark:scrollbar-thumb-[#323232] h-[92vh]"
      >
        <div className="relative ">
          {newUser[0].image ? (
            <img
              className=" w-full h-[25rem]"
              src={newUser[0].image}
              alt={newUser[0].id}
            />
          ) : (
            <img
              className=" w-full h-[25rem]"
              src="https://em-content.zobj.net/socialmedia/google/110/skull_1f480.png"
              alt="💀"
            />
          )}
          <div className="absolute bottom-[10px] left-6">
            <h2
              className="text-white font-semibold tracking-wider
           font-roboto text-lg"
            >
              {newUser[0].name}
            </h2>
            <p className="text-[#d3d5d6] tracking-wide text-sm">
              {t("Header.last seen")} {newUser[0].lastSeen}
            </p>
          </div>
        </div>
        <div>
          <div
            className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-2 my-2 
            hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
          >
            <LocalPhoneOutlinedIcon className="text-[#808488] " />
            <div>
              <span className=" font-roboto font-normal">
                {newUser[0].phoneNo}
              </span>
              <p className="text-[#808488] text-sm">{t("UserSetting.Phone")}</p>
            </div>
          </div>
          <div
            className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer 
        px-3 py-2 my-2 hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
          >
            <span className="text-[#808488] text-2xl font-semibold">@</span>
            <div>
              <span className=" font-roboto font-normal">
                {newUser[0].userName}
              </span>
              <p className="text-[#808488] text-sm">
                {t("UserSetting.Username")}
              </p>
            </div>
          </div>
          <div
            className=" flex items-center gap-8 ml-2 mr-3 cursor-text 
        px-3 py-2 my-2 rounded-md dark:text-white "
          >
            <InfoOutlinedIcon className="text-[#808488] " />
            <div>
              <span className=" font-roboto font-normal">{newUser[0].bio}</span>
              <p className="text-[#808488] text-sm">{t("UserSetting.bio")}</p>
            </div>
          </div>
          <div
            className=" flex items-center justify-between ml-2 mr-3 cursor-pointer 
        p-3 my-2 hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
            onClick={() => setNotification(!notification)}
          >
            <span className=" flex gap-8 ">
              <NotificationsNoneOutlinedIcon className="text-[#808488] " />
              <span className=" font-roboto font-normal">
                {t("SaveMessage.Notification")}
              </span>
            </span>
            <div
              className={` w-8 h-2.5 relative rounded-full 
              ${
                notification
                  ? "dark:bg-[#717579] bg-[#C4C9CC]"
                  : "bg-[#3390EC] dark:bg-[#8774E1]"
              }
          `}
            >
              <span
                className={`bg-white w-4 h-4 absolute top-[-3px] border-2 right-0
                        rounded-full duration-500 dark:bg-[#212121]
                         ${
                           notification
                             ? "translate-x-[-100%] border-[#c4c9cc] dark:border-[#71767a]  "
                             : " border-[#3390EC] dark:border-[#8774E1] "
                         }`}
              ></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserInfo;
