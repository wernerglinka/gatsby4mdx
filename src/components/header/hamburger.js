import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const HamburgerButton = styled.button`
  position: relative;
  z-index: 10000;
  width: ${props => props.theme.header.hamburger};
  height: ${props => props.theme.header.hamburger};
  cursor: pointer;
  background: none;
  border: none;
  margin-left: auto;
  margin-top: ${props => props.theme.header.hamburgerMarginTop};

  &:focus {
    outline: 0;
  }

  span,
  span:before,
  span:after {
    cursor: pointer;
    height: 6px;
    width: 40px;
    background-color: #000;
    position: absolute;
    top: 18px;
    left: 0;
    display: block;
    content: "";
    transition: all 0.3s ease-in-out;
  }
  span:before {
    top: -10px;
  }
  span:after {
    top: auto;
    bottom: -10px;
  }
  &:hover {
    span,
    span:before,
    span:after {
      background: blue;
    }
  }

  &.active {
    span {
      background-color: transparent;
    }
    span:before,
    span:after {
      top: 0;
      background-color: red;
    }
    span:before {
      transform: rotate(45deg);
    }
    span:after {
      transform: rotate(-45deg);
    }
    &:hover {
      span:before,
      span:after {
        background-color: red;
      }
    }
  }
`;

/** ***************************************************************************
 *  Hamburger Component
 *************************************************************************** */
const Hamburger = ({ activate, isActive }) => {
  return (
    <HamburgerButton onClick={activate} className={isActive ? "active" : null}>
      <span />
    </HamburgerButton>
  );
};

Hamburger.propTypes = {
  activate: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Hamburger;
