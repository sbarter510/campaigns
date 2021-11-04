import React from "react";
import insta from "../../static/instagram.png";

import twitch from "../../static/twitch.png";
import youtube from "../../static/youtube.png";

export default function NetworksBar() {
  return (
    <div className="container">
      <div className="row center" style={{ marginTop: "600px" }}>
        <div className="col s4">
          <img
            src={insta}
            alt="instagram"
            style={{ height: "60%", width: "60%" }}
          />
        </div>
        <div className="col s4">
          <img
            src={twitch}
            alt="instagram"
            style={{ height: "60%", width: "60%" }}
          />
        </div>
        <div className="col s4">
          <img
            src={youtube}
            alt="instagram"
            style={{ height: "60%", width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
}
