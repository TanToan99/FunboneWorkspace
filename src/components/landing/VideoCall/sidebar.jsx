import { Stack } from "@mui/material";
import React from "react";
import { useStyle } from "./styles";

const SideBar = (props) => {
  const { image, name, data } = props;
  const classes = useStyle();
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
      </div>
    </div>
  );
};

export default SideBar;
