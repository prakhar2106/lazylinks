import React, { useEffect, useState } from "react";
function LinkCard({ data, keyword }) {
  const { title, url, logo } = data;
  const [keywordForBackLink, setKeyWordForBackLink] = useState("");

  useEffect(() => {
    if (keyword !== "") {
      setKeyWordForBackLink(keyword);
    } else {
      setKeyWordForBackLink(title);
    }
  }, [keyword]);

  return (
    <div
      style={{ cursor: "pointer",height: "inherit" }}
      onClick={() => {
        window.open(`https://${url}`, "_blank");
      }}
    >
      <div className="linkCard">
        <img src={logo} alt="logo" />
        <a href={`https://${url}`} style={{ marginBottom: "1rem" }}>
          {keywordForBackLink}
        </a>
      </div>
    </div>
  );
}

export default LinkCard;
