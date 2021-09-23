import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";
import React, { useState } from "react";
import { useStyle } from "./styles";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";
import { showVideoCall } from "actions/videocall";
import { useDispatch, useSelector } from "react-redux";

const SideBar = (props) => {
  const { image, name } = props;
  const [value, setValue] = useState(0);
  const [isVideoCall, setVideoCall] = useState(true);
  const videoDispatch = useDispatch();
  const classes = useStyle();

  function refreshVideoCall() {
    if (value === 1) {
      setVideoCall(!isVideoCall);
      const action = showVideoCall(isVideoCall);
      videoDispatch(action);
    }
  }

  const store = useSelector((store) => store);
  console.log(store);

  return (
    <div>
      <div className={classes.sidebar}>
        <div className={classes.sidebarTitleBlock}>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <img className={classes.workspaceImage} src={image} alt={image} />
            <h1 className={classes.sidebarTitle}>{name}</h1>
          </Stack>
        </div>
        <div className={classes.sidebarList}></div>

        <div className={classes.bottomNavigator}>
          <BottomNavigation
            showLabels={true}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              refreshVideoCall();
            }}
          >
            <BottomNavigationAction
              icon={<InsertCommentIcon />}
              label="Message"
            />
            <BottomNavigationAction icon={<VideocamIcon />} label="Meeting" />
            <BottomNavigationAction icon={<EventNoteIcon />} label="Plan" />
            <BottomNavigationAction icon={<SettingsIcon />} label="Setting" />
          </BottomNavigation>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
