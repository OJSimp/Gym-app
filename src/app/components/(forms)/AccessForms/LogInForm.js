"use client";
import "./SignUpForm.scss";

import Link from "next/link";
import React, { useEffect } from "react";
// import { toast } from "react-hot-toast";

// Components
import TextInput from "../../(inputs)/TextInput";
import IconTextInput from "../../(inputs)/IconTextInput";

//Hooks

const LogIn = () => {
  // const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  // Check that the password meets the requirments
  useEffect(() => {
    const letterRegex = /[a-zA-Z]/;
    const numberRegex = /\d/;

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

    if (user.password.length > 8) {
      passwordCheckLength.classList.add("comply");
      passwordCheckLengthIcon.classList.add("comply");
    } else if (
      letterRegex.test(user.password) &&
      numberRegex.test(user.password)
    ) {
      passwordCheckCombination.classList.add("comply");
      passwordCheckCombinationIcon.classList.add("comply");
    } else {
      passwordCheckLength.classList.remove("comply");
      passwordCheckLengthIcon.classList.remove("comply");
      passwordCheckCombination.classList.remove("comply");
      passwordCheckCombinationIcon.classList.remove("comply");
    }
  }, [user]);

  // Sign up the user
  const handleUserSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log("Signup success", res.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    console.log(user);
  };

  return (
    <section className="sign-up--form form-container">
      {/* Sign Up Form Header */}
      <header className="header--form">
        <h5 className="light4">Create an account</h5>
        <p className="light2">
          With an account you can store, access and track your workouts from any
          device.
        </p>
      </header>

      {/* Sign Up Form Container */}
    </section>
  );
};

export default LogIn;
