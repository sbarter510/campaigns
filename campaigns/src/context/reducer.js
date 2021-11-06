export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, signedIn: true, userName: action.payload };
    default:
      return state;
  }
};
