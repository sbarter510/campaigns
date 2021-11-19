import React from "react";
import useStorage from "../../hooks/useStorage";

export default function ProgressBar(props) {
  const { progress, url } = useStorage(props.file);
  return (
    <div
      className="progress-bar"
      style={{
        height: "20px",
        backgroundColor: "grey",
        width: { progress } + "%",
      }}
    >
      <h2>{url && url}</h2>
    </div>
  );
}
