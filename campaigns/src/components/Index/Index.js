import React from "react";
import moon from "../../static/moon.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <h5 className="text-content center">
        <strong>Take your business to the moon!</strong>
      </h5>
      <div className="center">
        <img
          src={moon}
          alt="moon"
          style={{ height: "200px", width: "200px", borderRadius: "50%" }}
        />
      </div>
      <p className="text-content center flow-text">
        Gravity connects you with influencers from Tiktok, Instagram and
        Snapchat to help propel your business.
      </p>
      <div className="row center">
        <div className="col s12">
          <button
            class="waves-effect waves-light btn-large"
            style={{
              marginBottom: "20px",
              marginRight: "10px",
              borderRadius: "50px",
            }}
          >
            <Link to="/business">I'm an Business Owner</Link>
          </button>
        </div>
        <div className="row center">
          <div className="col s12">
            <button
              class="waves-effect waves-light btn-large"
              style={{ marginBottom: "20px", borderRadius: "50px" }}
            >
              <Link to="/influencer">I'm an Influencer</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
