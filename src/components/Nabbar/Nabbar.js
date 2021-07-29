import React from "react";
import "./Nabbar.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import SingleNav from "./singlenav/SingleNav";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CodeIcon from "@material-ui/icons/Code";
import SchoolIcon from "@material-ui/icons/School";

function Nabbar({ avatar }) {
  return (
    <div className="nabbar">
      <SingleNav active path="/" Icon={HomeIcon} />
      <SingleNav path="/search" Icon={SearchIcon} />
      <SingleNav path="/notification" Icon={NotificationsIcon} />
      <SingleNav path="/project" Icon={CodeIcon} />
      <SingleNav path="/learn" Icon={SchoolIcon} />
      <Link to="/profile">
        <Avatar className="nav__avatar" src={avatar} />
      </Link>
    </div>
  );
}

export default Nabbar;
