import React from 'react'
import './Stories.css'

 import Singlestory from './singlestory/Singlestory'
 import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
 import IconButton from "@material-ui/core/IconButton";
import AddStory from './singlestory/Addstory'
function Stories() {
    return (
        <div className="stories">
            <div className="stories__nav">
                <IconButton>
                    <ArrowBackIosRoundedIcon className="stories__nav__icon"/>
                </IconButton>
                <h4>Stories</h4>
            </div>
            <div className="stories__mid">
                <AddStory avatar="./images/sh.jpg"/>
               <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                <Singlestory  friendname="Shurabh Gupta" friendavatar="./images/shurabhp.jpg"/>
                
                
                </div>
            
            
        </div>
    )
}

export default Stories

