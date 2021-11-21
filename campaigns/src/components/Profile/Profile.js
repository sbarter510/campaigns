import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ProfileCover from "./ProfileCover/ProfileCover";
import ProgressBar from "../ProgressBar/ProgressBar";

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
        <>
          <ProfileCover
            userName={state.userName}
            userImage={null}
            coverPhoto={state.coverPhoto}
          />
          {/* <form method="POST">
            <input type="file" onChange={(e) => uploadHandler(e)}></input>
          </form> */}
          {/* {file && <ProgressBar file={file} />} */}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
