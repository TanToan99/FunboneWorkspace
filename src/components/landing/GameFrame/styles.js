import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  gameFrame: {
    position: "relative",
    background: "black",
    height: "100%",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  videoBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    height: "150px",
    width: "100%",
    zIndex: "1",
  },
});
