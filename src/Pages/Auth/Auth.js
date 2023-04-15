import React, { useState } from "react";

const Auth = () => {
  const [slide, setSlide] = useState(false);
  let slideProp;
  slide && (slideProp = { left: "440px" });

  let formSlideProp;
  slide && (formSlideProp = { left: "-900px" });

  let colorProp;
  slide && (colorProp = { color: "#fff", transition: "color 0.9s ease" });

  let invertColorProp;
  !slide &&
    (invertColorProp = { color: "#fff", transition: "color 0.9s ease" });
  return (
    <div className="container">
      <div className="image-container">
        <h2>Welcome to Split wisely</h2>
      </div>
      <div className="auth-forms">
        <div className={"slider"} style={slideProp}></div>
        <div className="form-btns">
          <button onClick={() => setSlide(false)} style={invertColorProp}>
            Login
          </button>
          <button onClick={() => setSlide(true)} style={colorProp}>
            Sign up
          </button>
        </div>
        <div className="form-section" style={formSlideProp}>
          <form className="login-form">
            <h2>LOGIN FORM</h2>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
          </form>
          <form className="signup-form">
            <h2>SIGN UP FORM</h2>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
