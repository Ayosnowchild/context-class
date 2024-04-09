import React, { useContext } from "react";
import Nav from "../components/Nav";
import { UserContext } from "../App";

function Profile() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <Nav />
      <h1>{user.email} Profile</h1>
      <img src="../../image/ab.jpg" />
    </div>
  );
}

export default Profile;
