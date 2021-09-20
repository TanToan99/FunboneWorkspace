import React, { useState } from "react";
import { Box, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useStyle } from "./style";
import Public from "@mui/icons-material/Public";
const data = [
  { icon: <Public />, label: "Ws1" },
  { icon: <Public />, label: "Ws2" },
  { icon: <Public />, label: "Ws3" },
  { icon: <Public />, label: "Ws4" },
];
const ListWorkspace = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div className={classes.wsContainer}>
      <Box className={classes.listWorkspaces}>
        <ListItemButton
          alignItems="flex-start"
          onClick={() => setOpen(!open)}
          sx={{
            "&:hover, &:focus": { "& svg": { opacity: open ? 0: 1 } },
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
              key={item.label}
              sx={{ minHeight: 35, color: "#fff" }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: 15 }}
              />
            </ListItemButton>
          ))}
      </Box>

      <Box>
        
      </Box>
    </div>
  );
};

export default ListWorkspace;
