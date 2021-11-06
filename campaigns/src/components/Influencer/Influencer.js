import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import Search from "../Business/Search";
import BusinessResults from "./BusinessResults";
import InfluencerSidebar from "./InfluencerSidebar/InfluencerSidebar";

export default function Influencer() {
  useEffect(() => {
    M.updateTextFields();
  });

  return (
    <div class="row flex">
      <InfluencerSidebar />
      <BusinessResults />
    </div>
  );
}
