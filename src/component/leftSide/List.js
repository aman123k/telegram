import React, { useEffect, useState, useContext } from "react";
import { users } from "../../data/users";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/global";

function List() {
  const { value, setMenu, userId } = useContext(ThemeContext);
  const [user, setUser] = useState(users);

  useEffect(() => {
    let userSearch = users.filter((user) => {
      return user.name.includes(value);
    });
    setUser(userSearch);
  }, [value]);

  return (
    <div
      className="pr-3 pb-3 scrollbar-thin scrollbar-thumb-[#CDCDCD] 
      h-[92vh] max-[650px]:h-screen scroll-smooth dark:scrollbar-thumb-[#323232]
    "
    >
      {user.map((user) => {
        return (
          <Link to={`/MainrightCont/${user.id}`} key={user.id}>
            <div
              className=" flex gap-3 items-center rounded-lg dark:hover:bg-[#2C2C2C]
                  hover:bg-[#F4F4F5] py-2.5 px-3 ml-2 font-ubuntu select-none cursor-pointer"
              onClick={() => setMenu(false)}
              style={{
                background: userId === user.id.toString() ? "#3390EC" : "",
                color: userId === user.id.toString() ? "#FFFFFF" : "",
              }}
            >
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#B9C2CA]">
                {user.image ? (
                  <img
                    className=" w-full h-full rounded-full bg-[#B9C2CA]"
                    src={user.image}
                    alt="👽"
                  />
                ) : (
                  <span>💀</span>
                )}
              </div>
              <div className=" w-5/6">
                <div className=" flex justify-between w-full">
                  <p className="font-semibold dark:text-white">{user.name}</p>
                  <span
                    className="text-[#70777D] text-[13px]"
                    style={{
                      color: userId === user.id.toString() ? "#FFFFFF" : "",
                    }}
                  >
                    {user.time}
                  </span>
                </div>
                <p
                  className="text-[#70777D]"
                  style={{
                    color: userId === user.id.toString() ? "#FFFFFF" : "",
                  }}
                >
                  {user.lastMessage}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default List;
