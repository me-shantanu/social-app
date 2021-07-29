import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "./SideBody.css";
function SideBody({ image, name, lastmess,chatpath }) {
  return (
    <div className="sidebody" >
      <Avatar src={image} />
      <div className="sidebody__chat">
        <h2>{name}</h2>
        <p>{lastmess}</p>
      </div>
    </div>
  );
}

export default SideBody;
