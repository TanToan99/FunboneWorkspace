import React from "react";
import {
  Box,
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

const Register = (props) => {
  const [values, setValues] = React.useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    position: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const classes = styles();
  return (
    <div onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          width: "500px",
          flexDirection: "column",
          justifyContent: "center",
        }}
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
            type="text"
            required={true}
            sx={{ borderRadius: "unset" }}
            value={values.username}
            onChange={handleChange("username")}
            label="Username"
          />
        </FormControl>
        {/*password*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            sx={{ borderRadius: "unset" }}
            required={true}
            onChange={handleChange("password")}
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
          />
        </FormControl>
        {/*fullname*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="fullname">Fullname</InputLabel>
          <OutlinedInput
            id="fullname"
            type={"text"}
            sx={{ borderRadius: "unset" }}
            value={values.fullname}
            required={true}
            onChange={handleChange("fullname")}
            label="Fullname"
          />
        </FormControl>
        {/*email*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            value={values.email}
            sx={{ borderRadius: "unset" }}
            required={true}
            onChange={handleChange("email")}
            label="Email"
          />
        </FormControl>
        {/*position*/}
        <FormControl fullWidth={false} sx={{ m: 2 }} variant="outlined">
          <InputLabel htmlFor="select">Position</InputLabel>
          <Select
            id="select"
            value={values.position}
            sx={{ borderRadius: "unset" }}
            required={true}
            label="Position"
            onChange={handleChange("position")}
          >
            <MenuItem value={"CEO"}>CEO</MenuItem>
            <MenuItem value={"CFO"}>CFO</MenuItem>
            <MenuItem value={"CTO"}>CTO</MenuItem>
            <MenuItem value={""}>None</MenuItem>
          </Select>
        </FormControl>
        <input className={classes.submitButton} type="submit" value="Submit" />
      </Box>
    </div>
  );
};

export default Register;
