import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({


  wsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    margin: "10px 0",
  },

  listWorkspaces: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    justifyItems: "center",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
  },
});
