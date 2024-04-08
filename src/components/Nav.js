import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import "../pages/home.css";

export default function Nav() {
  let theme = useContext(ThemeContext);
  return (
    <div className={theme ? "nav" : "nav-dark"}>
      <Link to={"/"}>HomeDepot</Link>
      <button>Log in</button>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/cart"}>Cart </Link>
    </div>
  );
}
