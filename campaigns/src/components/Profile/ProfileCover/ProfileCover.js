import React, { useEffect, useState, useContext } from "react";
import "./profileCover.css";
import useStorage from "../../../hooks/useStorage";
import M from "materialize-css/dist/js/materialize.min.js";
import CoverPhotoModal from "../CoverPhotoModal/CoverPhotoModal";
import { Context } from "../../../context/context";
import ProfilePhotoModal from "../ProfilePhotoModal/ProfilePhotoModal";

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
    var instances = M.Modal.init(elems, { dismissible: false });
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

  const editClickHandler = () => {
    props.setEditing((prevState) => !prevState);
  };

  return (
    <div id="cover-container">
      <CoverPhotoModal />
      <ProfilePhotoModal />
      <div
        id="cover-photo-wrapper"
        style={{
          backgroundImage: `url("${props.coverPhotoURL}")`,
          backgrounRepeat: "no-repeat",
          backgroundSize: "fill",
        }}
      >
        <a
          id="cover-photo-button"
          data-target="edit-cover-photo-modal"
          className="btn-floating btn-medium modal-trigger waves-effect waves-light teal"
        >
          <i className="material-icons">add</i>
        </a>
      </div>

      <div className="row">
        <div className="col s12 m4">
          <div className="center" id="profile-photo-container">
            <img
              id="profile-pic"
              className="circle"
              src={props.profilePhotoURL}
              alt="cover photo"
            />
            <a
              id="profile-photo-button"
              data-target="edit-profile-photo-modal"
              className="btn-floating btn-medium modal-trigger waves-effect waves-light teal"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>

        <div id="username-display" className="col s12 m5">
          <h3 id="username-text" className="black-text left hide-on-small-only">
            {props.userName}
          </h3>
          <h3
            id="username-text"
            className="black-text center show-on-small-only hide-on-med-and-up"
          >
            {props.userName}
          </h3>
        </div>

        <div id="edit-profile-button" className="col s12 m3 center">
          <a
            onClick={editClickHandler}
            className="btn-large waves-effect waves-light teal center"
          >
            {!props.editing ? "edit profile" : "save changes"}
          </a>
        </div>
      </div>
    </div>
  );
}
