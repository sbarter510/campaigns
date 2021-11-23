import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import ProfilePhotoModal from "../ProfilePhotoModal/ProfilePhotoModal";

export default function ProfileContent(props) {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {});
  });

  return (
    <div className="row">
      <div className="col s12">
        <h2>About</h2>
        <hr></hr>
        {props.editing ? (
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <textarea
                    id="textarea1"
                    class="materialize-textarea"
                  ></textarea>
                  <label
                    for="textarea1"
                    placeholder={props.editing ? props.profile : null}
                  >
                    Tell us about yourself
                  </label>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <p className="flow-text">{props.profile.userName}</p>
        )}

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
