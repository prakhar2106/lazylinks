import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="headername">Welcome To LazyLink</div>
      <div className="headerDetails">
        <div className="headerbutton">
          <button>Upgrade Plan</button>
        </div>
        <div className="headerprofile">
          <div className="headerprofileavataar">
              <i className="fas fa-user"></i>
          </div>
          {/* <div className="headerprofileopener">ok</div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
