import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import "../components/style/CreatePost .css";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  //redirect
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>Submit an article</h1>
        <div className="inputPost">
          <div>Title</div>
          <input
            type="text"
            placeholder="Fill in the title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>posting</div>
          <textarea
            placeholder="Fill in your submission"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          Posting
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
