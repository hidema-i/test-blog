import { signOut } from "firebase/auth";
import React from "react";
// import "../components/style/Login.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    //
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div>
      <p>Logout</p>
      <button onClick={logout}>logoutする</button>
    </div>
  );
};

export default Logout;
