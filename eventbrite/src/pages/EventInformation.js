import EventImage from "../components/EventImage";
import Button from "../components/Button.js";

const ClickedEventInformation = () => {
  return (
    <>
      <EventImage />
      <h2> Lake Night 2022</h2>
      <div className="event-information__whereabouts">
        <div className="event-information__hour-date">
          <p>Calendar Icon</p>
          <p>Date</p>
          <p>Hour</p>
        </div>
        <div className="event-information__location">
          <p>Location Icon</p>
          <p>Name Location</p>
          <p>Adress Location</p>
        </div>
        <div className="event-information__prices">
          <p>Ticket Icon</p>
          <p>Price Range</p>
          <p>Price information</p>
        </div>
      </div>

      <div className="event-information__extra">
        <h3>Extra</h3>
        <p>Extra Information</p>
      </div>

      <div className="event-information__location">
        <h3>Location</h3>
        <p>Name Loaction</p>
        <p>Google Maps</p>
      </div>

      <Button></Button>
    </>
  );
};

export default ClickedEventInformation;
