import React from "react";

function Heading({ name }) {
  return <div className='headingcomponent'>{name || `Our Partners`}</div>;
}

export default Heading;
