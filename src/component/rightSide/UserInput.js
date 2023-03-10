import React from "react";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";

function UserInput() {
  return (
    <div className="absolute bottom-7 right-0 w-full">
      <div className="flex gap-3 mx-4 items-center ">
        <div
          className="bg-white dark:bg-[#212121] items-center px-3
         flex gap-3 w-full rounded-lg"
        >
          <span
            className="cursor-pointer hover:bg-[#EFF6FE] w-9 flex items-center
           justify-center h-9 rounded-full "
          >
            <SentimentSatisfiedRoundedIcon className="text-[#7A7A7B] hover:text-[#2086EA]" />
          </span>
          <input
            type="text"
            placeholder="Message "
            className=" bg-transparent w-full tracking-wide outline-none 
            py-3 dark:text-white"
          />
          <span
            className=" cursor-pointer hover:bg-[#EFF6FE] w-9 flex items-center
           justify-center h-9 rounded-full"
          >
            <AttachmentRoundedIcon className="text-[#7A7A7B]" />
          </span>
        </div>
        <div
          className="w-[3.3rem] h-12 flex items-center justify-center
         bg-[#2086EA] rounded-full cursor-pointer"
        >
          <KeyboardVoiceRoundedIcon className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
