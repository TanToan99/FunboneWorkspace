import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useStyles } from "./styles";
import { Link,useHistory } from "react-router-dom";
import image from "assets/images/icon.png";
import { useForm } from "react-hook-form";
import firebase from '../../../firebase';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const redirect = (isSuccess) => {
    if (isSuccess) history.push("/home");
  };

  const onLogin = (data) => {
    const auth = firebase.getAuth();
    firebase.signInWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        const userResult = userCredential.user;
        const userInfo = {
          uid: userResult.uid,
          username: userResult.displayName,
          email: userResult.email,
          phone: userResult.phoneNumber,
        };
        redirect(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onError = () => console.log(errors);
  return (
    <div className={classes.loginForm}>
      <Box component="form" autoComplete className={classes.form} onSubmit={handleSubmit(onLogin, onError)} >
        <img src={image} alt="" className={classes.logo} />
        <h1 className={classes.titleForm}>Login</h1>
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="Username"
          name="username"
          {...register("username", {
            required: true,
          })}
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          {...register("password", {
            minLength: 8,
            required: true,
          })}
        />
        <Button
          type="submit"
          className={`${classes.buttonLogin} ${classes.textfield}`}
        >
          Login
        </Button>
      </Box>
      <div className={classes.directBlock}>
        <Link to="/register" className={classes.link}>
          Create new account
        </Link>
        <Link to="#" className={classes.link}>
          Forgot password
        </Link>
      </div>
    </div>
  );
};

export default Login;
