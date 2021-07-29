import React from "react";
import "./Post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";

function Post({ avatar, name, time, topic, image, description }) {
  return (
    <div className="post">
      <div className="post__head">
        <div classNam="post__head__up">
          <div className="post__head__left">
            <div className="post__head__main">
              <Avatar src={avatar} />
              <div className="post__head__left__text">
                <h5>{name}</h5>
                <p>
                  {time} ago • {topic}
                </p>
              </div>
            </div>

            <div className="post__head__right">
              <IconButton className="post__foot__btn">
                <MoreVertIcon className="post__head__right__icon" />
              </IconButton>
            </div>
          </div>
        </div>

        <div classNam="post__head__down">
          <p className="post__head__down__des">{description}</p>
        </div>
      </div>
      <div className="post__avtar">
        <img src={image} alt={name} />
      </div>
      <div className="post__foot">
        <IconButton className="post__foot__btn">
          <StarRoundedIcon className="post__foot__icon" />{" "}
        </IconButton>
        <IconButton className="post__foot__btn">
          <ChatBubbleRoundedIcon className="post__foot__icon" />
        </IconButton>
        <IconButton className="post__foot__btn">
          <ShareRoundedIcon className="post__foot__icon" />
        </IconButton>
        <IconButton className="post__foot__btn">
          <BookmarksRoundedIcon className="post__foot__icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Post;
