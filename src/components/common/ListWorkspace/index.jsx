import React, { useState } from "react";
import { Box, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useStyle } from "./style";
import imageNFQ from "assets/images/NFQ.png";
import imageGW from "assets/images/GW.png";
const data = [
  { icon: imageGW, label: "Ws1" },
  { icon: imageNFQ, label: "Ws2" },
  { icon: imageGW, label: "Ws3" },
  { icon: imageNFQ, label: "Ws4" },
  { icon: imageGW, label: "Ws5" },
  { icon: imageNFQ, label: "Ws6" },
  { icon: imageGW, label: "Ws7" },
  { icon: imageNFQ, label: "Ws8" },
  { icon: imageGW, label: "Ws9" },
  { icon: imageNFQ, label: "Ws10" },
];
const ListWorkspace = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div className={classes.wsContainer}>
      <Box className={classes.listWorkspaces}>
        <ListItemButton
          alignItems="center"
          onClick={() => setOpen(!open)}
          sx={{
            "&:hover, &:focus": { "& svg": { opacity: open ? 0 : 1 } },
          }}
        >
          <ListItemText
            primary="Workspaces"
            primaryTypographyProps={{
              fontSize: 25,
              fontWeight: "medium",
              lineHeight: "30px",
              color: "#fff",
            }}
          />
          <KeyboardArrowDown
            sx={{
              mr: -1,
              opacity: 0,
              color: "#fff",
              transform: open ? "rotate(-180deg)" : "rotate(0)",
              transition: "0.2s",
            }}
          />
        </ListItemButton>
        {open &&
          data.map((item) => (
            <ListItemButton
              alignItems="center"
              key={item.label}
              sx={{ minHeight: 35, color: "#fff" }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                <img width="35px" height="35px" src={item.icon} alt="" />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: 15 }}
              />
            </ListItemButton>
          ))}
      </Box>

      <Box></Box>
    </div>
  );
};

export default ListWorkspace;
