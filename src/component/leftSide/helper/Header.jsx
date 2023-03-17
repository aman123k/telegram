import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function Header({title,setItems}) {
  return (
      <header
          className=" py-1.5 px-3 bg-white select-none dark:bg-[#212121]
           sticky top-0 border-b dark:border-[#707579] z-50"
        >
          <div className=" flex gap-2.5 items-center">
            <button
              className="hover:bg-[#F4F4F4] dark:hover:bg-[#2B2B2B] p-2 rounded-full text-[#7C7F82]"
              onClick={() => setItems(false)}
            >
              <ArrowBackRoundedIcon />
            </button>
            <p className=" text-xl tracking-wide font-roboto dark:text-white">
              {title}
            </p>
          </div>
        </header> 
  )
}

export default Header