import EventOverview from "../components/EventOverview";

const Homepage = (props) => {
  /* Check if there are events available close to you with a ternary operator */
  let amountEventsAvailable = <p>There are no events close to you</p>;

  if (props.events.length > 0) {
    amountEventsAvailable = props.events.map((event) => (
      <EventOverview
        key={event.id}
        img={event.img}
        name={event.name}
        date={event.date}
        location={event.location}
      />
    ));
  }

  return (
    <>
      {/* use a filter or work with geolocation API */}
      <p>Evenementen zoeken in</p>
      <h1>Oost-Vlaanderen</h1>

      {/* Popular in Oost-Vl niet doen */}

      {amountEventsAvailable}
    </>
  );
};

export default Homepage;
