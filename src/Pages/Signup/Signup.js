import React from "react";
import RegisterForm from "../../Components/forms/RegisterForm";
import Logo from "../../Assets/svgs/split.svg";

const Signup = () => {
  return (
    <div className="flex justify-center align-center signup">
      <img src={Logo} alt="Splitwise logo" />
      <RegisterForm />
    </div>
  );
};

export default Signup;
