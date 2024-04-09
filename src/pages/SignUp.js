import React, { useContext } from "react";
import { UserContext } from "../App";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();
  function handleChange(e) {
    setUser((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    alert(
      `users details are ${user.firstname}, ${user.lastname}, ${user.email} `
    );
    navigate("/");
  }

  return (
    <div className="cart-container">
      <h1>Sign Up here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname: </label>
          <input
            placeholder="Your first name"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Lastname: </label>
          <input
            placeholder="Your last name"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            placeholder="Your email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
