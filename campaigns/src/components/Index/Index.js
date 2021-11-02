import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

export default function Index() {
  return (
    <div className="container">
      <div className="row">
        <div className="col m12">
          <h1 className="text-content left" style={{ fontFamily: "Dosis" }}>
            Take your business to the moon!
          </h1>
          <p className="text-content left flow-text">
            Gravity connects you with influencers from Tiktok, Instagram and
            Snapchat to help propel your business.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m2">
          <button
            class="waves-effect waves-light btn-large"
            style={{
              marginBottom: "20px",
              marginRight: "10px",
              borderRadius: "50px",
            }}
          >
            <Link to="/business">Advertiser</Link>
          </button>
        </div>

        <div className="col s12 m10">
          <button
            class="waves-effect waves-light btn-large"
            style={{ marginBottom: "20px", borderRadius: "50px" }}
          >
            <Link to="/influencer">Influencer</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
