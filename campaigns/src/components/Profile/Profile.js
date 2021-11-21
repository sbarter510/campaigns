import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ProfileCover from "./ProfileCover/ProfileCover";
import ProgressBar from "../ProgressBar/ProgressBar";

//right place??
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default function Profile() {
  const [state, dispatch] = useContext(Context);

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/auth")
      .then((res) => {
        dispatch({
          type: "LOG_IN",
          payload: res.data.userName,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile")
      .then((res) => {
        console.log(res);
        return setProfile(res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      setProfile({});
    };
  }, []);

  //need to verify token and only display if valid
  return (
    <div>
      {state.userName ? (
        <>
          <ProfileCover
            userName={state.userName}
            coverPhotoURL={profile ? profile.coverPhotoURL : null}
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
