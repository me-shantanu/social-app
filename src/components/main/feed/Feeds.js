import React from "react";
import Post from "./post/Post";
import "./Feeds.css";
function Feeds() {
  return (
    <div className="feeds">
      <Post
        avatar="./images/postavatar.jpg"
        name="Rishu Mishra"
        time="10s"
        topic="Photographic"
        image="./images/post.jpeg"
        description="Hey this is a random click with my new camera rate my work guys and put your views"
      />
      <Post
        avatar="./images/postavatar.jpg"
        name="Rishu Mishra"
        time="10s"
        topic="Photographic"
        image="./images/post.jpeg"
        description="Hey this is a random click with my new camera rate my work guys and put your views"
      />
      <Post
        avatar="./images/postavatar.jpg"
        name="Rishu Mishra"
        time="10s"
        topic="Photographic"
        image="./images/post.jpeg"
        description="Hey this is a random click with my new camera rate my work guys and put your views"
      />
      <Post
        avatar="./images/postavatar.jpg"
        name="Rishu Mishra"
        time="10s"
        topic="Photographic"
        image="./images/post.jpeg"
        description="Hey this is a random click with my new camera rate my work guys and put your views"
      />
    </div>
  );
}

export default Feeds;
