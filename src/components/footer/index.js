import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Logo from "../../../content/media/icons/logo";
import { ToTop } from "../../../content/media/icons";
import Container from "../commons/container";
import { FooterWrapper } from "./styles";

/** ***************************************************************************
 *  Footer Component
 *************************************************************************** */

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <p>
          Sandbox site by{" "}
          <a href="https://www.glinka.co/" target="_blank" rel="noopener noreferrer">
            <strong>{`{werner glinka}`}</strong>
          </a>
        </p>
        <a className="to-top" href="#at-top">
          <ToTop />
        </a>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

Footer.propTypes = {};

Footer.defaultProps = {};
