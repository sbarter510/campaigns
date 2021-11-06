import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import InfluencerResults from "./InfluencerResults";
import BusinessSidebar from "./BusinessSideBar/BusinessSidebar";

export default function Business() {
  useEffect(() => {
    M.updateTextFields();
  });
  return (
    <div class="row flex">
      <BusinessSidebar />
      <InfluencerResults />
    </div>
  );
}
