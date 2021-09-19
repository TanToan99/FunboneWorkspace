import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginForm}>
      <Box component="form" noValidate autoComplete className={classes.form}>
        <h1 className={classes.titleForm}>Login</h1>
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="Username"
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button className={`${classes.buttonLogin} ${classes.textfield}`}>
          Login
        </Button>
      </Box>
      <div className={classes.directBlock}>
        <Link className={classes.link}>Create new account</Link>
        <Link className={classes.link}>Forgot password</Link>
      </div>
    </div>
  );
};

export default Login;
