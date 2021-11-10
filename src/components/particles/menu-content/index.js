import React from "react";
import useSiteNavigation from "../../../hooks/useSiteNavigation";

const MenuContent = () => {
  const siteNavigation = useSiteNavigation();

  return (
    <ul>
      {siteNavigation.map(navItem => {
        console.log(navItem);
        return <li key={navItem.label}>{navItem.label}</li>;
      })}
    </ul>
  );
};

export default MenuContent;
