
import {  useEffect, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

// This is the context that Unity will use to communicate with the React app.
const unityContext = new UnityContext({
  loaderUrl: "build/Newfolder.loader.js",
  dataUrl: "build/Newfolder.data",
  frameworkUrl: "build/Newfolder.framework.js",
  codeUrl: "build/Newfolder.wasm",
});

// This is the React component that will be rendering the Unity app.
function Demo() {
  const [progression, setProgression] = useState(0);

  const [didError, setDidError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
    
    unityContext.on("error", function (message) {
      setDidError(true);
      setErrorMessage(message);
    });
  }, []);
  function handleOnClickFullscreen() {
    unityContext.setFullscreen(true);
  }
  return (
    <div>
      <p>Loading {progression * 100} percent...</p>
      <button onClick={handleOnClickFullscreen}>Fullscreen</button>
      <Unity unityContext={unityContext} />
    </div>
  );
}

export default Demo;