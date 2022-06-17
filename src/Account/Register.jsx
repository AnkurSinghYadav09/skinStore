import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  //    const handleSubmit = ()=>{
  //       return(
  //         window.open("/login")
  //       )
  //    }

  return (
    <div>
      <div>
        <div id="container">
          <div id="register-form">
            <p id="form-heading">About You</p>
            <p class="sign-up-with">Sign Up With</p>
            <div id="sign-face-google-div">
              <a href="https://loginservice.thehut.net/facebook?site=121&subsite=us&shield=true&clientState=eyJyZXR1cm5UbyI6Imh0dHBzJTNBJTJGJTJGd3d3LnNraW5zdG9yZS5jb20lMkZhY2NvdW50SG9tZS5hY2NvdW50In0=&returnUrl=https://www.skinstore.com/socialAuthentication.account">
                <img src="./image/facebook-icon.png" alt="" />
                <span class="login-icon"> Facebook </span>
              </a>

              <a href="https://projectskinstore.herokuapp.com/auth/google">
                <img src="./image/google-icon.png" alt="" />
                <span class="login-icon">Google</span>
              </a>
            </div>
            <hr />
            <p>Or create an email account</p>
            <form>
              <label for="name">*Full Name</label>
              <input type="text" id="name" />
              <span class="message" id="nme"></span>

              <label for="email">*Email address</label>
              <input type="email" id="email" />
              <span class="message" id="eml"></span>

              <label for="con-email">*Confirm Email address</label>
              <input type="email" id="con-email" />
              <span class="message" id="conEmail"></span>

              <label for="password">*Password</label>
              <input type="password" id="password" />
              <span class="message" id="pass"></span>

              <label for="con-password">*confirm Password</label>
              <input type="password" id="con-password" />
              <span class="message" id="conPass"></span>

              <label for="number">Cell Phone Number</label>
              <input type="number" id="number" />
              <span class="message" id="num"></span>

              <div id="referal">
                <label for="ref-code">Referral Code (optional)</label>
                <input type="text" id="ref-code" />
                <span id="ref"></span>
              </div>
              <Link to="/login">
                <input type="submit" value="CONTINUE" id="submit" />
              </Link>

              <p>
                By proceeding, you are confirming that you agree to our
                <a href="##" class="term-cond-link">
                  Terms and Conditions
                </a>{" "}
                and
                <a href="##" class="term-cond-link">
                  Privacy Policy.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
