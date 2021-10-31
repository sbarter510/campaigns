import { useContext, useReducer } from "react";
import { Context } from "./context/context";

import { appReducer } from "./context/reducer";

const initialState = {
  darkMode: false,
  signedIn: false,
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleDarkMode = () => {
    return dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <Context.Provider value={[state, dispatch]}>
      <div
        className="App"
        style={{ backgroundColor: state.darkMode ? "black" : "white" }}
      >
        <button type="button" onClick={toggleDarkMode}>
          X
        </button>
      </div>
    </Context.Provider>
  );
}

export default App;
