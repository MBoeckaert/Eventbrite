import EventOverview from "../components/EventOverview";

const Homepage = (props) => {
  return (
    <>
      <p>Evenementen zoeken in</p>
      <h1>Oost-Vlaanderen</h1>

      {/* Popular in Oost-Vl niet doen */}
      {props.events.map((event) => (
        <EventOverview
          key={event.id}
          img={event.img}
          name={event.name}
          date={event.date}
          location={event.location}
        />
      ))}
    </>
  );
};

export default Homepage;
