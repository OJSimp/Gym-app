import { useMutation } from "react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";

import axios, { AxiosError } from "axios";

export const useSignUp = (user) => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState(null);

  const signup = async (user) => {
    setErrorMessage(null);
    await axios.post("/api/auth/signup", user);
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
          setErrorMessage(error.response.data.error);
        }
        if (error.response.status === 420) {
          setErrorMessage(error.response.data.error);
        }
        if (error.response.status === 421) {
          setErrorMessage(error.response.data.error);
        }
        if (error.response.status === 422) {
          setErrorMessage(error.response.data.error);
        }
        if (error.response.status === 402) {
          setErrorMessage(error.response.data.error);
        }
        if (error.response.status === 410) {
          setErrorMessage(error.response.data.error);
        }
      }
    },
  });
  return { sigUpMutation, errorMessage };
};
