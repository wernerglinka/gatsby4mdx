import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "gatsby";

// styles for external and internal inline links are identials but
// external is applied to <a> and internal to <Link> element
const linkStyles = css`
  display: inline-block;
  padding: 12px 20px 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease-in-out;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: ">>>";
    padding-left: 10px;
    letter-spacing: 0.1em;
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    letter-spacing: 1em;
  }
`;

export const InternalCTALink = styled(Link)`
  ${linkStyles}
`;

export const ExternalCTALink = styled.a`
  ${linkStyles}
`;

// styles for external and internal button links are identials but
// external is applied to <a> and internal to <Link> element
const buttonStyles = css`
  display: inline-block;
  padding: 12px 30px;
  font-size: 11px;
  color: #333;
  border-width: 2px;
  border-style: solid;
  transition: background-color 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
`;

export const InternalCTAButton = styled(Link)`
  ${buttonStyles}
  background-color: ${props => {
    if (props.btnstyle === "primary") {
      return "transparent";
    }
    if (props.btnstyle === "secondary") {
      return "transparent";
    }
    return "transparent";
  }};
  border-color: ${props => {
    if (props.btnstyle === "primary") {
      return "#333";
    }
    if (props.btnstyle === "secondary") {
      return "#999";
    }
    return "transparent";
  }};

  &:hover {
    color: ${props => {
      if (props.btnstyle === "primary") {
        return "#fff";
      }
      if (props.btnstyle === "secondary") {
        return "#fff";
      }
      return "transparent";
    }};
    background-color: ${props => {
      if (props.btnstyle === "primary") {
        return "#333";
      }
      if (props.btnstyle === "secondary") {
        return "#999";
      }
      return "transparent";
    }};
    text-decoration: none;
  }
`;

export const ExternalCTAButton = styled.a`
  ${buttonStyles}
  background-color: ${props => {
    if (props.btnstyle === "primary") {
      return "transparent";
    }
    if (props.btnstyle === "secondary") {
      return "transparent";
    }
    return "transparent";
  }};
  border-color: ${props => {
    if (props.btnstyle === "primary") {
      return "#333";
    }
    if (props.btnstyle === "secondary") {
      return "#999";
    }
    return "transparent";
  }};

  &:hover {
    color: ${props => {
      if (props.btnstyle === "primary") {
        return "#fff";
      }
      if (props.btnstyle === "secondary") {
        return "#fff";
      }
      return "transparent";
    }};
    background-color: ${props => {
      if (props.btnstyle === "primary") {
        return "#333";
      }
      if (props.btnstyle === "secondary") {
        return "#999";
      }
      return "transparent";
    }};
    text-decoration: none;
  }
`;
