import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import BusinessResult from "./BusinessResult";

export default function BusinessResults() {
  const [state, dispatch] = useContext(Context);
  const [businessResults, setBusinessResults] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

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
        <li
          class="collection-item avatar"
          id={result.id}
          onClick={(e) => businessClickedHandler(e)}
        >
          <img
            src={`http://lorempixel.com/250/250/business/${idx + 1}`}
            alt=""
            class="circle"
          />
          <span class="title black-text">{result.name}</span>
          <p className="black-text">
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

  const businessClickedHandler = (e) => {
    console.log(`id is ${e.target.id}`);
    const currentSelection = businessResults.filter((business) => {
      return business.id === parseInt(e.target.id);
    });
    return setSelectedBusiness(currentSelection);
  };

  const displaySelectedBusiness = () => {
    return (
      <BusinessResult
        img={"http://lorempixel.com/250/250/business/" + selectedBusiness[0].id}
        quote={selectedBusiness[0].company.bs}
      />
    );
  };

  //creates parent ul which holds li's which contain business results
  return (
    <>
      <div className="col s12 m4" style={{ overflowY: "scroll" }}>
        <ul class="collection">{getBusinessResultsHandler()}</ul>
      </div>
      {/* {adding 2nd half panel for displaying more info} */}
      <div className="col m6 hide-on-small-only">
        <div class="card" style={{ height: "97.33%" }}>
          <div class="card-content">
            <span class="card-title">
              {selectedBusiness ? (
                <h4 className="center">{selectedBusiness[0].company.name}</h4>
              ) : (
                <h4 className="center purple-text">Select a profile</h4>
              )}
            </span>
            {selectedBusiness ? displaySelectedBusiness() : null}
          </div>
        </div>
      </div>
    </>
  );
}
