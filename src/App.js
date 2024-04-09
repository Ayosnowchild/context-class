import logo from "./logo.svg";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { createContext, useState } from "react";

export let UserContext = createContext(null);
export let ThemeContext = createContext();
function App() {
  let initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialValues);
  const [theme, setTheme] = useState(false);
  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    //   <Outlet />
    //   <ScrollRestoration />
    // </ThemeContext.Provider>
    <UserContext.Provider value={{ user, setUser }}>
      <Outlet />
      <ScrollRestoration />
    </UserContext.Provider>
  );
}

export default App;
