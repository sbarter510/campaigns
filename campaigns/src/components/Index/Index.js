import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Index() {
  return (
    //Todo add hoverable to buttons
    <div id="index-bg">
      <div className="container">
        <div className="row">
          <div className="col m12">
            <h1 className="text-content left headline flow-text">
              Take your business to the moon!
            </h1>
            <p className="text-content left flow-text">
              Gravity connects you with influencers from <br />
              Tiktok, Instagram and Snapchat to help <br /> propel your
              business.
            </p>
          </div>
        </div>


        <div className="row">
          <div className="col s12 m2">
            <Link to="/business">
              <button class="waves-effect waves-light btn-large hoverable">
                Advertiser
              </button>
            </Link>
          </div>

          <div className="col s12 m10">
            <Link to="/influencer">
              <button class="waves-effect waves-light btn-large hoverable">
                Influencer
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
