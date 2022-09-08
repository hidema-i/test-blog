import React from "react";
import "../components/style/Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>Title</h1>
        </div>

        <div className="postTextContainer">
          Hello! I'm Muk! I have a friend named Sansho.
        </div>
        <div className="nameAndDeleteButton">
          <h3>@TestCode</h3>
          <button>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
