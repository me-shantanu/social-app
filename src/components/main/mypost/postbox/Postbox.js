import React from "react";
import "./Postbox.css";
import ImageRoundedIcon from "@material-ui/icons/ImageRounded";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import AudiotrackRoundedIcon from "@material-ui/icons/AudiotrackRounded";
import { Avatar, Button } from "@material-ui/core";
function Postbox({ avatar }) {
  return (
    <div className="postbox">
      <form>
        <div className="postbox-input">
          <Avatar name="Wim Mostmans" src={avatar} />
          <input placeholder="What's going on ?" type="text"></input>
        </div>
        <div className="postbox-file">
          <input type="file" id="file" accept="image/*" capture />
          <label for="file">
            <ImageRoundedIcon className="postbox__icon" />
          </label>
          <input type="file" id="filev" accept="video/*" capture />
          <label for="filev">
            <MovieCreationRoundedIcon className="postbox__icon" />
          </label>
          <input type="file" id="filea" accept="video/*" capture />
          <label for="filea">
            <AudiotrackRoundedIcon className="postbox__icon" />
          </label>
          <Button className="postbox-postbtn">Post</Button>
        </div>
      </form>
    </div>
  );
}

export default Postbox;
