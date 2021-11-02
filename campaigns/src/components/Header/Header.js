import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav>
      <div class="nav-wrapper" id="nav-bar">
        <a
          href="/"
          class="brand-logo center black-text"
          style={{ fontFamily: "Roboto", fontSize: "3rem" }}
        >
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
          class="material-icons right active"
          id="darkModeToggle"
          onClick={props.toggleDarkMode}
        >
          dark_mode
        </i>
      </div>
    </nav>
  );
}
