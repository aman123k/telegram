import React, { useContext } from "react";
import Archivedchats from "./leftSide/Archivedchats";
import Hearder from "./leftSide/Hearder";

import { ThemeContext } from "../context/global";
import List from "./leftSide/List";
import UserSetting from "./leftSide/UserSetting";

function MainleftCont() {
  const { archive, userId, setting } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`relative top-0 w-[34%] shadow-[#F4F4F5]-500/50 duration-500
          bg-white dark:bg-[#121212] max-[650px]:absolute
       ${
         userId
           ? "max-[650px]:translate-x-[-300%]"
           : "max-[650px]:translate-x-[0%] max-[650px]:w-full"
       }
       `}
      >
        <div
          className={`dark:bg-[#212121] dark:border-[#161618] duration-700 bg-white 
           ${archive || setting ? "translate-x-[-100%]" : ""}  border-r `}
        >
          <Hearder />
          <List />
        </div>
        <Archivedchats />
        <UserSetting />
      </div>
    </>
  );
}

export default MainleftCont;
