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
  const [editing, setEditing] = useState("");
  const [editedCoverPhoto, setEditedCoverPhoto] = useState(false);

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
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile")
      .then((res) => {
        console.log(res);
        setProfile(() => res.data);
      })
      .catch((err) => console.log(err));

    // return () => {
    //   setProfile((prevProfile) => {
    //     return { ...prevProfile, coverPhotoURL: "" };
    //   });
    // };
  }, []);

  useEffect(() => {
    if (profile) {
      dispatch({
        type: "CHANGE_COVER_PHOTO",
        payload: profile.coverPhotoURL,
      });
      dispatch({
        type: "CHANGE_PROFILE_PHOTO",
        payload: profile.profilePhotoURL,
      });
    }
  }, [profile]);

  //need to verify token and only display if valid
  return (
    <>
      {state.userName ? (
        <>
          {profile ? (
            <div className="container">
              <ProfileCover
                userName={state.userName}
                coverPhotoURL={state.coverPhoto}
                profilePhotoURL={state.profilePhoto}
                editing={editing}
                setEditing={setEditing}
                setEditedCoverPhoto={setEditedCoverPhoto}
              />
              <ProfileContent
                profile={profile}
                editing={editing}
                setEditing={setEditing}
              />
            </div>
          ) : null}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
