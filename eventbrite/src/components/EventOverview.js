import EventImage from "./EventImage";
import { Card, Grid, Typography, Box } from "@mui/material";
// import ShareIcon from "@mui/icons-material/Share";
// import { FavoriteBorder } from "@mui/icons-material";
// import DeleteIcon from "@mui/icons-material/Delete";

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
            <Box
              sx={{
                height: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6" component="h2">
                {daywritten + ", " + month + " " + day}
              </Typography>
              <Typography variant="subtitle2" component="h3">
                {props.name}
              </Typography>
              {/* Make this grid container a component as well, otherwise too much grids nested */}
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="body2" component="span">
                    {props.location}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" component="span">
                    {/* <ShareIcon></ShareIcon> Share */}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" component="span">
                    {/* <FavoriteBorder /> */}
                    {/* <svg data-testid="DeleteIcon"></svg> */}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default EventOverview;
