import React from "react";
import "./styles.scss";

export default function App() {
  return (
    <div className="content form">
      <div id="image" className="image-container login-welcome"></div>
      <form action="#" id="loginform">
        <div className="container">
          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            id="username"
            placeholder="Type username"
            name="uname"
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Type password"
            name="psw"
            required
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
