import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 100001;
  height: ${props => props.theme.header.height};

  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: ${props => props.theme.header.height};
    padding: ${props => props.theme.header.padding};
    background-color: ${props => (props.isScrolling ? "rgba(255, 255, 255, 0.9)" : "transparent")};
    box-shadow: ${props => (props.isScrolling ? "0px 4px 10px 0px rgba(51,51,51,0.2)" : "none")};
    transition: background-color 0.5s ease-in-out;
  }
`;

export const Inner = styled.div`
  position: relative;
  max-width: ${props => props.theme.content.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1440px) {
    padding: 0 40px;
  }
`;

export const Brand = styled.div`
  position: relative;
  z-index: 3000;
  width: 50px;
  height: 50px;

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const Menu = styled.nav`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => (props.menuActive ? "1" : "0")};
  pointer-events: ${props => (props.menuActive ? "auto" : "none")};
  transition: opacity 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    max-width: 500px;
    list-style: none;

    li {
      display: flex;
      justify-content: flex-start;
      padding-bottom: 0.5em;

      svg {
        margin: 13px 15px 0 0;
        stroke: #ccc;
        width: 24px;
        height: 24px;
      }
    }

    a {
      text-decoration: none;
      display: block;
      font-size: 28px;
      color: #ccc;
      font-weight: 500;

      &:hover {
        color: #fff;
      }

      &.active {
        color: #666;
        pointer-events: none;
        cursor: default;
      }
    }

    p {
      color: #ddd;
      margin-top: 0;
    }
  }
`;
