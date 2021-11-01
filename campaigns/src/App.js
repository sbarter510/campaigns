import { useContext, useReducer, useRef } from "react";
import { Context } from "./context/context";
import { appReducer } from "./context/reducer";
import "materialize-css/dist/css/materialize.min.css";

//compoenents
import Header from "./components/Header/Header";
import Index from "./components/Index/Index";
import Business from "./components/Business/Business";

//React Router Dom elements
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

const initialState = {
  darkMode: false,
  signedIn: false,
  businessUser: false,
  influenceUser: false,
};

function App() {
  const userRef = useRef(null);

  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleDarkMode = () => {
    const icons = document.getElementsByClassName("material-icons");
    const text = document.getElementsByClassName("text-content");
    const colorChangeHandler = () => {
      for (let i = 0; i < icons.length; i++) {
        if (state.darkMode) {
          icons[i].style.color = "white";
        } else {
          icons[i].style.color = "black";
        }
      }
    };

    const textChangeHandler = () => {
      for (let i = 0; i < text.length; i++) {
        if (state.darkMode) {
          text[i].style.color = "black";
        } else {
          text[i].style.color = "white";
        }
      }
    };
    colorChangeHandler();
    textChangeHandler();
    return dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  const setUser = () => {
    return dispatch({ type: "SIGN_IN", payload: userRef.current.value });
  };

  return (
    //wraps App to provide context to all components passing in current state and dispatch to reducer as value
    <Context.Provider value={[state, dispatch]}>
      <Router>
        <div
          className="App"
          style={
            state.darkMode
              ? { backgroundColor: "#232E3C" }
              : { backgroundColor: "#E1EBF5" }
          }
        >
          <Header toggleDarkMode={toggleDarkMode} reducer={[state, dispatch]} />
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/business" component={withRouter(Business)}>
              <Business />
            </Route>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
