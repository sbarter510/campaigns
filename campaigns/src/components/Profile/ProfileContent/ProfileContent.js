import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default function ProfileContent() {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {});
  });
  return (
    <div className="row" style={{ position: "relative", bottom: "100px" }}>
      <div className="col s12">
        <h2>About</h2>
        <hr></hr>
        <p className="flow-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ullamcorper malesuada proin libero nunc. Facilisi morbi tempus iaculis
          urna. Tellus in hac habitasse platea dictumst vestibulum. Pharetra sit
          amet aliquam id diam maecenas ultricies mi eget. Donec enim diam
          vulputate ut pharetra sit amet. Ornare arcu odio ut sem nulla pharetra
          diam. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
          Pharetra magna ac placerat vestibulum. Bibendum at varius vel pharetra
          vel turpis nunc. Sit amet massa vitae tortor condimentum lacinia quis.
          Neque gravida in fermentum et sollicitudin.
        </p>
        <hr />
      </div>
      <div className="row" style={{ height: "500px" }}>
        <div className="col s12 m4">
          <h2>Information</h2>

          <ul>
            <li>Name:</li>
            <li>Email:</li>
            <li>Phone:</li>
            <li>Address:</li>
          </ul>
        </div>

        <div className="col s12 m8">
          <div className="card">
            <h2 className="center">Content</h2>

            <div class="carousel">
              <a class="carousel-item" href="#one!">
                <img src="https://lorempixel.com/250/250/nature/1" />
              </a>
              <a class="carousel-item" href="#two!">
                <img src="https://lorempixel.com/250/250/nature/2" />
              </a>
              <a class="carousel-item" href="#three!">
                <img src="https://lorempixel.com/250/250/nature/3" />
              </a>
              <a class="carousel-item" href="#four!">
                <img src="https://lorempixel.com/250/250/nature/4" />
              </a>
              <a class="carousel-item" href="#five!">
                <img src="https://lorempixel.com/250/250/nature/5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
