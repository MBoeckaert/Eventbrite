import React from "react";
//import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import EventInformation from "./pages/EventInformation.js";

const App = () => {
  return (
    <div className="App">
      <Homepage></Homepage>
      <EventInformation></EventInformation>
    </div>
  );
};

export default App;
