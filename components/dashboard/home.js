import React from "react";
import Analytics from "./analytics";
import Settings from "./settings";

function home() {
  return (
    <>
      <div className="homeDashboard">
        <Settings />
        <Analytics />
      </div>
    </>
  );
}

export default home;
