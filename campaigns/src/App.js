import { useReducer, useRef, useEffect, useState } from "react";
import { Context } from "./context/context";
import { appReducer } from "./context/reducer";
import "materialize-css/dist/css/materialize.min.css";

import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three/build/three";

//compoenents
// import SVG from "./components/SVG/SVG";
import Header from "./components/Header/Header";
import Index from "./components/Index/Index";
import Business from "./components/Business/Business";

//React Router Dom elements
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const initialState = {
  darkMode: false,
  signedIn: false,
  businessUser: false,
  influenceUser: false,
};

function App() {
  const userRef = useRef(null);

  const [state, dispatch] = useReducer(appReducer, initialState);

  //!!Important. All text must be classed "text-content" in order to be toggled off and on with dark mode
  // TODO: Add darkmode preference to local storage so it doesnt reset on refresh
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
    return dispatch({
      type: "TOGGLE_DARK_MODE",
      payload: RINGS({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        maxHeight: 300.0,
        minWidth: 300.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: state.darkMode === true ? 0xffffff : 0x18181e,
      }),
    });
  };

  const setUser = () => {
    return dispatch({ type: "SIGN_IN", payload: userRef.current.value });
  };

  const myRef = useRef(null);
  useEffect(() => {
    const dark = 0x18181e;
    const light = 0xffffff;

    if (!state.vantaEffect) {
      dispatch({
        type: "UPDATE_BG_COLOR",
        payload: RINGS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          maxHeight: 300.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: light,
        }),
      });
    }
    return () => {
      if (state.vantaEffect) state.vantaEffect.destroy();
    };
  }, []);

  return (
    //wraps App to provide context to all components passing in current state and dispatch to reducer as value
    <Context.Provider value={[state, dispatch]}>
      <Router>
        <div
          className="App"
          style={
            state.darkMode
              ? { backgroundColor: "#374659" }
              : { backgroundColor: "#E1EBF5" }
          }
        >
          <Header toggleDarkMode={toggleDarkMode} />
          <Switch>
            <Route exact path="/">
              <div ref={myRef}>
                <Index />
              </div>
            </Route>
            <Route exact path="/business">
              <Business />
            </Route>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
