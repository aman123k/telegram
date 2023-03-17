import React from 'react'

function Chatbg({Icon,title,removeItem}) {
 return (
     <div className=" flex items-center gap-7 mx-2 cursor-pointer p-3  mr
    hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
    onClick={removeItem}
    >
    <Icon className="text-[#808488] scale-105 " />
        <div className=" font-roboto font-normal text-[.988rem] dark:text-white text-[#242629]">
          {title}
      </div>
    </div>

  )
}

export default Chatbg