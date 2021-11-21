export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, signedIn: true, userName: action.payload };
    case "SET_COVER_PHOTO":
      return { ...state, coverPhoto: action.payload };
    default:
      return state;
  }
};
