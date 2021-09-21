import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    
    height: "calc(100vh - 70px)",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
  },

  sidebarTitleBlock: {
    display: "block",
    padding: "10px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderBottom: "1px solid white"
  },

  sidebarTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase"
  },

  workspaceImage: {
    background: "black",
    height: "40px",
    width: "40px",
    borderRadius: "10px"
  },

  videoCallBlock: {
    padding: "10px 0px"
  },

  videoFrame: {
    flex: "0 0 calc(20% - 20px)",
    margin: "10px",
    position: "relative"
  },

  videoControl: {
    position: "absolute",
    bottom: "0px",
    height: "30px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    background: "#0000008a"
  },

  nameUser: {
    position: "absolute",
    fontSize: "14px",
    textAlign: "center",
    width: "100%",
    color: "white",
  },

  imageSample: {
    background: "white",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  }
});