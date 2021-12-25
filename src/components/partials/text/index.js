import React, { useState } from "react";
import PropTypes from "prop-types";
import APTitle from "../ap-style-title";
import MarkdownToHTML from "../markdown-to-html";

/** ***************************************************************************
 *  Text particle
 *************************************************************************** */
const Text = ({ info }) => {
  const { title, subTitle, prose, header } = info;

  return (
    <>
      {title && <APTitle content={title} level={header} />}
      {subTitle && <p>{subTitle}</p>}
      {prose && <MarkdownToHTML content={prose} />}
    </>
  );
};

Text.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    prose: PropTypes.string,
  }),
};

Text.defaultProps = {
  info: {
    subTitle: null,
    prose: null,
  },
};

export default Text;
