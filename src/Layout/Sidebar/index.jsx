import React, { Fragment } from "react";
import { MENUITEMS } from "./Menu";
import SidebarIcon from "./SidebarIcon";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

const Sidebar = (props) => {

  const activeClass = () => {
    // document.querySelector('.sidebar-link').classList.add('active');
    document.querySelector(".bg-overlay1").classList.add("active");
  };

  const setNavActive = (item) => {
    MENUITEMS.map((menuItems) => {
      menuItems.Items.filter((Items) => {
        if (Items !== item) {
          Items.active = false;
          document.querySelector(".bg-overlay1").classList.remove("active");
        }
        if (Items.children && Items.children.includes(item)) {
          Items.active = true;
          document.querySelector(".sidebar-links").classList.add("active");
        }
        if (Items.children) {
          Items.children.filter((submenuItems) => {
            if (submenuItems.children && submenuItems.children.includes(item)) {
              Items.active = true;
              submenuItems.active = true;
              return true;
            } else {
              return false;
            }
          });
        }
        return Items;
      });
      return menuItems;
    });
    item.active = !item.active;
  };

  const closeOverlay = () => {
    document.querySelector(".bg-overlay1").classList.remove("active");
    document.querySelector(".sidebar-links").classList.remove("active");
  };

  return (
    <Fragment>
      <div
        className="bg-overlay1"
        onClick={() => {
          closeOverlay();
        }}></div>
      <div className={`sidebar-wrapper close_icon}`} sidebar-layout="stroke-svg">
        <SidebarIcon />
        <SidebarLogo />
        {/* sidebartoogle={sidebartoogle} */}
        <SidebarMenu props={props} setNavActive={setNavActive} activeClass={activeClass} />
      </div>
    </Fragment>
  );
};

export default Sidebar;
