import React from "react";
function linkCard({ data }) {
  const { name, domain, logo } = data;
  return (
    <a href={`https://${domain}`} >
      <div className="linkCard">
        <img src={logo} alt="logo" />
        <p>{name}</p>
      </div>
    </a>
  );
}

export default linkCard;
