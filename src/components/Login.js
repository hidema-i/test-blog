import { signInWithPopup } from "firebase/auth";
import React from "react";
import "../components/style/Login.css";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //GoogleでLogin
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      {/* <p>login</p>
      <button onClick={loginInWithGoogle}>login</button> */}
      <div className="login-page">
        <div className="form">
          <h1>Login with Google</h1>
          <button onClick={loginInWithGoogle}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
