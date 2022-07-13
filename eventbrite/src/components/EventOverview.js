import EventImage from "./EventImage";

const EventOverview = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const daywritten = props.date.toLocaleString("en-US", { weekday: "short" });
  const month = props.date.toLocaleString("en-US", { month: "long" });

  return (
    <>
      <div className="eventOverview__image">
        <EventImage img={props.img} />
      </div>
      <div className="eventOverview__information">
        <p>{daywritten + ", " + month + " " + day}</p>
        <h3>{props.name}</h3>
        <div className="eventOverview__essentials">
          <p>{props.location}</p>
          <p>Share button</p>
          <p>Like Button</p>
        </div>
      </div>
    </>
  );
};

export default EventOverview;
