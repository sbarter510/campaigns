import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import axios from "axios";

export default function InfluencerResults() {
  const [state, dispatch] = useContext(Context);
  const [influencerResults, setInfluencerResults] = useState([]);

  //api call to mock api to populate business user results. Eventually replace with DB
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
      setInfluencerResults(results.data);
    });
  }, []);

  //extracts business results from state and renders them
  const getInfluencerResultsHandler = () => {
    return influencerResults.map((result, idx) => {
      return (
        <li class="collection-item avatar">
          <img
            src={`http://lorempixel.com/250/250/people/${idx}`}
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

  //creates parent ul which holds li's which contain influencer results
  return (
    <div>
      <ul class="collection">{getInfluencerResultsHandler()}</ul>
    </div>
  );
}
