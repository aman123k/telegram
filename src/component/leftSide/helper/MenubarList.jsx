import React from 'react'

function MenubarList({title,Icon,setTrue,setToggle}) {
  return (
    <li
     className=" hover:bg-[#EEEEEE] px-2.5 text-sm flex gap-5 py-1 
        cursor-pointer tracking-wide dark:hover:bg-[#141414] rounded-md items-center"
        onClick={() => {
              setTrue(true);
              setToggle();
        }}
        >
        <Icon className=" text-[#899196]" />
        <span>{title}</span>
    </li>
  )
}

export default MenubarList