import React, { createContext, useState, useEffect } from "react";
import English_file from "../treanslation/English.json";
import French_file from "../treanslation/French.json";
import Japanese_file from "../treanslation/Japanese.json";
import Quechua_file from "../treanslation/Quechua.json";
import Hindi_file from "../treanslation/Hindi.json";
import Punjabi_file from "../treanslation/Punjabi.json";
import Russian_file from "../treanslation/Russian.json";
import Dutch_file from "../treanslation/Dutch.json";
import Spanish_file from "../treanslation/Spanish.json";
import Hawaiian_file from "../treanslation/Hawaiian.json";
import Ukrainian_file from "../treanslation/Ukrainian.json";
import Uzbek_file from "../treanslation/Uzbek.json";
import Swedish_file from "../treanslation/Swedish.json";
import Slovak_file from "../treanslation/Slovak.json";
import Malay_file from "../treanslation/Malay.json";
import Korean_file from "../treanslation/Korean.json";
import Catalan_file from "../treanslation/Catalan.json";
import Norwegian_file from "../treanslation/Norwegian.json";
import Polish_file from "../treanslation/Polish.json";
import Hmong_file from "../treanslation/Hmong.json";
import Turkish_file from "../treanslation/Turkish.json";
import Romanian_file from "../treanslation/Romanian.json";
import Italian_file from "../treanslation/Italian.json";
import Gujarati_file from "../treanslation/Gujarati.json";
import Bangla_file from "../treanslation/Bangla.json";
import Ganda_file from "../treanslation/Ganda.json";
import Basque_file from "../treanslation/Basque.json";

const ThemeContext = createContext();

function accessNestedObject(obj, key) {
  if (!key.includes(".")) return obj[key];

  const splittedKeys = key.split(".");

  let result = "";

  splittedKeys.reduce((acc, curr) => {
    const new_obj = acc[curr];
    if (typeof new_obj === "string") {
      result = new_obj;
    }
    return new_obj;
  }, obj);

  return result;
}
function ThemeContextProvider(props) {
  const darkMode = localStorage.getItem("theme");
  const BGIMAGE = localStorage.getItem("BGIMAGE");
  const [theme, setTheme] = useState(darkMode);
  const [menu, setMenu] = useState(false);
  const [archive, setArchive] = useState(false);
  const [setting, setSetting] = useState(false);
  const [value, setValue] = useState("");
  const [userId, setUserId] = useState("");
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [image, setImage] = useState(BGIMAGE);
  const [font, setFont] = useState();
  const defaultLanguage = localStorage.getItem("language");

  const [language, setLanguage] = useState(
    defaultLanguage ? defaultLanguage : "English"
  );
  const t = (key) => {
    if (language === "English")
      return accessNestedObject(English_file, key) || key;
    if (language === "Français")
      return accessNestedObject(French_file, key) || key;
    if (language === "日本")
      return accessNestedObject(Japanese_file, key) || key;
    if (language === "Runasimi")
      return accessNestedObject(Quechua_file, key) || key;
    if (language === "हिंदी") return accessNestedObject(Hindi_file, key) || key;
    if (language === "ਪੰਜਾਬੀ")
      return accessNestedObject(Punjabi_file, key) || key;
    if (language === "Русский")
      return accessNestedObject(Russian_file, key) || key;
    if (language === "Nederlands")
      return accessNestedObject(Dutch_file, key) || key;
    if (language === "Español")
      return accessNestedObject(Spanish_file, key) || key;
    if (language === "Ōlelo Hawaiʻi")
      return accessNestedObject(Hawaiian_file, key) || key;
    if (language === "українська")
      return accessNestedObject(Ukrainian_file, key) || key;
    if (language === "o'zbek")
      return accessNestedObject(Uzbek_file, key) || key;
    if (language === "svenska")
      return accessNestedObject(Swedish_file, key) || key;
    if (language === "slovenský")
      return accessNestedObject(Slovak_file, key) || key;
    if (language === "Bahasa Melayu")
      return accessNestedObject(Malay_file, key) || key;
    if (language === "한국인")
      return accessNestedObject(Korean_file, key) || key;
    if (language === "català")
      return accessNestedObject(Catalan_file, key) || key;
    if (language === "Norsk(Bokmal)")
      return accessNestedObject(Norwegian_file, key) || key;
    if (language === "Polski")
      return accessNestedObject(Polish_file, key) || key;
    if (language === "Hmoob") return accessNestedObject(Hmong_file, key) || key;
    if (language === "Türkçe")
      return accessNestedObject(Turkish_file, key) || key;
    if (language === "Română")
      return accessNestedObject(Romanian_file, key) || key;
    if (language === "Italiano(masculine)")
      return accessNestedObject(Italian_file, key) || key;
    if (language === "ગુજરાતી")
      return accessNestedObject(Gujarati_file, key) || key;
    if (language === "বাংলা")
      return accessNestedObject(Bangla_file, key) || key;
    if (language === "Ganda") return accessNestedObject(Ganda_file, key) || key;
    if (language === "euskara")
      return accessNestedObject(Basque_file, key) || key;

    return key;
  };

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
        image,
        setImage,
        setLanguage,
        t,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
