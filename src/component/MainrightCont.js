import { ThemeContext } from "../context/global";
import Hearder from "../component/rightSide/Hearder";
import { useContext } from "react";
import UserInput from "./rightSide/UserInput";
import { useParams } from "react-router-dom";
function MainrightCont() {
  const { userId, setMenu } = useContext(ThemeContext);
  const { id } = useParams();
  return (
    <div
      className={`h-screen w-[66%] relative 
      bg-[#EEEEEE] dark:bg-[#121212] duration-200
     ${
       userId
         ? "max-[650px]:translate-x-[0%] max-[650px]:w-full"
         : "max-[650px]:translate-x-[300%]"
     } `}
      onClick={() => setMenu(false)}
    >
      <Hearder />
      {id ? <UserInput /> : ""}
    </div>
  );
}
export default MainrightCont;
