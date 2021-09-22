import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useStyles } from "./styles";
import { Link, useHistory } from "react-router-dom";
import image from "assets/images/icon.png";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "actions/account";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const store = useSelector((state) => state);
  const accountDispath = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const redirect = (isSuccess) => {
    if (isSuccess) history.push("/home");
  };

  const onLogin = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        console.log("Login Successfully!");
        const userData = userCredential.user;
        const user = {
          uid: userData.uid,
          username: userData.email,
          fullname: userData.displayName,
          avatar: userData.photoURL,
          role: "",
        };
        console.log("User: ", user);
        const action = addAccount(user);
        accountDispath(action);
        console.log("Store: ", store);
        redirect(true);
      })
      .catch((error) => console.error(error));
  };
  const onError = () => console.log(errors);
  return (
    <div className={classes.loginForm}>
      <Box
        component="form"
        className={classes.form}
        onSubmit={handleSubmit(onLogin, onError)}
      >
        <img src={image} alt="" className={classes.logo} />
        <h1 className={classes.titleForm}>Login</h1>
        <TextField
          className={classes.textfield}
          id="outlined-required"
          label="Username"
          name="username"
          {...register("username", {
            required: true,
          })}
        />
        <TextField
          className={classes.textfield}
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
