import React from "react";
//import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import EventInformation from "./pages/EventInformation.js";
import PayTickets from "./pages/PayTickets";

const App = () => {
  return (
    <div className="App">
      <Homepage></Homepage>
      <EventInformation></EventInformation>
      <PayTickets></PayTickets>
    </div>
  );
};

export default App;
