import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styles } from "./style";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import firebase from '../../../firebase';

const signUpSchema = yup.object().shape({
  fullName: yup.string().required(),
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
});

const Register = () => {
  const history = useHistory();
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const onRegister = (data) => {
    const { email, password } = data;
    const auth = firebase.getAuth();
    auth.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Sign Up Complete");
        firebase.updateProfile(auth.currentUser, {
          displayName: data.fullName,
          photoURL: "",
        });
        firebase
          .firestore()
          .collection("user")
          .doc(userCredential.user.uid)
          .set({
            avatarUrl: "",
            username: data.userName,
          });
        history.push("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage);
      });
    console.log(data);
  };
  const onError = () => console.log(errors);
  const classes = styles();
  return (
    <div className={classes.registerContainer}>
      <Box
        component="form"
        autoComplete
        sx={{
          display: "flex",
          width: "500px",
          flexDirection: "column",
          justifyItems: "center",
        }}
        onSubmit={handleSubmit(onRegister, onError)}
      >
        <h1 className={classes.titleRegister}>Signup</h1>
        {/*username*/}
        <FormControl
          fullWidth={false}
          sx={{ m: 2, borderRadius: "unset" }}
          variant="outlined"
        >
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            id="username"
            name="userName"
            type="text"
            required={true}
            sx={{ borderRadius: "unset" }}
            label="Username"
            {...register("userName")}
          />
        </FormControl>
        {/*password*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? "text" : "password"}
            name="password"
            sx={{ borderRadius: "unset" }}
            required={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
        </FormControl>
        {/*fullname*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="fullname">Fullname</InputLabel>
          <OutlinedInput
            id="fullname"
            name="fullName"
            type={"text"}
            sx={{ borderRadius: "unset" }}
            required={true}
            label="Fullname"
            {...register("fullName")}
          />
        </FormControl>
        {/*email*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            name="email"
            sx={{ borderRadius: "unset" }}
            required={true}
            label="Email"
            {...register("email")}
          />
        </FormControl>
        {/*position*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="select">Position</InputLabel>
          <Select
            id="select"
            name="role"
            sx={{ borderRadius: "unset" }}
            required={true}
            label="Position"
            {...register("role")}
          >
            <MenuItem value={"CEO"}>CEO</MenuItem>
            <MenuItem value={"CFO"}>CFO</MenuItem>
            <MenuItem value={"CTO"}>CTO</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.submitButton}
          type="submit"
          sx={{ m: 2, borderRadius: "unset" }}
        >
          Register
        </Button>
        <div className={classes.redirectContainer}>
          <Link to="/" className={classes.toLogin}>
            Do you have an account? Login here
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default Register;
