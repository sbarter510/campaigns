import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";

export default function Search() {
  useEffect(() => {
    M.updateTextFields();
  });
  return (
    <div className="row">
      <form className="col s12">
        <div className="valign-wrapper">
          <div className="row" style={{ width: "100%" }}>
            <div
              className="input-field col s12  left"
              style={{ position: "relative", top: "20px" }}
            >
              <i className="material-icons prefix text-content">search</i>
              <textarea
                id="icon_prefix2"
                className="materialize-textarea text-content"
              ></textarea>
              <label for="icon_prefix2">Search by Topic</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
