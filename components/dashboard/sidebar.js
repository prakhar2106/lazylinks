import { useRouter } from "next/router";
import React, { useState } from "react";
function Sidebar() {
  const router = useRouter();
  const [crossClicked, setCrossClicked] = useState(false);
  return (
    <div
      className={
        "sidebar" +
        (crossClicked ? " sidebartoggleclosed" : " sidebartoggleopen")
      }
    >
      {/* <button
        className="sidebartogglebutton"
        onClick={() => setCrossClicked(!crossClicked)}
      >
        cross
      </button> */}
      <div className="sidebarTopChild">
        <div className="sidebarTop">
          <div className="sidebarTopChild0">
            <img src={"/profile.png"} />
          </div>
          <div className="sidebarTopChild1">
            <div className="sidebarTopInnerChild sidebarTopTitle">
              LazyLinks
            </div>
            <div className="sidebarTopInnerChild sidebarTopDesc">
              Welcome Prakhar
            </div>
          </div>
        </div>
        <div className="sidebarMiddle">
          <div className="sidebarMiddleLinks sidebarMiddleLinksActive">
            <div className="sidebarMiddleIcon">
              <i className="fas fa-home"></i>
            </div>
            <div className="sidebarMiddleText">Dashboard</div>
          </div>
          <div className="sidebarMiddleLinks">
            <div className="sidebarMiddleIcon">
              <i class="fas fa-cogs"></i>
            </div>
            <div className="sidebarMiddleText">Settings</div>
          </div>
          <div className="sidebarMiddleLinks">
            <div className="sidebarMiddleIcon">
              <i class="fas fa-user-friends"></i>
            </div>
            <div className="sidebarMiddleText">Team members</div>
          </div>
        </div>
      </div>
      <div className="sidebarBottom">
        <div className="sidebarBottomImage">
          <img src={"/support.png"}></img>
        </div>
        <div className="sidebarBottomImage">
          <div className="sidebarBottomContactTitle">Contact US</div>
          <div className="sidebarBottomContactDesc">info@lazylinks.com</div>
          <div className="sidebarBottomContactDesc">+7949559955</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
