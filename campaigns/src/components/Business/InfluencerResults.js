import React, { useContext, useEffect, useState, useCallback } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import InfluencerResult from "./InfluencerResult";

export default function InfluencerResults() {
  const [state, dispatch] = useContext(Context);

  const [influencerResults, setInfluencerResults] = useState([]);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  //api call to mock api and store in state. Eventually replace with DB
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((results) => {
      setInfluencerResults(results.data);
    });
  }, []);

  //extracts business results from state and renders them in collection
  const getInfluencerResultsHandler = () => {
    return influencerResults.map((result, idx) => {
      return (
        // li needs colors for darkmode
        <li
          class="collection-item avatar"
          id={result.id}
          onClick={(e) => influencerClickedHandler(e)}
        >
          <img
            src={`http://lorempixel.com/250/250/people/${idx + 1}`}
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

  //selects influencer and displays on 2nd panel

  const influencerClickedHandler = (e) => {
    console.log(`id is ${e.target.id}`);
    const currentSelection = influencerResults.filter((influencer) => {
      return influencer.id === parseInt(e.target.id);
    });
    return setSelectedInfluencer(currentSelection);
  };

  const displaySelectedInfluencer = () => {
    return (
      <InfluencerResult
        img={"http://lorempixel.com/250/250/people/" + selectedInfluencer[0].id}
        quote={selectedInfluencer[0].company.bs}
      />
      // <div className="row">
      //   <div className="col m4 offset-m4">
      //     <img
      //       src={`http://lorempixel.com/250/250/people/${selectedInfluencer[0].id}`}
      //       alt=""
      //       style={{ height: "250px", borderRadius: "25px" }}
      //       className="center"
      //     />
      //     <p className="flow-text center">
      //       "{selectedInfluencer[0].company.bs}"
      //     </p>
      //   </div>
      // </div>
    );
  };

  //populates parent ul to hold li's which contain influencer results
  return (
    <div class="row flex">
      {/* div below needs color schema for darkmode */}
      <div className="col s12 m4" style={{ overflowY: "scroll" }}>
        <ul class="collection">{getInfluencerResultsHandler()}</ul>
      </div>

      <div className="col m8 hide-on-small-only">
        {/* div needs color schema for darkmode */}
        <div class="card" style={{ height: "97.33%" }}>
          <div class="card-content">
            <span class="card-title">
              {selectedInfluencer ? (
                <h4 className="center">{selectedInfluencer[0].name}</h4>
              ) : (
                <h4 className="center">Select a profile</h4>
              )}
            </span>
            {selectedInfluencer ? displaySelectedInfluencer() : null}
          </div>
        </div>
      </div>
    </div>
  );
}
