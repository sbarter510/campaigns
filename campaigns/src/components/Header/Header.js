import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Context } from "../../context/context";

export default function Header(props) {
  const [state, dispatch] = useContext(Context);

  return (
    <nav>
      <div class="nav-wrapper purple darken-1 sticky" id="nav-bar">
        <a href="/" class="brand-logo center">
          Gravity
        </a>
        {!state.signedIn ? (
          <i class="material-icons right">
            <Link to="/signup">person</Link>
          </i>
        ) : (
          <i class="material-icons right">
            <Link to="/logout">logout</Link>
          </i>
        )}
      </div>
    </nav>
  );
}
