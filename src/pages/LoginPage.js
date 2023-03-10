import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import uplodeImage from "../component/helper/uplodeImage";
function LoginPage() {
  const theme = localStorage.getItem("theme");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);

  const selctFile = () => {
    const file = document.querySelector("#file");
    file.click();
  };
  const user = {
    name: name,
    userName: userName,
    phone: phone,
    password: password,
    picture: picture,
    bio: "",
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (
      picture === null &&
      name === "" &&
      userName === "" &&
      phone === "" &&
      password === "" &&
      phone === ""
    ) {
      if (theme === "light") {
        toast.error("Please fill information", {
          duration: 1200,
        });
      } else {
        toast.error("Please fill information", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
      }
      return;
    } else if (picture === null) {
      if (theme === "light") {
        toast.error("Select picture", {
          duration: 1200,
        });
      } else {
        toast.error("Select picture", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
      }
      return;
    } else if (name === "") {
      if (theme === "light") {
        toast.error("Name can't be empty", {
          duration: 1200,
        });
      } else {
        toast.error("Name can't be empty", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
      }
      return;
    } else if (userName === "") {
      if (theme === "light") {
        toast.error("UserName can't be empty", {
          duration: 1200,
        });
      } else {
        toast.error("UserName can't be empty", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
        return;
      }
    } else if (phone === "" || !phone.match(/^[1-9]\d{9}$|^(?!0{10})\d{10}$/)) {
      if (theme === "light") {
        toast.error("Enter phone number", {
          duration: 1200,
        });
      } else {
        toast.error("Enter phone number", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
        return;
      }
    } else if (
      password === "" ||
      !password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      if (theme === "light") {
        toast.error(
          "password should contain minimum 8 digit special characters and numbers",
          {
            duration: 1200,
          }
        );
      } else {
        toast.error("Password should contain special characters and numbers", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
        return;
      }
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      if (theme === "light") {
        toast.success("login successfull", {
          duration: 1200,
        });
      } else {
        toast.success("login successfull", {
          duration: 1200,
          style: {
            background: "#333333",
            color: "#ffffff",
          },
        });
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }
  };

  return (
    <div
      className=" flex flex-col h-screen justify-center
     bg-[#EEEEEE] w-full dark:bg-[#121212] select-none max-[650px]:px-3"
    >
      <div
        className=" flex flex-col justify-center border-[1.5px] border-[#C5C5C5] dark:border-[#555555]
        p-5  rounded-lg w-[22rem] max-[650px]:w-full ml-[50%] translate-x-[-50%] bg-white gap-3.5 dark:bg-[#212121]
        dark:text-white"
      >
        <h2 className="text-center font-semibold tracking-wide">
          log in to Telegram
        </h2>
        <hr className="dark:border-[#555555]" />
        <form action="" className="">
          <div
            className="w-[4.5rem] h-[4.5rem] bg-[#FEF3C7] flex items-center justify-center
             rounded-full ml-[50%] translate-x-[-50%] cursor-pointer "
            onClick={selctFile}
          >
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => uplodeImage(e, setPicture)}
            />
            <div className="text-sm text-[#94907F] font-bold overflow-hidden">
              {picture ? (
                <img
                  className="w-[4.5rem] h-[4.5rem] rounded-full"
                  src={picture}
                  alt={name}
                />
              ) : (
                <Person3OutlinedIcon />
              )}
            </div>
          </div>
          <div>
            <label className=" flex text-[16px] dark:text-white ">
              Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              value={name}
              className="dark:text-white w-full bg-[#EEEEEE] px-3 py-2 
            rounded-md mt-1 dark:bg-[#333333]"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div>
            <label className=" flex  text-[16px] dark:text-white ">
              User Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              value={userName}
              className="dark:text-white w-full bg-[#EEEEEE] px-3 py-2
            dark:bg-[#333333] rounded-md mt-1"
              onChange={(e) => setUserName(e.currentTarget.value)}
            />
          </div>
          <div>
            <label className=" flex  text-[16px] dark:text-white ">
              Your Phone
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              value={phone}
              className="dark:text-white w-full bg-[#EEEEEE] px-3 py-2 rounded-md
            dark:bg-[#333333] mt-1 "
              onChange={(e) => setPhone(e.currentTarget.value)}
            />
          </div>
          <div>
            <label className=" flex  text-[16px] dark:text-white ">
              Password
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="password"
              value={password}
              className=" dark:text-white w-full bg-[#EEEEEE] px-3 py-2
            dark:bg-[#333333] rounded-md mt-1"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <button
            onClick={submitForm}
            className=" bg-[#3B82F6] w-full mt-3 text-white py-2 rounded-md cursor-pointer"
            value=" LogIn"
          >
            Log in
            <Toaster />
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
