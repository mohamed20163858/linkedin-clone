import React, { useEffect, useState } from "react";
// import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EventIcon from "@mui/icons-material/Event";
import Post from "./Post";
import { db } from "./fireBase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import HeaderOption from "./HeaderOption";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: message,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          {/* <CreateIcon /> */}
          <HeaderOption avatar />
          <form>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title={"Media"} color="#70B5F9" />
          <InputOption Icon={EventIcon} title={"Event"} color="#C37D16" />
          <InputOption
            Icon={EditNoteIcon}
            title={"Write article"}
            color="#E06847"
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
