import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
const RegisterForm = () => {
  const [visibility, setVisibility] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const onSubmit = data => {
    toast.success(`Hi!!! ${data.name} you are registered `, {
      autoClose: 2000,
      pauseOnHover: false,
      closeButton: false,
    });
  };

  return (
    <div className="flex flex-column align-center registerForm">
      <h2>Register yourself</h2>
      <form className="flex flex-column form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-column formField">
          <label htmlFor="name">Hey there! my name is</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: true,
              pattern: {
                value: nameRegex,
              },
            })}
            onFocus={() => setVisibility(true)}
          />
        </div>
        {visibility && (
          <>
            <div className="flex flex-column formField fadeIn">
              <label htmlFor="email">
                Here is my <b>email address:</b>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  pattern: {
                    value: emailRegex,
                  },
                })}
              />
            </div>
            <div className="flex flex-column formField fadeIn">
              <label htmlFor="password">
                And here is my <b>password:</b>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  pattern: { value: passwordRegex },
                })}
              />
            </div>
            <button type="submit" className="fadeIn">
              Sign up
            </button>
          </>
        )}
      </form>
      <div className=" errors hidden">
        {errors.name &&
          toast.error("Name should not contain numbers or special chars")}
        {errors.email && toast.error("Enter valid Email address")}
        {errors.password &&
          toast.error(
            "Password must be between 8-16 chars with at least one capital, one small, one numeric and one special character"
          )}
      </div>
      <ToastContainer theme="colored" autoClose={2000} closeButton={false} />
    </div>
  );
};

export default RegisterForm;
