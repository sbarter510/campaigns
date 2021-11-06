import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import Search from "./Search";
import InfluencerResults from "./InfluencerResults";
import Sidebar from "./Sidebar";

export default function Business() {
  useEffect(() => {
    M.updateTextFields();
  });
  return (
    <div class="row flex">
      <Sidebar />
      <InfluencerResults />
    </div>
  );
}
