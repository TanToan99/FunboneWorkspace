import React, { useEffect, useState } from "react";
import {
  Box,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
  Grid,
  Divider,
  Typography,
  Fab,
  Button,
} from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useStyle } from "./style";
import { fetchWorkspaceList } from "api";
import AddIcon from "@mui/icons-material/Add";
import imgNFQ from "assets/images/NFQ.png";


const ListWorkspace = () => {
  const [data, setData] = useState([]);
  const [wsInfo, setWsInfo] = useState(null);
  const [open, setOpen] = useState(true);
  const classes = useStyle();

  useEffect(() => {
    fetchWorkspaceList()
      .then((items) => {
        console.log(items);
        setData(items);
      })
      .catch();
  }, []);
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
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              }}
            >
              <ListItemText
                primary="Workspaces"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "white",
                }}
              />
              <KeyboardArrowDown
                sx={{
                  mr: -1,
                  color: "black",
                  transform: open ? "rotate(-180deg)" : "rotate(0)",
                  transition: "0.2s",
                }}
              />
            </ListItemButton>
            <Divider />
            {open &&
              data.map((item) => (
                <ListItemButton
                  alignItems="center"
                  key={item.name}
                  onClick={() => {
                    setWsInfo(item);
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    <img
                      className={classes.imageSrc}
                      width="35px"
                      height="35px"
                      src={item.image}
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: "medium",
                      lineHeight: "30px",
                      color: "black",
                    }}
                  />
                </ListItemButton>
              ))}
            <Divider />
            <Fab
              sx={{
                marginTop: "10px",
                color: "#ffffff",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              }}
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box className={classes.detailWorkspace}>
            {wsInfo && (
              <div className={classes.introWorkspace} >
                <Typography
                  sx={{
                    fontSize: 40,
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {wsInfo.name}
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 600, paddingBottom: "10px" }}>
                  {wsInfo.description}
                </Typography>
              </div>
            )}
            
            {wsInfo && (
              <div className={classes.viewContainer}>
                <div className={classes.btn}>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      padding: "10px 20px 10px 20px",
                      background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    }}
                  >
                    Join now
                  </Button>
                </div>
                <img src={imgNFQ} className={classes.picture} alt="" />
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListWorkspace;
