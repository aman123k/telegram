import React from "react";
import MainleftCont from "../component/MainleftCont";
import MainrightCont from "../component/MainrightCont";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return (window.location.href = "/login");
  }
  return (
    <>
      <div className="flex overflow-hidden">
        <MainleftCont />
        <MainrightCont />
      </div>
    </>
  );
}

export default Home;
