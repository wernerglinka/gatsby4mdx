import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: ${props => props.theme.content.maxWidth};
  width: 100%;
  margin: 0 auto;
`;

const Container = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.shape().isRequired,
};
