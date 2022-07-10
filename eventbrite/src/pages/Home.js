import React from "react";
import EventOverview from "../components/EventOverview";

const Home = () => {
  const events = [
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
    <>
      <p>Evenementen zoeken in</p>
      <h1>Oost-Vlaanderen</h1>

      {/* Popular in Oost-Vl niet doen */}
      <EventOverview
        img={events[1].img}
        name={events[1].name}
        date={events[1].date}
        location={events[1].location}
      />
    </>
  );
};

export default Home;
