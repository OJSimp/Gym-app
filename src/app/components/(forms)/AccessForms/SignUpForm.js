"use client";
import "./SignUpForm.scss";

import Link from "next/link";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
// import { toast } from "react-hot-toast";
import { useMutation } from "react-query";

// Hooks
import { useSignUp } from "../../../hooks/useSignUp";
// import POST from "../../api/auth/signup/route";

// Components
import TextInput from "../../(inputs)/TextInput";
import IconTextInput from "../../(inputs)/IconTextInput";

// Icons
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const SignUp = () => {
  // const [emailErrorMessage, setEmailErrorMessage] = React.useState(null);
  const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const { sigUpMutation, errorMessage } = useSignUp();

  const {} = useForm();

  // Display password requirements on input focus
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };
  // Check that the password meets the requirments
  // Password must be at least eight characters long and include at least one number and one letter
  const passwordHasNumber = /\d/.test(user.password);
  const passwordHasLetter = /[A-Za-z]/.test(user.password);

  // Update UI for password validatior live
  useEffect(() => {
    validatePassword();
  }, [user.password]);

  function validatePassword() {
    const passwordCheckCombination = document.querySelector(
      ".password-condition--combination p"
    );
    const passwordCheckLength = document.querySelector(
      ".password-condition--length p"
    );
    const passwordCheckLengthIcon = document.querySelector(
      ".password-condition--length span"
    );
    const passwordCheckCombinationIcon = document.querySelector(
      ".password-condition--combination span"
    );

    if (passwordHasNumber && passwordHasLetter && user.password.length > 8) {
      passwordCheckLength.classList.add("comply");
      passwordCheckLengthIcon.classList.add("comply");
      passwordCheckCombination.classList.add("comply");
      passwordCheckCombinationIcon.classList.add("comply");
    } else if (passwordHasNumber && passwordHasLetter) {
      passwordCheckCombination.classList.add("comply");
      passwordCheckCombinationIcon.classList.add("comply");
    } else if (user.password.length > 8) {
      passwordCheckLength.classList.add("comply");
      passwordCheckLengthIcon.classList.add("comply");
    } else {
      // compliance removal
      passwordCheckLength.classList.remove("comply");
      passwordCheckLengthIcon.classList.remove("comply");
      passwordCheckCombination.classList.remove("comply");
      passwordCheckCombinationIcon.classList.remove("comply");
      // error removal
      passwordCheckLength.classList.remove("error");
      passwordCheckLengthIcon.classList.remove("error");
      passwordCheckCombination.classList.remove("error");
      passwordCheckCombinationIcon.classList.remove("error");
    }
  }

  // onSubmit validate the email
  // function validateEmail(user) {
  //   // Email regular expression validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!user.email) {
  //     setEmailErrorMessage("Please enter an email address");
  //   } else if (!emailRegex.test(user.email)) {
  //     console.log(!emailRegex.test(user.email));
  //     setEmailErrorMessage("Please enter a valid email address");
  //   } else if (emailRegex.test(user.email)) {
  //     setEmailErrorMessage("");
  //   }
  // }

  const handleSignUpUser = async (e) => {
    e.preventDefault();

    sigUpMutation.mutate(user);

    // validatePassword(user);
    // validateEmail(user);
  };

  return (
    <section className="form-container">
      {/* Sign Up Form Header */}

      {/* Sign Up Form Container */}
      <form className="form__sign-up" onSubmit={handleSignUpUser}>
        <header className="form__header">
          <h5>Create your account</h5>
          <p>
            With an account you can store, access and track your workouts from
            any device.
          </p>
        </header>
        {/* Add Email Address */}
        <TextInput
          id="email-address"
          type="email"
          label="Email addresss"
          error=""
          // error={emailErrorMessage ? emailErrorMessage : ""}
          name="email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />

        {/* Create Password */}
        <IconTextInput
          id="password"
          type="password"
          label="Create password"
          error=""
          name="password"
          icon={true}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          onFocus={handlePasswordFocus}
        />

        <div
          className={`password-condition ${
            isPasswordFocused ? "animate-down" : "hide"
          }`}
        >
          <p>Your password must contain:</p>
          <div className="password-condition__item password-condition--length">
            <span>
              <DoneIcon />
            </span>
            <p>At least 8 characters</p>
          </div>
          <div className="password-condition__item password-condition--combination">
            <span>
              <DoneIcon />
            </span>
            <p>Include a combination of letters & numbers.</p>
          </div>
        </div>

        {errorMessage ? (
          <div className="error--message">
            <ErrorOutlineIcon />
            <p>{errorMessage}</p>
          </div>
        ) : null}

        {/* Sign up form buttons */}

        <div className="form__btns">
          {/* Sign up the user button */}
          <button
            disabled={sigUpMutation.isLoading}
            type="submit"
            className="btn btn-primary"
          >
            {sigUpMutation.isLoading ? "Loading..." : "Continue"}
          </button>

          <p className="light1 center">
            Already have an account?{" "}
            <Link className="btn-text" href="/">
              Log in
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
            <span>Sign up with Google</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-outline--align-left"
          >
            <FacebookIcon />
            <span>Sign up with Facebook</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-outline--align-left"
          >
            <AppleIcon />
            <span>Sign up with Apple</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
