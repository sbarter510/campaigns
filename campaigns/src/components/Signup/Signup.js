import React, { useEffect, useRef, useState } from "react";
import { Redirect, Link } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min";
import "./signup.css";
import axios from "axios";

export default function Signup() {
  useEffect(() => {
    M.updateTextFields();
  });

  const [signUpState, setSignUpState] = useState();

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/user/register", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        userName: firstNameRef.current.value,
      })
      .then((res) => {
        if (res.data.userName) {
          setSignUpState(true);
        } else {
          console.log(res.data.msg);
        }
      });
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  return (
    <div className="row" style={{ margin: "8vh auto" }}>
      <div className="col s12 m6 offset-m3 center">
        <div className="card-panel">
          <div className="row">
            <form className="col s12">
              <h1 className="purple-text">Sign up</h1>
              {/* email */}

              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  ref={emailRef}
                />
                <label for="email">Email</label>
              </div>

              {/* firstName */}

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
              {/* lastName */}
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  ref={lastNameRef}
                />
                <label for="last_name">Last Name</label>
              </div>

              {/* password */}

              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  ref={passwordRef}
                />
                <label for="password">Password</label>
              </div>

              {/* //password confirmation */}

              <div className="input-field col s12">
                <input
                  id="passwordConfirmation"
                  type="password"
                  className="validate"
                  ref={confirmPasswordRef}
                />
                <label for="password">Password</label>
              </div>

              {/* //button */}
              <div className="center">
                <button
                  class="waves-effect waves-light btn-large hoverable"
                  onClick={(e) => handleUserSubmit(e)}
                >
                  Submit
                </button>
                <p className="purple-text">
                  <em>
                    Already have a account? <Link to="/login">Sign in</Link>
                  </em>
                </p>
                {signUpState ? <Redirect to="/login" /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
