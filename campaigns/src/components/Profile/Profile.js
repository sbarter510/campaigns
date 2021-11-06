import React, { useContext } from "react";
import { Context } from "../../context/context";

export default function Profile() {
  const [state, dispatch] = useContext(Context);

  //need to verify token and only display if valid
  return (
    <div>
      {localStorage.getItem("token") ? (
        <h1 className="black-text">Hello {state.userName} </h1>
      ) : (
        "no token"
      )}
    </div>
  );
}
