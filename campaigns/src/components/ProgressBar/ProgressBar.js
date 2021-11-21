import React, { useContext, useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { Context } from "../../context/context";

export default function ProgressBar(props) {
  //need to add new profile picture url to database so that next time they load no request needed
  const [state, dispatch] = useContext(Context);
  const { progress, url } = useStorage(props.file);

  useEffect(() => {
    dispatch({ type: "SET_COVER_PHOTO", payload: url });
  }, [url]);

  return (
    <>
      <div
        className="progress-bar"
        style={{
          height: "20px",
          backgroundColor: "grey",
          width: { progress } + "%",
        }}
      ></div>
      {/* <h2>{url && url}</h2> */}
    </>
  );
}
