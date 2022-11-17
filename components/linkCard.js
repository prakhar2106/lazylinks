import React from "react";
function linkCard({ data }) {
  const { name, domain, logo } = data;
  return (
    <div
      onClick={() => {
        window.open(`https://${domain}`, "_blank");
      }}
    >
      <div className="linkCard">
        <img src={logo} alt="logo" />
        <a href={`https://${domain}`} style={{ marginBottom: "1rem" }}>
          {name}
        </a>
      </div>
    </div>
  );
}

export default linkCard;
