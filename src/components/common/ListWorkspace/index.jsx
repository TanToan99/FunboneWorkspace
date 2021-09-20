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
<<<<<<< HEAD
import { fetchWorkspaceList } from "api";

=======
import imageNFQ from "assets/images/NFQ.png";
import imageGW from "assets/images/GWicon.png";

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
>>>>>>> f1107dc... fix: resolve conflict
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
    <Container maxWidth="xl" className={classes.wsContainer}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box className={classes.listWorkspaces}>
            <ListItemButton
              alignItems="center"
              onClick={() => setOpen(!open)}
              sx={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
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
              <ListItemIcon></ListItemIcon>
              <KeyboardArrowDown
                sx={{
                  mr: -1,
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
                    primary={item.label}
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
        <Grid item xs={9}>
          <Box className={classes.detailWorkspace}>
            
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListWorkspace;
