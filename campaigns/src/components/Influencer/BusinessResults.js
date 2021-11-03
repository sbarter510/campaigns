import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import axios from "axios";

export default function BusinessResults() {
  const [state, dispatch] = useContext(Context);
  const [businessResults, setBusinessResults] = useState([]);

  //api call to mock api to populate business user results. Eventually replace with DB
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
      setBusinessResults(results.data);
    });
  }, []);

  //extracts business results from state and renders them
  const getBusinessResultsHandler = () => {
    return businessResults.map((result, idx) => {
      return (
        <li class="collection-item avatar">
          <img
            src={`http://lorempixel.com/250/250/business/${idx}`}
            alt=""
            class="circle"
          />
          <span class="title">{result.name}</span>
          <p>
            {result.company.name} <br />
            {result.company.bs}
          </p>
          <a href="#!" class="secondary-content">
            <i class="material-icons">grade</i>
          </a>
        </li>
      );
    });
  };

  //creates parent ul which holds li's which contain business results
  return (
    <div class="row flex">
      <div className="col s12 m6" style={{ overflowY: "scroll" }}>
        <ul class="collection">{getBusinessResultsHandler()}</ul>
      </div>
      {/* {adding 2nd half panel for displaying more info} */}
      <div className="col m6 hide-on-small-only">
        <div class="card" style={{ height: "97.33%" }}>
          <div class="card-content">
            <span class="card-title">Business Results</span>
            <p>Tets</p>
          </div>
        </div>
      </div>
    </div>
  );
}
