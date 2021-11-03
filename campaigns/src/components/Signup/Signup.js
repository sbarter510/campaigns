import React, { useEffect, useRef } from "react";
import M from "materialize-css/dist/js/materialize.min";
import "./signup.css";
import axios from "axios";

export default function Signup() {
  useEffect(() => {
    M.updateTextFields();
  });

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/influencer/register", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        userName: firstNameRef.current.value,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  return (
    <div className="row valign-wrapper" style={{ height: "100vh" }}>
      <div className="col s12 m6 offset-m3 center">
        <h2 className="text-content">Signup</h2>
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
                    ref={firstNameRef}
                  />
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="last_name"
                    type="text"
                    className="validate"
                    ref={lastNameRef}
                  />
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    ref={passwordRef}
                  />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="passwordConfirmation"
                    type="password"
                    className="validate"
                    ref={confirmPasswordRef}
                  />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    ref={emailRef}
                  />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="center">
                <button
                  class="waves-effect waves-light btn-large hoverable"
                  style={{ marginBottom: "20px", borderRadius: "25px" }}
                  onClick={(e) => handleUserSubmit(e)}
                >
                  Submit
                </button>
                <p>Already have a account? Sign in</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
