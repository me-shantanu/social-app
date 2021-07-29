import React from 'react'
import './Chat.css'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar"
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
function Chat() {
    
    return (
        <div className="chat">
           <div className="chat__nav">
               <div className="chat__nav__left">
                   <IconButton>
                       <ArrowBackRoundedIcon className="chat__nav__icon"/>
                   </IconButton>
                   <Avatar className="chat__nav__left__avatar" src ="./images/sh.jpg"/>
                   <div className="chat__nav__left__text">
                       <h5>Shantanu Mishra</h5>
                       <div className="chat__nav__left__text__down">
                           <FiberManualRecordRoundedIcon className="chat__offline"/>
    <p>Last seen: <span>2:17pm</span></p>
                       </div>
                       
                   </div>
               </div>
               <div className="chat__nav__right">
                   <IconButton> <VideocamRoundedIcon className="chat__nav__icon"/></IconButton>
                   <IconButton><PhoneRoundedIcon className="chat__nav__icon"/></IconButton>
                   <IconButton><MoreVertRoundedIcon className="chat__nav__icon"/></IconButton>
               </div>
           </div>
           <div className="chat__body">
               <h1>Today</h1>
           </div>
           <div className="chat__foot">
               <div className="chat__foot__input">
                    <IconButton className="chat__foot__icon__hov__u">
                       <MicRoundedIcon className="chat__foot__icon__u"/>
                    </IconButton>
                    
                    <input type="text" placeholder="Type a message"/>
                    <IconButton><EmojiEmotionsIcon className="chat__foot__icon"/></IconButton>
                    <IconButton>
                       <AttachFileRoundedIcon className="chat__foot__icon"/>
                   </IconButton>
               
               </div>
               <div className="chat__foot__send">
                   <IconButton className="chat__foot__icon__hov__s">
                       <SendRoundedIcon className="chat__foot__icon__s"/>
                   </IconButton>
               </div>
           </div>
            
        </div>
    )
}

export default Chat
