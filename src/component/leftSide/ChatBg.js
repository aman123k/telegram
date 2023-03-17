import React, { useContext, useEffect, useState } from "react";
import Chatbg from "./helper/chatBg";
import Header from "./helper/Header";
import { bgImage } from "../../data/bgImage";
import { ThemeContext } from "../../context/global";
import LocalSeeOutlinedIcon from "@mui/icons-material/LocalSeeOutlined";
import ColorizeOutlinedIcon from "@mui/icons-material/ColorizeOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import uploadImage from "./helper/uploadImage";
if (!localStorage.getItem("backgroundImage")) {
  localStorage.setItem("backgroundImage", JSON.stringify(bgImage));
}
function ChatBg({ chatbg, setChatBg }) {
  const { setImage, t } = useContext(ThemeContext);
  const [picture, setPicture] = useState("");
  const backgroundimage = JSON.parse(localStorage.getItem("backgroundImage"));
  const [background, setBackground] = useState(backgroundimage);
  const updateBg = () => {
    document.getElementById("uploadImage").click();
  };
  useEffect(() => {
    if (picture === "") {
      return;
    }
    const newPicture = {
      id: new Date().getMilliseconds(),
      image: picture,
    };
    backgroundimage.unshift(newPicture);
    setBackground(backgroundimage);
    localStorage.setItem("backgroundImage", JSON.stringify(backgroundimage));
    setPicture("");
  }, [picture, backgroundimage]);
  return (
    <>
      <div
        className={` absolute top-0 w-full h-screen bg-[#F4F4F5] duration-700 dark:bg-[#0F0F0F] 
       ${chatbg ? "translate-x-[0]" : " translate-x-[-100%]"}
      `}
      >
        <Header title={t("General.Chat Background")} setItems={setChatBg} />
        <div
          className="scrollbar-thin scrollbar-thumb-[#CDCDCD] select-none
          h-[92vh] max-[650px]:h-screen scroll-smooth dark:scrollbar-thumb-[#323232]"
        >
          <div className="bg-white dark:bg-[#212121] pr-3 pt-5 pb-3">
            <div onClick={updateBg}>
              <Chatbg
                title={t("ChatBg.Upload Wallpaper")}
                Icon={LocalSeeOutlinedIcon}
              />
              <input
                type="file"
                id="uploadImage"
                className="hidden"
                onChange={(e) => {
                  uploadImage(e, setPicture);
                }}
              />
            </div>
            <Chatbg title={t("ChatBg.Set color")} Icon={ColorizeOutlinedIcon} />
            <Chatbg
              title={t("ChatBg.Reset to Defaults")}
              Icon={StarOutlineRoundedIcon}
              removeItem={() => {
                setImage("");
                localStorage.removeItem("BGIMAGE");
              }}
            />
          </div>
          <div className="grid grid-cols-3 gap-[5px] bg-white dark:bg-[#212121] p-2 mt-2 mr-1">
            {background.map((img) => {
              return (
                <div
                  key={img.id}
                  className="h-32 cursor-pointer"
                  onClick={() => {
                    setImage(img.image);
                    localStorage.setItem("BGIMAGE", img.image);
                  }}
                >
                  <img src={img.image} className="w-full h-full" alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBg;
