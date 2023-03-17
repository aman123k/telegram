import React, { useContext } from "react";
import { ThemeContext } from "../../context/global";
import Header from "./helper/Header";
function Archivedchats() {
  const { archive, setArchive, t } = useContext(ThemeContext);
  return (
    <div
      className={` absolute top-0 pt-2 h-screen w-full duration-700
           dark:bg-[#212121] dark:border-[#161618] border-r bg-white
           ${archive ? " translate-x-0" : "translate-x-[-100%]"}
        `}
    >
      <Header title={t("Menubar.Archived Chats")} setItems={setArchive} />
    </div>
  );
}

export default Archivedchats;
