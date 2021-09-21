import React, { useEffect, useState } from "react";
import {
  Box,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
  Grid,
} from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useStyle } from "./style";
import { fetchWorkspaceList } from "api";

const ListWorkspace = () => {
  const data = [];

  const [open, setOpen] = useState(false);
  const classes = useStyle();
  useEffect(() => {
    fetchWorkspaceList()
      .then((data) => {
        console.log(data);
      })
      .catch();
  });
  return (
    <div>
      <Container maxWidth="xl" className={classes.wsContainer}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
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
                    fontSize: 20,
                    fontWeight: "medium",
                    lineHeight: "30px",
                    color: "black",
                  }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    color: "black",
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
                    sx={{
                      minHeight: 20,
                      color: "black",
                    }}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      <img
                        className={classes.imageSrc}
                        width="35px"
                        height="35px"
                        src={item.icon}
                        alt=""
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Workspaces"
                      primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: "medium",
                        lineHeight: "30px",
                        color: "black",
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
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ListWorkspace;
