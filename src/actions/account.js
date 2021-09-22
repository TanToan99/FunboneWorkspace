export const addAccount = (account) => {
  return {
    type: "ADD_USER",
    payload: account,
  };
}

export const removeAccount = (account) => {
  return {
    type: "REMOVE_USER",
    payload: account,
  };
}