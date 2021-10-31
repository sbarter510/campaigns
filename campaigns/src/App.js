import { useContext, useReducer, useRef } from "react";
import { Context } from "./context/context";
import { appReducer } from "./context/reducer";
import "materialize-css/dist/css/materialize.min.css";

//compoenents
import Header from "./components/Header/Header";

const initialState = {
  darkMode: false,
  signedIn: false,
};

function App() {
  const userRef = useRef(null);

  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleDarkMode = () => {
    const icons = document.getElementsByClassName("material-icons");
    const colorChangeHandler = () => {
      for (let i = 0; i < icons.length; i++) {
        if (state.darkMode) {
          icons[i].style.color = "white";
        } else {
          icons[i].style.color = "black";
        }
      }
    };
    colorChangeHandler();
    return dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  const setUser = () => {
    return dispatch({ type: "SIGN_IN", payload: userRef.current.value });
  };

  return (
    //wraps App to provide context to all components passing in current state and dispatch to reducer as value
    <Context.Provider value={[state, dispatch]}>
      <div
        className="App"
        style={{ backgroundColor: state.darkMode ? "black" : "white" }}
      >
        <Header toggleDarkMode={toggleDarkMode} reducer={[state, dispatch]} />
      </div>
    </Context.Provider>
  );
}

export default App;
