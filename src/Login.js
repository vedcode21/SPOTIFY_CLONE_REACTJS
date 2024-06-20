import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://routenote.com/blog/wp-content/uploads/2021/04/Spotify-1.jpg "
        alt="Spotify logo" />
  
      <a href={loginUrl}><b>LOGIN WITH SPOTIFY</b></a>
    </div>
  );
}

export default Login;
