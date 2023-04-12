import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <h2>Register yourself</h2>
      <form className="form registerForm flex flex-column">
        <div className="formField flex flex-column">
          <label>Hey there! my name is</label>
          <input type="text" required />
        </div>
        <div className="formField flex flex-column">
          <label>Here is my Email:</label>
          <input type="email" required />
        </div>
        <div className="formField flex flex-column">
          <label>And here is my password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
