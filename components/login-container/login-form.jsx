import React from "react";
import { FcGoogle } from "react-icons/fc";
import { connect } from "react-redux";
import CustomButton from "../button/button";
import { googleSignInStart } from "../../redux/user/actions";

const LoginForm = ({ googleSignIn }) => {
  return (
    <form className="flex-row w-full mt-2 items-center ml-auto mr-auto justify-between">
      <input
        type="text"
        placeholder="Email**"
        className="w-4/5 focus:outline-none max-w-xl rounded-full pl-10 p-2 m-2 max-width-cd"
      />
      <input
        type="password"
        placeholder="Password**"
        className="rounded-full focus:outline-none w-4/5 m-2 max-w-xl pl-10 p-2"
      />
      <section className="m-auto flex flex-row-reverse justify-between w-3/5 mt-5">
        <CustomButton />
        <FcGoogle
          onClick={googleSignIn}
          fontSize="30"
          style={{ marginTop: 4 }}
        />
      </section>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(LoginForm);
