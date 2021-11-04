import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header(props) {
  return (
    <nav>
      <div class="nav-wrapper purple darken-1" id="nav-bar">
        <a href="/" class="brand-logo center">
          Gravity
        </a>

        {/* {for use with mobile devices pop up on side} */}
        {/* <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul> */}
        <i class="material-icons right">
          <Link to="/signup">person</Link>
        </i>

        <i
          class="material-icons right"
          id="darkModeToggle"
          onClick={props.toggleDarkMode}
        >
          dark_mode
        </i>
      </div>
    </nav>
  );
}
