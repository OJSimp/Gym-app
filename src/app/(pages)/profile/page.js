"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const profilePage = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    // add a loading state
    const getUserDetails = async () => {
      const response = await axios.get("/api/users");
      setUserData(response.data.data);
      console.log(response.data.data);
    };
    getUserDetails();
  }, []);

  const handleLogOut = async () => {
    try {
      await axios.get("/api/auth/logout");
      router.push("pages/access/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <h5>Profile: {userData ? userData._id : "no data"}</h5>
      <br />
      <h5>Email: {userData ? userData.email : "no data"}</h5>
      <br />
      <hr />
      <br />
      <button className="btn btn-outline" onClick={handleLogOut}>
        Log out
      </button>
    </section>
  );
};

export default profilePage;
