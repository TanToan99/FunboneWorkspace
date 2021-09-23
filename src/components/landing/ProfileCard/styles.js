import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  profile: {
    justifyItems: "left",
    width: "300px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    padding: "10px",
    position: "absolute",
    zIndex: "3",
    background: "#FFFFFF",
    right: "25px",
    left: "auto",
  },
  nameprofile: {
    display: "grid",
    gridTemplateColumns: "22% 70% 8%",
    color: "black",
    padding: "10px",
    borderBottom: "2px solid #EEEEEE",
  },

  avt: {
    width: "50px",
    height: "50px",
    borderRadius: "3px",
    justifyItems: "center",
  },
  info: {
    textAlign: "left",
    justifyItems: "left",
    margin: "0",
  },
  textName: {
    fontSize: "18px",
    margin: "0",
    paddingBottom: "5px",
  },
  roleName: {
    fontSize: "15px",
    color: "gray",
    margin: "0",
  },

  edit: {
    width: "20px",
    height: "20px",
    padding: "2px",
    "&:hover": {
      width: "23px",
      height: "23px",
      cursor: "pointer",
    },
  },
  usermail: {
    fontSize: "15px",
    color: "gray",
    margin: "0",
    padding: "10px",
  },
  buttonLogout: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: "3px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white !important",
    height: "25px",
    fontWeight: "600 !important",
  },
});
