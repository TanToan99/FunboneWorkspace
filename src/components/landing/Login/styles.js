import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },

  textfield: {
    margin: "10px 0 !important",
  },

  titleForm: {
    fontSize: "30px",
    textTransform: "uppercase",
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  buttonLogin: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white !important',
    height: 48,
    padding: '0 30px',
    fontWeight: "600 !important"
  },

  link: {
    textDecoration: "none",
    color: "#00b2ff"
  },

  loginForm: {
    padding: "20px 50px"
  },

  directBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
}));
