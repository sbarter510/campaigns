import React from "react";
import Search from "./Search";
import NetworkRadio from "./NetworkRadio";
import Range from "./Range";

export default function Sidebar() {
  return (
    <div className="col m2 hide-on-small-only">
      <Search />
      <NetworkRadio />
      <Range />
    </div>
  );
}
