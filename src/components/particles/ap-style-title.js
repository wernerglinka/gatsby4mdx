import React, { useState } from "react";
import PropTypes from "prop-types";
import APStyleTitleCase from "ap-style-title-case";

const APTitle = ({ content, level, headerClass }) => {
  const HeaderTag = `h${level}`;

  return <HeaderTag className={headerClass}>{APStyleTitleCase(content)}</HeaderTag>;
};

export default APTitle;

APTitle.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  headerClass: PropTypes.string,
};

APTitle.defaultProps = {
  headerClass: null,
};
