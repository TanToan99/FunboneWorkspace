export const showVideoCall = (videoAction) => {
  return {
    type: "ON_VIDEO",
    payload: videoAction,
  };
}