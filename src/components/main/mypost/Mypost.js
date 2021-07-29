import React from "react";
import Postbox from "./postbox/Postbox";
import Post from "../feed/post/Post";
import "./Mypost.css";
function Mypost() {
  return (
    <div className="mypost">
      <Postbox avatar="./images/avatar.jpg" />
      <Post
        avatar="./images/avatar.jpg"
        name="Shantanu Mishra"
        time="1d"
        topic="Python"
        image="./images/full.PNG"
        description="Hey guys i am completed my first udacity course 'Intro to Machine Learning' ."
      />
      <Post
        avatar="./images/avatar.jpg"
        name="Shantanu Mishra"
        time="5d"
        topic="Self Moto"
        image="./images/sh.jpg"
        description="Rise and shin like a sun glow like moon in sky ."
      />
      <Post
        avatar="./images/avatar.jpg"
        name="Shantanu Mishra"
        time="2w"
        topic="JavaScript"
        image="./images/ss.png"
        description="Hey guys this is my Frist JavaScript project about how we can make a data toggle ."
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

export default Mypost;
