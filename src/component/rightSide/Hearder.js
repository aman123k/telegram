import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { users } from "../../data/users";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { ThemeContext } from "../../context/global";
import UserInfo from "../../component/rightSide/UserInfo";
import Message from "../../component/rightSide/Message";
import SaveMassage from "./SaveMassage";
function Hearder() {
  const { id } = useParams();
  const navigation = useNavigate();
  const { setUserId, setSearch, setProfile } = useContext(ThemeContext);
  const newUser = users.filter((user) => {
    return user.id.toString() === id;
  });
  useEffect(() => {
    setUserId(id);
  }, [id, setUserId]);
  if (!id) {
    return (
      <div
        className=" bg-[#EEEEEE] dark:bg-[#121212] 
       h-screen "
      ></div>
    );
  } else if (id === "2093858") {
    return (
      <div className={`relative select-none duration-200`}>
        <header
          className=" bg-[#FFFFFF] flex justify-between py-2 px-6 items-center sticky top-0
          dark:text-white font-roboto dark:bg-[#212121] max-[780px]:px-2  h-[8vh]"
        >
          <section className=" flex items-center gap-4">
            <div
              className="max-[650px]:block hidden cursor-pointer
              hover:bg-[#F4F4F4] dark:hover:bg-[#2C2C2C] p-2 rounded-full
              "
              onClick={() =>
                setTimeout(() => {
                  navigation(-1);
                }, 200)
              }
            >
              <ArrowBackRoundedIcon className="text-[#707579]" />
            </div>
            <div
              onClick={() => setProfile(true)}
              className=" flex gap-3 items-center cursor-pointer"
            >
              <div className=" w-10 h-10 ">
                <img
                  className="w-full h-full bg-cover rounded-full"
                  src="https://static9.tgstat.ru/channels/_0/3b/3bdc7810ebf4c3de0646923f39267695.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2 className=" font-semibold max-[780px]:sm">Saved Message</h2>
              </div>
            </div>
          </section>
          <div className=" flex gap-2 text-[#707579] max-[780px]:gap-1">
            <button
              onClick={() => setSearch(true)}
              className=" hover:bg-[#F4F4F4] dark:hover:bg-[#2C2C2C] p-2 flex items-center rounded-full max-[780px]:p-1.5"
            >
              <SearchRoundedIcon />
            </button>
            <button className=" hover:bg-[#F4F4F4] dark:hover:bg-[#2C2C2C] p-2 flex items-center rounded-full max-[780px]:p-1.5">
              <MoreVertRoundedIcon />
            </button>
          </div>
          <SaveMassage />
          <Message />
        </header>
      </div>
    );
  } else {
    return (
      <div className={`relative select-none duration-200`}>
        <header
          className=" bg-[#FFFFFF] flex justify-between py-2 px-6 items-center
          dark:text-white font-roboto dark:bg-[#212121] max-[780px]:px-2 h-[8vh]"
        >
          <section className=" flex items-center gap-4">
            <div
              className="max-[650px]:block hidden cursor-pointer
              hover:bg-[#F4F4F4] dark:hover:bg-[#2C2C2C] p-2 rounded-full
              "
              onClick={() =>
                setTimeout(() => {
                  navigation(-1);
                }, 200)
              }
            >
              <ArrowBackRoundedIcon className="text-[#707579]" />
            </div>
            <div
              onClick={() => setProfile(true)}
              className=" flex gap-3 items-center cursor-pointer"
            >
              <div
                className=" w-10 h-10 rounded-full flex items-center 
              justify-center bg-[#B9C2CA]"
              >
                {newUser[0].image ? (
                  <img
                    className="rounded-full w-full h-full"
                    src={newUser[0].image}
                    alt=""
                  />
                ) : (
                  <span>💀</span>
                )}
              </div>
              <div>
                <h2 className=" font-semibold max-[780px]:sm">
                  {newUser[0].name}
                </h2>
                <p className="text-xs text-[#919598]">
                  last seen {newUser[0].lastSeen}
                </p>
              </div>
            </div>
          </section>
          <div className=" flex gap-2 text-[#707579] max-[780px]:gap-1">
            <button
              onClick={() => setSearch(true)}
              className=" hover:bg-[#F4F4F4] dark:hover:bg-[#2C2C2C] p-2 flex items-center rounded-full max-[780px]:p-1.5"
            >
              <SearchRoundedIcon />
            </button>
            <button className=" hover:bg-[#F4F4F4] dark:hover:bg-[#2C2C2C] p-2 flex items-center rounded-full max-[780px]:p-1.5">
              <LocalPhoneRoundedIcon />
            </button>
            <button className=" hover:bg-[#F4F4F4] dark:hover:bg-[#2C2C2C] p-2 flex items-center rounded-full max-[780px]:p-1.5">
              <MoreVertRoundedIcon />
            </button>
          </div>
        </header>
        <UserInfo id={id} />
        <Message />
      </div>
    );
  }
}

export default Hearder;
