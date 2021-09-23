import React from "react";
import { Grid } from "@mui/material";
import SideBar from "./sidebar";
import { useStyle } from "./styles";
import image from "assets/images/GW.png";
import { GameFrame } from "..";

const VideoCall = () => {
  const classes = useStyle();
  return (
    <div className={classes.videoCallBlock}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <SideBar name="University of Greenwich" image={image} />
          </Grid>
          <Grid item xs={9.5}>
            <GameFrame />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default VideoCall;
