import React from "react";
import Mypost from "./mypost/Mypost";
import Feeds from "./feed/Feeds";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <h1 className="main__title">Home</h1>
      <div className="main__body">
        <Mypost />
        <Feeds />
      </div>
    </div>
  );
}

export default Main;
