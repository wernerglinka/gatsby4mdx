import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import useSiteNavigation from "../../../hooks/useSiteNavigation";

const MenuContent = ({ closeMenu }) => {
  const siteNavigation = useSiteNavigation();

  return (
    <ul>
      {siteNavigation.map(navItem => {
        console.log(navItem);
        return (
          <li key={navItem.label}>
            {navItem.icon && <span>ICON</span>}
            <div>
              {navItem.isExternal ? (
                <a href={navItem.url} target="_blank" rel="noopener noreferrer">
                  {navItem.label}
                </a>
              ) : (
                <Link to={navItem.url} onClick={closeMenu}>
                  {navItem.label}
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuContent;

MenuContent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
