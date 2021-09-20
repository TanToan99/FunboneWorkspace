import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

export const useStyle = makeStyles({
  wsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: "100px",
    marginLeft: "50px",
    height: "100%"
  },
  listWorkspaces: {
    width: "25%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    justifyItems: "center"
  },
});
