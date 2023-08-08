import { useState } from "react";
import { useRouter } from "next/navigation";

import axios, { AxiosError } from "axios";

export const useLogIn = (user) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const login = async (user) => {
    setErrorMessage(null);
    await axios.post("/api/auth/login", user);

    const json = await response.json();

    if (error instanceof AxiosError) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data);
      }
    }

    // if (!response.ok) {
    //   // if not sucessful - send back error and finished loading
    //   setErrorMessage(json.error);
    // }
    // if (response.ok) {
    //   localStorage.setItem("user", JSON.stringify(json));
    // }
  };

  return login, errorMessage;
};
