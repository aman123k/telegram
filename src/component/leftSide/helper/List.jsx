import React from 'react'

function List({title,Icon,setItem}) {
  return (
     <div className=" flex items-center gap-8 ml-2 mr-3 cursor-pointer px-3 py-3.5 my-2 
    hover:bg-[#F4F4F5] rounded-md dark:text-white dark:hover:bg-[#2C2C2C]"
    onClick={()=>setItem(true)}
    >
    <Icon className="text-[#808488] " />
        <div className=" font-roboto font-normal tracking-wide">
          {title}
      </div>
    </div>

  )
}

export default List