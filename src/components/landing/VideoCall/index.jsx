import React from "react";
import { Container, Grid } from "@mui/material";
import SideBar from "./sidebar";
import { useStyle } from "./styles";
import image from "assets/images/GW.png";
import { GameFrame } from "..";

const VideoCall = () => {
  const classes = useStyle();
  return (
    <div className={classes.videoCallBlock}>
      <Container maxWidth="xl">
        <div>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <SideBar name="University of Greenwich" image={image} />
            </Grid>
            <Grid item xs={9}>
              <GameFrame />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default VideoCall;
