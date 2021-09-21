import React from "react";
import VideoScreen from "../VideoCall/videoScreen";
import { useStyles } from "./styles";
import image from "assets/images/webcam1.jpg";
import image1 from "assets/images/webcam2.jpg";
import image2 from "assets/images/webcam3.jpg";

const GameFrame = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.gameFrame}>
      <div className={classes.videoBlock}>
        <VideoScreen name="Minh Nguyệt" image={image1} />
        <VideoScreen name="Ngọc Thành" image={image} />
        <VideoScreen name="Hoàng Lâm" image={image2} />
      </div>
    </div>
  );
};

export default GameFrame;
