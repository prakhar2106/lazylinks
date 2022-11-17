import React from "react";

function BoxLayout({ children, title }) {
  return (
    <div className="boxLayout">
      <div className="boxLayoutHeader">{title}</div>
      <div className="boxLayoutContent">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default BoxLayout;
