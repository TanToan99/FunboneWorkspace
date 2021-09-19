import { Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Login } from "components/landing";
import { useStyle } from "./styles";
import coverImage from "assets/images/LoginBackground.jpg";
import { RegisterComponent } from "components/landing";

const LoginPage = (_) => {
  const classes = useStyle();
  const location = useLocation();
  return (
    <Grid className={classes.parentContainer} container spacing={0}>
      <Grid item md={8}>
        <img className={classes.coverImage} src={coverImage} alt="" />
      </Grid>
      <Grid item md={4}>
        <div className={classes.container}>
          {location.pathname === "/" ? <RegisterComponent/> : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
