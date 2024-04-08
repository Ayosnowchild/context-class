import logo from "./logo.svg";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { createContext, useState } from "react";

export let UserContext = createContext();
export let ThemeContext = createContext();
function App() {
  const [user, setUser] = useState("Joe Biden");
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Outlet />
      <ScrollRestoration />
    </ThemeContext.Provider>
    // <UserContext.Provider value={user}>
    //   <ThemeContext.Provider value={{ theme, setTheme }}>
    //     <Outlet />
    //     <ScrollRestoration />
    //   </ThemeContext.Provider>
    // </UserContext.Provider>
  );
}

export default App;
