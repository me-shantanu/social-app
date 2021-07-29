import React from 'react'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './Addstory.css'
import { Avatar } from '@material-ui/core'
function Addstory({avatar}) {
    return (
        <div className="addstory">
            <Avatar src={avatar} className="addstory__avatar"/>
            <AddRoundedIcon className="addstory__icon"/>
        </div>
    )
}

export default Addstory
