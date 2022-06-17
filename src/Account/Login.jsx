import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div id="container1">
        <div id="login1">
          <h2>Existing Customers</h2>
          <form action="">
            <label for="email">*Email address</label>
            <input type="email" id="email" />
            <span class="message" id="eml">
              {" "}
            </span>

            <label for="password">*Password</label>
            <input type="password" id="password" />
            <span class="message" id="pass">
              {" "}
            </span>

            <p>FORGOTTEN YOUR PASSWORD?</p>
            <Link to="/">
              <input type="submit" value="SIGN IN" />
            </Link>

            <p>or,Continue with</p>
            <div class="log-face-google">
              <a href="##">
                <img
                  src="image/facebook-login-img.png"
                  alt=""
                  class="login-with-img"
                />
              </a>
              <a href="https://projectskinstore.herokuapp.com/auth/google">
                <img
                  src="image/google-login-img.png"
                  alt=""
                  class="login-with-img"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
