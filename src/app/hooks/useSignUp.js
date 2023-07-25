import { useMutation } from "react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";

import axios, { AxiosError } from "axios";

export const useSignUp = (user) => {
  const router = useRouter();

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const signup = async (user) => {
    setEmailError(null);
    setPasswordError(null);
    await axios.post("/api/auth/signup", user);
    // try {
    //   const response = await axios.post("/api/auth/signup", user);
    //   console.log("Signup success", response.data);
    //   // router.push("/");
    // } catch (error) {
    //   console.log(
    //     "Signup failed",
    //     error.response.status,
    //     error.response.data.error
    //   );
    // }
  };

  const sigUpMutation = useMutation({
    mutationFn: signup,
    onMutate: (variables) => {
      return { message: "Mutation Begun", variables };
    },
    onSuccess: (data, variables, context) => {
      // onSuccess Login user
      // dispatch({ type: "LOGIN", paylaod: json });
      console.log("success:", context, data, variables);

      // Naviate to dashboard on success
      // const navTarget = locationFrom || "/";
      // router.push(navTarget, { replace: !locationFrom });
    },
    onError: (error) => {
      // Return errors to client
      if (error instanceof AxiosError) {
        if (error.response.status === 400) {
          setEmailError(error.response.data.error);
        }
      }
    },
  });
  return { sigUpMutation, emailError };
};
