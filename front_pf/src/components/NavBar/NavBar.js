import React from "react";
import {Link} from "react-router-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={s.container}>
      <Link to="/">
        <h1 id={s.logo}>logo</h1>
      </Link>
      <div className={s.btns}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}