import React from "react";

export default function Range() {
  return (
    <div className="row">
      <div className="col m12">
        <form action="#" style={{ marginTop: "50px" }}>
          <p className="black-text">Minimum Followers</p>
          <p class="range-field">
            <input type="range" id="test5" min="0" max="100" />
          </p>
        </form>
      </div>
    </div>
  );
}
