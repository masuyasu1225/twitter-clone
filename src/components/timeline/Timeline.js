import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    console.log(querySnapshot.docs.map((doc) => doc.data()));
  });

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post
        displayName="プログラミングチュートリアル"
        username="Shin_Engineer"
        verified={true}
        text="初めてのツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}

export default Timeline;
