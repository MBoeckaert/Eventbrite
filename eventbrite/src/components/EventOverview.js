import EventImage from "./EventImage";
import { Card, Grid } from "@mui/material";

const EventOverview = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const daywritten = props.date.toLocaleString("en-US", { weekday: "short" });
  const month = props.date.toLocaleString("en-US", { month: "long" });

  return (
    <>
      <Card variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <EventImage img={props.img} />
          </Grid>
          <Grid item xs={8}>
            <p>{daywritten + ", " + month + " " + day}</p>
            <h3>{props.name}</h3>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                {props.location}
              </Grid>
              <Grid item xs={2}>
                Share
              </Grid>
              <Grid item xs={2}>
                Like
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default EventOverview;
