import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const Sidebar = () => {
  return (
    <>
      <div className="nk-sidebar" data-content="sidebarMenu">
        <SidebarLeft />
        <SidebarRight />
      </div>
    </>
  );
};

export default Sidebar;
