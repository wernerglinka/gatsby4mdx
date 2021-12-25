/* global document */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { AnimatePresence } from "framer-motion";
import Logo from "../../../content/media/icons/logo";
import Hamburger from "./hamburger";
import MenuContent from "../partials/menu-content";
import useInView from "../../hooks/useInView";

import { HeaderWrapper, Brand, Inner, MenuBackground, Menu } from "./styles";

const duration = 0.3;
const exitDuration = 0.3;

const variants = {
  initial: {
    opacity: 0,
    top: -30,
  },
  enter: {
    opacity: 1,
    top: 0,
    transition: {
      duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    top: -30,
    transition: { exitDuration },
  },
};
/** ***************************************************************************
 *  Header Component
 *************************************************************************** */

const Header = ({ location }) => {
  const [menuActive, setMenu] = useState(false);

  const headerRef = useRef();
  // monitor if page is scrolling
  const isScrolling = !useInView(headerRef);

  const isHome = location.pathname === "/";

  const toggleMenu = () => {
    setMenu(!menuActive);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  // change header background color when page scrolls
  useEffect(() => {
    if (isScrolling) {
      document.body.classList.add("is-scrolling");
    } else {
      document.body.classList.remove("is-scrolling");
    }
  }, [isScrolling]);

  return (
    <HeaderWrapper ref={headerRef} isScrolling={isScrolling}>
      <header>
        <Inner>
          <MenuBackground className={menuActive ? "isActive" : null} />

          <Brand>
            {isHome ? (
              <Logo />
            ) : (
              <Link to="/" onClick={closeMenu}>
                <Logo />
              </Link>
            )}
          </Brand>

          <AnimatePresence>
            {menuActive && (
              <Menu variants={variants} initial="initial" animate="enter" exit="exit">
                <MenuContent closeMenu={closeMenu} />
              </Menu>
            )}
          </AnimatePresence>

          <Hamburger activate={toggleMenu} isActive={menuActive} />
        </Inner>
      </header>
    </HeaderWrapper>
  );
};

export default Header;

Header.propTypes = {
  location: PropTypes.shape().isRequired,
};

Header.defaultProps = {};
