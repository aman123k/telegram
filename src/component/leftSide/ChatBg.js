import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
function ChatBg({ chatbg, setChatBg }) {
  return (
    <>
      <div
        className={` absolute top-0 w-full h-screen bg-[#F4F4F4] duration-700 dark:bg-[#0F0F0F] 
       ${chatbg ? "translate-x-[0]" : " translate-x-[-100%]"}
      `}
      >
        <header
          className=" py-1.5 px-3 bg-white select-none dark:bg-[#212121]
           sticky top-0 max-[650px]:h-[8vh] border-b dark:border-[#707579]"
        >
          <div className=" flex gap-4 items-center">
            <button
              className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
              onClick={() => setChatBg(false)}
            >
              <ArrowBackRoundedIcon />
            </button>
            <p className="text-xl font-semibold tracking-wide font-roboto dark:text-white">
              Chat Background
            </p>
          </div>
        </header>
      </div>
    </>
  );
}

export default ChatBg;
