import React from "react";
import "./profileCover.css";

export default function ProfileCover(props) {
  return (
    <div id="cover-wrapper">
      {window.addEventListener(
        "resize",
        () => {
          const element = document.getElementById("profile-row");
          console.log(element);
          element.classList.add("center");
        },
        true
      )}
      <div className="container">
        <div id="cover-container">
          <div id="cover-photo-wrapper">
            {/* add image here */}
            <a
              id="cover-photo-button"
              class="btn-floating btn-medium waves-effect waves-light teal right"
            >
              <i class="material-icons">add</i>
            </a>
          </div>

          <div className="row" style={{ height: "30%" }}>
            <div id="profile-row" className="col s12 m3 l3">
              <img
                id="profile-pic"
                className="circle"
                src="https://lorempixel.com/250/250/people/3"
              />
            </div>

            <div className="col s12 m9 l9">
              <div className="row valign-wrapper">
                <div className="col s12 m4 l3">
                  <h3 className="black-text center">{props.userName}</h3>
                </div>

                <div
                  id="profile-edit-wrap"
                  className="col s12 m8 l9 hide-on-small-only right-align"
                  style={{ height: "100%" }}
                >
                  <a
                    id="edit-button"
                    class="waves-effect waves-light btn circle"
                  >
                    Edit Profile
                  </a>
                </div>
              </div>

              <div className="hide-on-med-and-up">
                <div className="row">
                  <div className="col s12 center">
                    <a
                      id="edit-button"
                      class="waves-effect waves-light btn circle"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// window.screen.height;
// window.screen.width;
// element.classList.add("my-class");
