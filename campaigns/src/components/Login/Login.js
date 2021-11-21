import React, { useEffect, useRef, useContext, useState } from "react";
import { Context } from "../../context/context";
import { Redirect } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min";
import axios from "axios";

export default function Login() {
  const [state, dispatch] = useContext(Context);
  const [email, setEmail] = useState("");

  useEffect(() => {
    M.updateTextFields();
  });

  useEffect(() => {
    axios
      .post("http://localhost:5000/user/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.data.userName) {
          //add jwt token to local storage
          localStorage.setItem("token", res.data.token);
          return dispatch({
            type: "LOG_IN",
            payload: res.data.userName,
          });
        } else {
          console.log(res.data);
          throw new Error((e) => res.data.msg);
        }
      })
      .catch((e) => console.log(e));
  }, [email, dispatch]);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    return setEmail(emailRef.current.value);
    // e.preventDefault();
    // await axios
    //   .post("http://localhost:5000/user/login", {
    //     email: emailRef.current.value,
    //     password: passwordRef.current.value,
    //   })
    //   .then((res) => {
    //     if (res.data.userName) {
    //       //add jwt token to local storage
    //       localStorage.setItem("token", res.data.token);
    //       return dispatch({
    //         type: "LOG_IN",
    //         payload: res.data.userName,
    //       });
    //     } else {
    //       console.log(res.data);
    //       throw new Error((e) => res.data.msg);
    //     }
    //   })
    //   .catch((e) => console.log(e));
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="row" style={{ margin: "8vh auto" }}>
      <div className="col s12 m6 offset-m3 center">
        <div className="card-panel">
          <div className="row">
            <form className="col s12">
              <h1 className="purple-text">Log In</h1>
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

              {/* //button */}
              <div className="center">
                <button
                  class="waves-effect waves-light btn-large hoverable"
                  onClick={(e) => handleUserSubmit(e)}
                >
                  Submit
                </button>
                <p className="purple-text">
                  <em>Already have a account? Sign in</em>
                </p>
                {state.signedIn ? <Redirect to="/profile" /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
