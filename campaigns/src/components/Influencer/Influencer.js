import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import Search from "../Business/Search";
import BusinessResults from "./BusinessResults";

export default function Influencer() {
  useEffect(() => {
    M.updateTextFields();
  });

  return (
    <div className="container">
      <Search />
      <BusinessResults />
    </div>
  );
}
