import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  wsContainer: {
    padding: "20px 0px",
  },

  listWorkspaces: {
    justifyItems: "center",
    height: "calc(100vh - 90px)",
    borderRadius: "10px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },

  imageSrc: {
    borderRadius: "10px",
  },

  detailWorkspace: {
    justifyItems: "center",
    height: "calc(100vh - 90px)",
    borderRadius: "10px",
    background: "#ffffff",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },

  viewContainer: {
    display: "flex",
    paddingTop: "30px",
    justifyContent: "center",
    width: "100%",
    height: "75%",
    zIndex: 0,
    position: "relative",
  },

  btn: {
    position: "absolute",
    display: "flex",
    alignSelf: "flex-end",
    paddingBottom: "15px",
    zIndex: 1,
  },

  picture: {
    width: "auto",
    height: "80%",
  },

  introWorkspace: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#FFFFFF",
    borderRadius: "10px 10px 0 0",
  },
});
