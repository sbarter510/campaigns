import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import axios from "axios";

export default function BusinessResults() {
  const [state, dispatch] = useContext(Context);
  const [businessResults, setBusinessResults] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
      setBusinessResults(results.data);
    });
  }, []);

  const getBusinessResultsHandler = () => {
    return businessResults.map((result) => {
      return (
        <li class="collection-item avatar">
          <img
            src="http://lorempixel.com/250/250/business/1"
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

  return (
    <div>
      <ul class="collection">{getBusinessResultsHandler()}</ul>
    </div>
  );
}
