import { Container, styled } from "@mui/system";
import { Typography, Box, Button, Grid } from "@mui/material";

const CheckOutComponents = styled("div")({
  height: "10vh",
  color: "darkslategray",
  padding: 8,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
});

const OrderTickets = () => {
  return (
    <>
      <Typography variant="h6" component="h3" sx={{ textAlign: "center" }}>
        Late Night 2022
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          textAlign: "center",
          borderBottom: 1,
          borderColor: "grey",
          paddingBottom: 2,
        }}
      >
        Start Date - End Date
      </Typography>
      <Container>
        <Box sx={{ marginY: 2, borderBottom: 1 }}>
          <Typography variant="h6" component="h3">
            Wave 1: Early Bird
          </Typography>
          <Typography variant="body1" component="p">
            Ticket Price: €15
          </Typography>
        </Box>
        <CheckOutComponents sx={{ borderTop: 1, borderColor: "darkgray" }}>
          <Grid container>
            <Grid item>Card Icon</Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "lightgray",
                  color: "darkgray",
                  border: 0,
                }}
              >
                Order
              </Button>
            </Grid>
          </Grid>
        </CheckOutComponents>
      </Container>
    </>
  );
};

export default OrderTickets;
