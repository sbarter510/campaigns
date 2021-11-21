export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        signedIn: true,
        userName: action.payload,
      };
    case "LOG_OUT":
      return { ...state, signedIn: false, userName: null, coverPhoto: null };
    case "CHANGE_COVER_PHOTO":
      return { ...state, coverPhoto: action.payload };
    default:
      return state;
  }
};
