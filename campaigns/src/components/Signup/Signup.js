import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import "./signup.css";

export default function Signup() {
  useEffect(() => {
    M.updateTextFields();
  });
  return (
    <div className="row valign-wrapper" style={{ height: "100%" }}>
      <div className="col s12 m6 offset-m3">
        <div className="card-panel">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="Placeholder"
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
