import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

export default function Profile() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/auth")
      .then((res) => {
        console.log(res);
        return dispatch({
          type: "LOG_IN",
          payload: res.data.userName,
        });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

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
