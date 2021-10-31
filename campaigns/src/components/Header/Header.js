import React from "react";

export default function Header(props) {
  return (
    <nav>
      <div class="nav-wrapper grey">
        <a href="#" class="brand-logo center">
          Gravitate
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
        <i class="material-icons right">person</i>

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
