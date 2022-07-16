import React from "react";
//import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import EventInformation from "./pages/EventInformation.js";
import PayTickets from "./pages/PayTickets";
import { Container } from "@mui/system";

const App = () => {
  const dummy__events = [
    {
      id: "e1",
      img: "IMG",
      date: new Date("2022", "09", "11"),
      name: "First Event Name",
      location: "Ghent",
    },
    {
      id: "e2",
      img: "IMG2",
      date: new Date("2022", "07", "1"),
      name: "Second Event Name",
      location: "Deinze",
    },
    {
      id: "e3",
      img: "IMG3",
      date: new Date("2022", "08", "21"),
      name: "Third Event Name",
      location: "Lede",
    },
  ];
  return (
    <div className="App">
      <Container>
        <Homepage events={dummy__events}></Homepage>
        {/* <EventInformation></EventInformation>
        <PayTickets></PayTickets> */}
      </Container>
    </div>
  );
};

export default App;
