import React from "react";
import { useStyles } from "./styles";
import Unity, { UnityContext } from "react-unity-webgl";

// This is the context that Unity will use to communicate with the React app.
const unityContext = new UnityContext({
  loaderUrl: "build/Build.loader.js",
  dataUrl: "build/Build.data",
  frameworkUrl: "build/Build.framework.js",
  codeUrl: "build/Build.wasm",
});

// This is the React component that will be rendering the Unity app.
function Demo() {
  const classes = useStyles();
  return <Unity unityContext={unityContext} className={classes.unitystyle} />;
}

export default Demo;
