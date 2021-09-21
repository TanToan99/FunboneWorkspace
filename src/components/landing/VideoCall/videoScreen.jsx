import React from "react";
import { useStyle } from "./styles";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MicOffIcon from "@mui/icons-material/MicOff";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const VideoScreen = (props) => {
  const { image, name } = props;
  const classes = useStyle();
  return (
    <div className={classes.videoFrame}>
      <h1 className={classes.nameUser}>{name}</h1>
      <img className={classes.imageSample} src={image} alt="" />
      <div className={classes.videoControl}>
        <MicOffIcon sx={{ color: "white" }} />
        <VideocamOffIcon sx={{ color: "white" }} />
        <VolumeOffIcon sx={{ color: "white" }} />
      </div>
    </div>
  );
};

export default VideoScreen;
