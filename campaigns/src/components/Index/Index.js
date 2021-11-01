import React from "react";
import moon from "../../static/moon.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="container">
      {/* perhaps use svg to make background effect */}
      {/* <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          opacity: "0.2",
          fill: "red",
        }}
      >
        <circle cx="3" cy="0" r="15" />
      </svg> */}
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
        <div className="col s4">
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

        <div className="col s8">
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
