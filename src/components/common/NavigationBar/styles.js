import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },

  navbar: {
    height: "50px",
  },

  findBlock: {
    flex: "0 0 20%",
  },

  findTextBox: {
    background: "#ffffffc7",
    height: "40px",
    borderRadius: "20px !important",
    padding: "5px 20px ",
  },

  logo: {
    height: "40px",
    width: "auto",
  },

  userBlock: {
    display: "flex",
    flexDirection: "column",
  },
}));
