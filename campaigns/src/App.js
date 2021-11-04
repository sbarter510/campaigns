import { useReducer, useRef, useEffect, useState } from "react";
import { Context } from "./context/context";
import { appReducer } from "./context/reducer";
import "materialize-css/dist/css/materialize.min.css";

import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three/build/three";

//compoenents

import Header from "./components/Header/Header";
import Index from "./components/Index/Index";
import Business from "./components/Business/Business";
import Slider from "./components/Index/Slider";
import InfluenceSlider from "./components/Index/InfluenceSlider";
import Influencer from "./components/Influencer/Influencer";
import Signup from "./components/Signup/Signup";
import NetworksBar from "./components/Index/NetworksBar";

//React Router Dom elements
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const initialState = {
  darkMode: false,
  signedIn: false,
  businessUser: false,
  influenceUser: false,
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //!!Important. All text must be classed "text-content" in order to be toggled off and on with dark mode
  // TODO: Add darkmode preference to local storage so it doesnt reset on refresh
  //TODO move all styling to css files for appropriate components
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
    if (window.location.href === "http://localhost:3000/") {
      console.log("triggered");
      return dispatch({
        type: "TOGGLE_DARK_MODE",
        payload: RINGS({
          el: vantaElementRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 850.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: state.darkMode === true ? 0xffffff : 0x0,
        }),
      });
    }
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  // const setUser = () => {
  //   return dispatch({ type: "SIGN_IN", payload: userRef.current.value });
  // };

  const vantaElementRef = useRef(null);

  useEffect(() => {
    const dark = 0x0;
    const light = 0xffffff;

    if (
      !state.vantaEffect &&
      window.location.href === "http://localhost:3000/"
    ) {
      dispatch({
        type: "UPDATE_BG_COLOR",
        payload: RINGS({
          el: vantaElementRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 850.0,
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
  }, [state.vantaEffect]);

  return (
    //wraps App to provide context to all components passing in current state and dispatch to reducer as value
    <Context.Provider value={[state, dispatch]}>
      <Router>
        {/* TODO: figure out a way to store darkmode settings in CSS. Class based? */}
        <div
          className="App"
          style={
            state.darkMode
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
        >
          <Header toggleDarkMode={toggleDarkMode} />
          <Switch>
            <Route exact path="/">
              {/* This is the div where animated background is placed. Index Only. */}
              <div ref={vantaElementRef}>
                <Index />
              </div>
              <NetworksBar />
              <Slider />
              <InfluenceSlider />
            </Route>
            <Route exact path="/business">
              <Business />
            </Route>
            <Route exact path="/influencer">
              <Influencer />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
