import React, { useState, useEffect, useContext } from "react";
import ProfilePhotoProgressBar from "./ProfilePhotoProgressBar";
import { Context } from "../../../context/context";

export default function ProfilePhotoModal(props) {
  const [profileFile, setProfileFile] = useState(null);

  const [state, dispatch] = useContext(Context);

  const uploadProfilePhotoHandler = (e) => {
    e.preventDefault();
    const types = ["image/jpeg", "image/png"];
    let img = e.target.files[0];
    if (img && types.includes(img.type)) {
      setProfileFile(img);
    } else {
      console.log("Not a image");
    }
  };

  return (
    <div id="edit-profile-photo-modal" class="modal">
      <div class="modal-content">
        <h4 className="black-text center">Choose your picture</h4>
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input
                type="file"
                onChange={(e) => {
                  uploadProfilePhotoHandler(e);
                }}
              />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
        </form>
      </div>
      {profileFile && <ProfilePhotoProgressBar file={profileFile} />}
      <div class="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn">
          Done
        </a>
      </div>
    </div>
  );
}
