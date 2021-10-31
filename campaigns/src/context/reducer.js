export const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SIGN_IN":
      return { ...state, signedIn: true };
    default:
      return state;
  }
};
