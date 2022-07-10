import React from "react";
//import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Likes from "./pages/Likes";
import Profile from "./pages/Profile.js";
import Search from "./pages/Search.js";
import Tickets from "./pages/Tickets.js";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Likes></Likes>
      <Profile></Profile>
      <Search></Search>
      <Tickets></Tickets>
    </div>
  );
}

export default App;
