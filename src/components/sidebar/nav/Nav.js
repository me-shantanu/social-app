import React from "react";
import "./Nav.css";

import IconButton from "@material-ui/core/IconButton";
import InsertCommentSharpIcon from "@material-ui/icons/InsertCommentSharp";
import MoreVertSharpIcon from "@material-ui/icons/MoreVertSharp";
import SettingsInputSvideoIcon from "@material-ui/icons/SettingsInputSvideo";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import DuoIcon from "@material-ui/icons/Duo";
function Nav({ avatar }) {
  return (
    <div className="nav">
      <IconButton className="nav_icon_hov">
        <SlowMotionVideoIcon className="nav__icon" />
      </IconButton>
      <IconButton className="nav_icon_hov">
        <InsertCommentSharpIcon className="nav__icon" />
      </IconButton>
      <IconButton className="nav_icon_hov">
        {" "}
        <DuoIcon className="nav__icon" />
      </IconButton>
      <IconButton className="nav_icon_hov">
        <SettingsInputSvideoIcon className="nav__icon" />
      </IconButton>
      <IconButton className="nav_icon_hov">
        <MoreVertSharpIcon className="nav__icon" />
      </IconButton>
    </div>
  );
}

export default Nav;
