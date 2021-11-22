import React, { useContext, useEffect } from "react";
import useStorage from "../../../hooks/useStorage";
import axios from "axios";
import { Context } from "../../../context/context";

export default function ProfilePhotoProgressBar(props) {
  //need to add new profile picture url to database so that next time they load no request needed
  const [state, dispatch] = useContext(Context);
  const { progress, url } = useStorage(props.file);

  useEffect(() => {
    axios
      .post("http://localhost:5000/user/changeprofilephoto", {
        userName: state.userName,
        profilePhotoURL: url,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "CHANGE_PROFILE_PHOTO",
          payload: url,
        });
      })
      .catch((e) => console.log(e));
  }, [url]);

  return (
    <div
      className="progress-bar"
      style={{
        height: "20px",
        backgroundColor: "grey",
        width: { progress } + "%",
        transition: "width 2s",
      }}
    ></div>
  );
}
