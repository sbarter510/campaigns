import React, { useEffect } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min";
import Search from "./Search";
import InfluencerResults from "./InfluencerResults";

export default function Business() {
  useEffect(() => {
    M.updateTextFields();
  });
  return (
    <div className="container">
      <Search />
      <InfluencerResults />
    </div>
  );
}
