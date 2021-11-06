import React from "react";

export default function InfluencerResult(props) {
  return (
    <div className="center">
      <img
        src={props.img}
        alt=""
        style={{ height: "250px", borderRadius: "25px" }}
        className="center"
      />
      <p className="flow-text center black-text">{props.quote}</p>
    </div>
  );
}
