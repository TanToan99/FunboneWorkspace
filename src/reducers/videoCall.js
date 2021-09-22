const initializeState = true;

const videoReducer = (state=initializeState, action) => {
  switch (action.type) {
    case "ON_VIDEO": {
      return action.payload
    }
    default: {
      return state;
    }
  }
}

export default videoReducer;