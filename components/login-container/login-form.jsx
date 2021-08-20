import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SignInWithGoogle } from "../../utils/firebase-utils";
import CustomButton from "../button/button";

const LoginForm = () => {
  return (
    <form className="flex-row w-full mt-2 items-center ml-auto mr-auto justify-between">
      <input
        type="text"
        placeholder="Email**"
        className="w-4/5 focus:outline-none rounded-full p-2 m-2 max-width-cd"
      />
      <input
        type="text"
        placeholder="Password**"
        className="rounded-full focus:outline-none w-4/5 m-2 p-2"
      />
      <section className="m-auto flex flex-row-reverse justify-between w-3/5 mt-5">
        <FcGoogle
          onClick={SignInWithGoogle}
          fontSize="30"
          style={{ marginTop: 4 }}
        />
        <CustomButton />
      </section>
    </form>
  );
};

export default LoginForm;
