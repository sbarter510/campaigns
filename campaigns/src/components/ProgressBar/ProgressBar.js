import React, { useContext, useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { Context } from "../../context/context";
import axios from "axios";

export default function ProgressBar(props) {
  //need to add new profile picture url to database so that next time they load no request needed
  const [state, dispatch] = useContext(Context);
  const { progress, url } = useStorage(props.file);

  useEffect(() => {
    axios
      .post("http://localhost:5000/user/changecoverphoto", {
        userName: state.userName,
        coverPhotoURL: url,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "CHANGE_COVER_PHOTO",
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
