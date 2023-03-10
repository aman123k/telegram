import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const darkMode = localStorage.getItem("theme");
  const [theme, setTheme] = useState(darkMode);
  const [menu, setMenu] = useState(false);
  const [archive, setArchive] = useState(false);
  const [setting, setSetting] = useState(false);

  const [value, setValue] = useState("");
  const [userId, setUserId] = useState("");
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [font, setFont] = useState();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleDarkMode,
        menu,
        setMenu,
        toggleMenu,
        archive,
        setArchive,
        value,
        setValue,
        userId,
        setUserId,
        search,
        setSearch,
        profile,
        setProfile,
        setting,
        setSetting,
        font,
        setFont,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
