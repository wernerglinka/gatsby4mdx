import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import useSiteNavigation from "../../../hooks/useSiteNavigation";
import FiIcons from "../../../../content/data/selected-feather-icons";

const MenuContent = ({ closeMenu }) => {
  const siteNavigation = useSiteNavigation();

  return (
    <ul>
      {siteNavigation.map(navItem => {
        const LinkIcon = navItem.icon ? FiIcons[navItem.icon] : null;
        return (
          <li key={navItem.label}>
            <LinkIcon />
            <div>
              {navItem.isExternal ? (
                <a href={navItem.url} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  {navItem.label}
                </a>
              ) : (
                <Link to={navItem.url} activeClassName="active" onClick={closeMenu}>
                  {navItem.label}
                </Link>
              )}
              <p>{navItem.description}</p>
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
