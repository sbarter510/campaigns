import React, { useEffect, useState, useContext } from "react";
import "./profileCover.css";
import useStorage from "../../../hooks/useStorage";
import M from "materialize-css/dist/js/materialize.min.js";
import CoverPhotoModal from "../CoverPhotoModal/CoverPhotoModal";
import { Context } from "../../../context/context";

export default function ProfileCover(props) {
  const [state, dispatch] = useContext(Context);
  // const [file, setFile] = useState(null);
  // const [coverPhoto, setCoverPhoto] = useState(null);

  // const { progress, url } = useStorage(file);

  // useEffect(() => {
  //   setCoverPhoto(url);
  // }, [url]);

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  });

  // const uploadCoverPhotoHandler = (e) => {
  //   e.preventDefault();
  //   const types = ["image/jpeg", "image/png"];
  //   let img = e.target.files[0];
  //   if (img && types.includes(img.type)) {
  //     setFile(img);
  //   } else {
  //     console.log("Not a image");
  //   }
  // };

  return (
    <div id="cover-wrapper">
      <div className="container">
        <CoverPhotoModal />
        <div id="cover-container">
          <div
            id="cover-photo-wrapper"
            style={{ backgroundImage: `url("${props.coverPhotoURL}")` }}
          >
            <a
              id="cover-photo-button"
              data-target="edit-cover-photo-modal"
              className="btn-floating btn-medium modal-trigger waves-effect waves-light teal right"
            >
              <i className="material-icons">add</i>
            </a>
          </div>

          <div className="row">
            <div className="col s12 m2">
              <div className="center">
                <img
                  id="profile-pic"
                  className="circle"
                  src="http://lorempixel.com/200/200/people/1"
                  alt="cover photo"
                />
              </div>
            </div>

            <div id="username-display" className="col s12 m7">
              <h3 id="username-text" className="black-text center">
                {props.userName}
              </h3>
            </div>

            <div id="edit-profile-button" className="col s12 m3 center">
              <a className="btn-large waves-effect waves-light teal center">
                edit profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
