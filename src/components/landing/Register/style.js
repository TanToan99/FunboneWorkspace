import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
  registerContainer: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  titleRegister: {
    fontSize: "30px",
    padding: "3px 0px 3px 0px",
    textTransform: "uppercase",
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  submitButton: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    outline: "unset",
    padding: "0 30px",
    marginLeft: "20px",
    height: 48,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    fontSize: "15px",
    color: "white !important",
    fontWeight: "600 !important",
  },
  toLogin: {
    textDecoration: "none",
    color: "#00b2ff",
  },
});
