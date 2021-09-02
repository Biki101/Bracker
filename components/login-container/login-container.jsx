import React from "react";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <div className="text-center flex-col m-auto mt-10 justify-center items-center bg-gray-600 p-5 pt-10 w-3/5  rounded-full border-2 border-black hover:bg-gray-900 transition duration-1000 ease-in max-w-4xl">
      <span className="text-white text-center text-xl">Please login..</span>
      <LoginForm />
    </div>
  );
};

export default Login;
