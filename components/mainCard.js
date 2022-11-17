import React from "react";
import Heading from "./heading";

function mainCard({ postData }) {
  return (
    <div className="mainCard">
      <Heading name={`${postData?.domainName || "Our"} Partners`} />
    </div>
  );
}

export default mainCard;
