import React, { useEffect, useState } from "react";
import VideoScreen from "../VideoCall/videoScreen";
import { useStyles } from "./styles";
import image from "assets/images/webcam1.jpg";
import image1 from "assets/images/webcam2.jpg";
import image2 from "assets/images/webcam3.jpg";
import { Demo } from "components/landing";
import { useSelector } from "react-redux";

const GameFrame = (props) => {
  const store = useSelector((store) => store.video);
  const classes = useStyles();
  const [isShowVideo, setShowVideo] = useState(true);
  useEffect(() => {
    setShowVideo(store);
  }, [store]);
  return (
    <div className={classes.gameFrame}>
      {isShowVideo ? (
        <div className={classes.videoBlock}>
          <VideoScreen name="Minh Nguyệt" image={image1} />
          <VideoScreen name="Ngọc Thành" image={image} />
          <VideoScreen name="Hoàng Lâm" image={image2} />
        </div>
      ) : null}
      <Demo />
    </div>
  );
};

export default GameFrame;
