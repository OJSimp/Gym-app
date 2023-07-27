"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

//Hooks

// Components
import TextInput from "../../(inputs)/TextInput";
import IconTextInput from "../../(inputs)/IconTextInput";

// Icons
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const LogIn = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault(e);
    console.log("log in", user);
  };

  return (
    <section className="sign-up--form form-container">
      <form className="form__sign-up" onSubmit={handleLogIn}>
        <header className="form__header">
          <h5>Welcome back</h5>
          <p>Please Log into your account.</p>
        </header>
        <div className="form__body">
          {/* Enter Email Address */}

          <TextInput
            id="email-address"
            type="email"
            label="Email addresss"
            error=""
            name="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />

          {/* Enter Password */}
          <IconTextInput
            id="password"
            type="password"
            label="Password"
            error=""
            name="password"
            icon={true}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />

          <Link href="/">Forgot password?</Link>
        </div>
        <div className="form__btns">
          <button
            // disabled={sigUpMutation.isLoading}
            type="submit"
            className="btn btn-primary"
          >
            {/* {sigUpMutation.isLoading ? "Loading..." : "Continue"} */}
            Log in
          </button>

          <p className="light1 center">
            Don't have an account?{" "}
            <Link href="signup" className="btn-text">
              Sign up
            </Link>
          </p>

          <div className="divider">
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <button
            type="button"
            className="btn btn-outline btn-outline--align-left"
          >
            <GoogleIcon />
            <span>Log in with Google</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-outline--align-left"
          >
            <FacebookIcon />
            <span>Log in with Facebook</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-outline--align-left"
          >
            <AppleIcon />
            <span>Log in with Apple</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
