import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    //Todo add hoverable to buttons
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
          <Link to="/business">
            <button
              class="waves-effect waves-light btn-large hoverable"
              style={{
                marginBottom: "20px",
                marginRight: "10px",
                borderRadius: "50px",
              }}
            >
              Advertiser
            </button>
          </Link>
        </div>

        <div className="col s12 m10">
          <Link to="/influencer">
            <button
              class="waves-effect waves-light btn-large hoverable"
              style={{ marginBottom: "20px", borderRadius: "50px" }}
            >
              Influencer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
