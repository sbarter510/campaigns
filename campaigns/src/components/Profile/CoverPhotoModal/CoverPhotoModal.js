import React, { useState } from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";

export default function CoverPhotoModal() {
  const [file, setFile] = useState(null);

  const uploadCoverPhotoHandler = (e) => {
    e.preventDefault();
    const types = ["image/jpeg", "image/png"];
    let img = e.target.files[0];
    if (img && types.includes(img.type)) {
      setFile(img);
    } else {
      console.log("Not a image");
    }
  };

  return (
    <div id="edit-cover-photo-modal" class="modal">
      <div class="modal-content">
        <h4 className="black-text center">Choose your picture</h4>
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input
                type="file"
                onChange={(e) => {
                  uploadCoverPhotoHandler(e);
                }}
              />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
        </form>
      </div>
      {file && <ProgressBar file={file} />}
      <div class="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn">
          Done
        </a>
      </div>
    </div>
  );
}
