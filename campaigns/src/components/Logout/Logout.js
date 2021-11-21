import React, { useContext } from "react";
import { Context } from "../../context/context";
import { Redirect } from "react-router-dom";

export default function Logout() {
  const [state, dispatch] = useContext(Context);

  const handleUserSubmit = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };
  return (
    <div className="row" style={{ margin: "8vh auto" }}>
      <div className="col s12 m6 offset-m3 center">
        <div className="card-panel">
          <div className="row">
            <form className="col s12">
              <h1 className="purple-text">Log out?</h1>

              {/* //button */}
              <div className="center">
                <button
                  class="waves-effect waves-light btn-large hoverable"
                  onClick={(e) => handleUserSubmit(e)}
                >
                  Yes, Logout
                </button>
                {!state.signedIn ? <Redirect to="/" /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
