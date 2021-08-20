import React from "react";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <div className="text-center flex-col m-auto mt-10 justify-center items-center bg-gray-800 p-5 pt-10 w-3/5  rounded-full border border-black hover:bg-gray-900 transition duration-1000 ease-in">
      <span className="text-white text-center">Please login..</span>
      <LoginForm />
    </div>
  );
};

export default Login;
