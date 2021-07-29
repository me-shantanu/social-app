import React from "react";
import "./Sidebar.css";
import Nav from "./nav/Nav";
import SideBody from "./body/SideBody";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from '../chats/Chat'
import Stories from '../stories/Stories'

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav />
      {/* <Stories/> */}
      {/* <div className="sidebar__search">
        <div className="sidebar__searchcontainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        
        <SideBody
          image="./images/avatar.jpg"
          name="Shantanu Mishra"
          lastmess="This was the last mess"
        />
        
      </div> */}
      <Chat/>
    </div>
  );
}

export default Sidebar;
