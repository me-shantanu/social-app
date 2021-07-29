import { Avatar } from '@material-ui/core'
import React from 'react'
import './Singlestory.css'

function Singlestory({story,friendavatar,friendname}) {
    return (
        <div className="singlestory">
            <Avatar src={friendavatar} className="singlestory__avatar"/>
            <h5> {friendname}</h5>
            </div>
    )
}

export default Singlestory
