import React from "react";

export default function NetworkRadio() {
  return (
    <form action="#">
      <p>
        <label style={{ display: "inline" }}>
          <input name="youtube" type="radio" checked />
          <span>Youtube</span>
        </label>
      </p>
      <p>
        <label style={{ display: "inline" }}>
          <input name="insta" type="radio" />
          <span>Instagram</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="twitch" type="radio" />
          <span>Twitch</span>
        </label>
      </p>
      <p>
        <label>
          <input name="snapchat" type="radio" disabled="disabled" />
          <span>Snapchat</span>
        </label>
      </p>
    </form>
  );
}
