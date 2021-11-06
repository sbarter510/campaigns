import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import "./slider.css";

export default function InfluenceSlider() {
  useEffect(() => {
    var elems = document.querySelectorAll(".slider");
    var instances = M.Slider.init(elems, {});
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col s12 m6">
          <h1 className="slider-text-content purple-text">
            Make money promoting products you love!
          </h1>
          <p className="slider-text-content">
            We match you with companies selling the products you're passionate
            about. Whether it be fashion, technology, home decor we connect you
            with the right products for your audience.
          </p>
        </div>
        <div className="col s12 m6">
          <div className="container">
            <div className="slider center">
              <ul className="slides  circle">
                <li>
                  <img
                    src="https://lorempixel.com/250/250/people/5"
                    className="circle"
                  />
                  <div className="caption left-align bottom">
                    <h5 className="pink-text bold">Polanski and Polanski</h5>
                    <h6 className="light grey-text text-lighten-3">
                      Increased customer base by 15%
                    </h6>
                  </div>
                </li>
                <li>
                  <img
                    src="https://lorempixel.com/250/250/people/6"
                    className="circle"
                  />
                  <div class="caption left-align">
                    <h5>This Guy</h5>
                    <h5 class="light grey-text text-lighten-3">
                      Quit his job and makes $10,000 a month from his shopify
                      site
                    </h5>
                  </div>
                </li>
                <li>
                  <img
                    src="https://lorempixel.com/250/250/people/3"
                    className="circle"
                  />
                  <div class="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
                <li>
                  <img
                    src="https://lorempixel.com/250/250/people/4"
                    className="circle"
                  />
                  <div class="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 class="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
