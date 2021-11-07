import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ProfileCover from "./ProfileCover/ProfileCover";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default function Profile() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/auth")
      .then((res) => {
        console.log(res);
        return dispatch({
          type: "LOG_IN",
          payload: res.data.userName,
        });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  //need to verify token and only display if valid
  return (
    <div>
      {state.userName ? (
        <ProfileCover userName={state.userName} />
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
