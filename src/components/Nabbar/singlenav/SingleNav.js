import React from "react";
import { Link } from "react-router-dom";
import "./SingleNav.css";

function SingleNav({ path, active, Icon, text }) {
  return (
    <Link className="singlenav__link" to={path}>
      <div className={`singlenav ${active && "singlenav__active"}`}>
        <Icon className="singlenav__icon" />
      </div>
    </Link>
  );
}

export default SingleNav;
