import React, { useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import toast, { Toaster } from "react-hot-toast";
import uplodeImage from "../helper/uplodeImage";

function ProfileEdit({ setEditProfile, editProfile }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const theme = localStorage.getItem("theme");
  const [picture, setPicture] = useState(user.picture);
  const [name, setName] = useState(user.name);
  const [userName, setUserName] = useState(user.userName);
  const [bio, setBio] = useState(user.bio);
  const selctFile = () => {
    const file = document.querySelector("#file");
    file.click();
  };
  const updateProfile = () => {
    const users = {
      name: name,
      phone: user.phone,
      userName: userName,
      picture: picture,
      bio: bio,
    };
    if (name === "") {
      if (theme === "light") {
        toast.error("Name is required", {
          duration: 1200,
        });
      } else {
        toast.error("Name is required", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
      }
      return;
    } else if (userName === "") {
      if (theme === "light") {
        toast.error("Username is required", {
          duration: 1200,
        });
      } else {
        toast.error("Username is required", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
      }
      return;
    } else {
      toast.success("Profile Updated successfull");
      localStorage.setItem("user", JSON.stringify(users));
    }
  };
  return (
    <>
      <div
        className={`absolute w-full top-0 h-screen duration-700
        bg-[#F4F4F4] dark:bg-[#0F0F0F] max-[650px]:h-max
         ${editProfile ? "translate-x-[0]" : " translate-x-[-100%]"}
        `}
      >
        <header
          className=" py-1.5 px-3 bg-white select-none dark:bg-[#212121]
           sticky top-0 h-[8vh] z-50 "
        >
          <div className=" flex gap-4 items-center">
            <button
              className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
              onClick={() => setEditProfile(false)}
            >
              <ArrowBackRoundedIcon />
            </button>
            <p className=" text-xl tracking-wide font-roboto dark:text-white">
              Edit profile
            </p>
          </div>
          {!(name === user.name) ||
          !(userName === user.userName) ||
          !(bio === user.bio) ||
          !(picture === user.picture) ? (
            <div
              className="fixed z-50 right-6 w-12 h-12 rounded-full bottom-5
         bg-[#4A95D6] flex items-center justify-center cursor-pointer"
              onClick={updateProfile}
            >
              <Toaster position="bottom-center" />
              <CheckRoundedIcon className="text-white" />
            </div>
          ) : (
            ""
          )}
        </header>
        <section
          className="scrollbar-thin scroll-smooth h-[92vh]
         scrollbar-thumb-[#CDCDCD] max-[650px]:h-max
         dark:scrollbar-thumb-[#323232] "
        >
          <div className="bg-white select-none dark:bg-[#212121] px-5">
            <div
              className="w-24 pt-8 h-24 flex items-center justify-center
             rounded-full ml-[50%] translate-x-[-50%] cursor-pointer relative "
              onClick={selctFile}
            >
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={(e) => uplodeImage(e, setPicture)}
              />
              <div className="text-sm text-[#94907F] font-bold overflow-hidden">
                <img
                  className="w-24 h-24 rounded-full"
                  src={picture}
                  alt="fg"
                />
              </div>
              <div
                className="absolute bg-black w-full h-full rounded-full opacity-60 
            flex items-center justify-center"
              >
                <CenterFocusStrongOutlinedIcon className="text-white font-bold" />
              </div>
            </div>
            <div className="relative  mt-14">
              {name ? (
                <label
                  className=" duration-150 text-xs absolute top-[-5.5px] left-2 px-1
               bg-white dark:text-white dark:bg-[#212121] text-[#3390EC] tracking-wide"
                >
                  Name(required)
                </label>
              ) : (
                ""
              )}
              <input
                type="text"
                value={name}
                placeholder="Name(required)"
                className="dark:text-white w-full px-3 py-2 rounded-lg mt-1 border-2
              hover:border-[#3390EC] bg-transparent dark:border-[#2B2B2B] 
              outline-[#3390EC]  dark:outline-current "
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div className="relative mt-4">
              {bio ? (
                <label
                  className=" duration-150 text-xs absolute top-[-5.5px] left-2 px-1
               bg-white dark:text-white dark:bg-[#212121] text-[#3390EC] tracking-wide"
                >
                  Bio
                </label>
              ) : (
                ""
              )}
              <input
                type="text"
                value={bio}
                placeholder="Bio"
                className="dark:text-white w-full px-3 py-2 rounded-lg mt-1 border-2
              hover:border-[#3390EC] bg-transparent dark:border-[#2B2B2B] 
              outline-[#3390EC]  dark:outline-current "
                onChange={(e) => setBio(e.currentTarget.value)}
              />
            </div>
            <p
              className="text-sm text-[#AAAAAA] font-roboto mt-6
              pb-4
          "
            >
              Any details such as age, occupation or city. Example: 23 y.o.
              designer from San Francisco
            </p>
          </div>
          <div className="px-5 bg-white  mt-4 py-3 dark:bg-[#212121]">
            <h1 className="dark:text-[#AAAAAA] text-[#707579] mt-4 text-lg font-roboto">
              Username
            </h1>
            <div className="relative mt-5">
              {userName ? (
                <label
                  className=" duration-150 text-sm absolute top-[-5.5px] left-2 px-1
               bg-white dark:text-white dark:bg-[#212121] text-[#3390EC] tracking-wider"
                >
                  Username
                </label>
              ) : (
                ""
              )}
              <input
                type="text"
                value={userName}
                placeholder="Username"
                className="dark:text-white w-full px-3 py-2.5 rounded-lg mt-1 border-2
              hover:border-[#3390EC] bg-transparent dark:border-[#2B2B2B] text-lg
              outline-[#3390EC]  dark:outline-current "
                onChange={(e) => setUserName(e.currentTarget.value)}
              />
            </div>
            <p className="text-sm tracking-wider text-[#AAAAAA] font-roboto mt-4">
              You can choose a username on Telegram. If you do, people will be
              able to find you by this username and contact you without needing
              your phone number.
            </p>
            <p className="text-sm tracking-wider text-[#AAAAAA] font-roboto mt-6">
              You can use a–z, 0–9 and underscores. Minimum length is 5
              characters.
            </p>
            <p className="text-sm tracking-wider text-[#AAAAAA] font-roboto mt-6">
              This link opens a chat with you: https://t.me/Ak54262
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProfileEdit;
