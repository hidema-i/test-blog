import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "../components/style/Home.css";
import { auth, db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);

  //リロードした時に一度だけ表示
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ doc })));
      // console.log(data.docs.map((doc) => ({ ...doc.data().author })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>

            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {/* 誰でも削除できないように */}
              {post.author.id === auth.currentUser.uid && (
                <button onClick={() => handleDelete(post.id)}>DELETE</button>
              )}
              {/* <button onClick={() => handleDelete(post.id)}>DELETE</button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
