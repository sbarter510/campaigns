import React, { useState, useEffect, useContext } from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { Context } from "../../../context/context";
import axios from "axios";

export default function CoverPhotoModal(props) {
  const [file, setFile] = useState(null);

  const [state, dispatch] = useContext(Context);

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

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:5000/user/changecoverphoto", {userName: state.userName, coverPhotoURL: url})
  //     .then((res) => {
  //       console.log(res);
  //       dispatch({
  //         type: "CHANGE_COVER_PHOTO",
  //         payload: res.data.coverPhotoURL,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // });

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
        <a
          href="#!"
          className="modal-close waves-effect waves-green btn"
          onClick={props.setEdited(true)}
        >
          Done
        </a>
      </div>
    </div>
  );
}
