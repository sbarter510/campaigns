import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ProfileCover from "./ProfileCover/ProfileCover";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProfileContent from "./ProfileContent/ProfileContent";

export default function Profile() {
  const [state, dispatch] = useContext(Context);

  const [profile, setProfile] = useState();
  const [edited, setEdited] = useState("");

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
        return setProfile(() => res.data);
      })
      .catch((err) => console.log(err));

    return () => {
      setProfile((prevProfile) => {
        return { ...prevProfile, coverPhotoURL: "" };
      });
    };
  }, [edited]);

  //need to verify token and only display if valid
  return (
    <>
      {state.userName ? (
        <>
          {profile ? (
            <div className="container">
              <ProfileCover
                userName={state.userName}
                coverPhotoURL={profile ? profile.coverPhotoURL : null}
                setEdited={setEdited}
              />
              <ProfileContent />
            </div>
          ) : null}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
