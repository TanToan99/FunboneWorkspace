import React from "react";
import {
  Avatar,
  Stack,
  Container,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import icon from "assets/images/logo_1.png";
import { useStyles } from "./styles";

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.container}>
      <Container maxWidth="xl">
        <Stack
          className={classes.navbar}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            className={classes.findBlock}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <OutlinedInput
              className={classes.findTextBox}
              type="text"
              name="findbox"
              id="findbox"
              placeholder="Find"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#00000073", mr: 1, my: 0.5 }} />
                </InputAdornment>
              }
            />
          </Stack>
          <img className={classes.logo} src={icon} alt="" />
          <div className={classes.userBlock}>
            <Avatar />
          </div>
        </Stack>
      </Container>
    </nav>
  );
};

export default NavigationBar;
