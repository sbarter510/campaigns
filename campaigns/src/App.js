import { useReducer, useRef, useEffect, useState } from "react";
import { Context } from "./context/context";
import { appReducer } from "./context/reducer";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css/dist/js/materialize.min";

import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three/build/three";

import bgImg from "./static/purp.jpg";

//compoenents

import Header from "./components/Header/Header";
import Index from "./components/Index/Index";
import Business from "./components/Business/Business";
import Sliders from "./components/Index/Sliders/Sliders";
import InfluenceSlider from "./components/Index/Sliders/InfluenceSlider";
import Influencer from "./components/Influencer/Influencer";
import Signup from "./components/Signup/Signup";

//React Router Dom elements
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const initialState = {
  signedIn: false,
  businessUser: false,
  influenceUser: false,
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //!!Important. All text must be classed "text-content" in order to be toggled off and on with dark mode
  // TODO: Add darkmode preference to local storage so it doesnt reset on refresh
  //TODO move all styling to css files for appropriate components

  return (
    //wraps App to provide context to all components passing in current state and dispatch to reducer as value
    <Context.Provider value={[state, dispatch]}>
      <Router>
        {/* TODO: figure out a way to store darkmode settings in CSS. Class based? */}
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              {/* This is the div where animated background is placed. Index Only. */}

              <Index />

              <Sliders />
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
