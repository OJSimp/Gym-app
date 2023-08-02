"use client";

import axios, { AxiosError } from "axios";

const profilePage = () => {
  const handleLogOut = async () => {
    try {
      await axios.get("/api/auth/logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <h5>Profile</h5>
      <br />
      <hr />
      <br />
      <button onClick={handleLogOut}>Log out</button>
    </section>
  );
};

export default profilePage;
