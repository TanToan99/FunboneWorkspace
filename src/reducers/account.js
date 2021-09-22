const initializeState = {
  uid: "",
  username: "",
  fullname: "",
  avatar: "",
  role: "",
};

const accountReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        uid: action.payload.uid,
        username: action.payload.username,
        fullname: action.payload.fullname,
        role: action.payload.role,
      };
    }
    
    case "REMOVE_USER": {
      return {
        ...state,
        uid: "",
        username: "",
        fullname: "",
        role: "",
      };
    }
      
    default: {
      return state;
    }
  }
}

export default accountReducer;