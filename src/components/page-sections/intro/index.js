import React from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import { IntroWrapper } from "./styles";
import MarkdownToHTML from "../../particles/markdown-to-html";

/** ***************************************************************************
 *  Section Intro Component
 *  A common set of optional fields for a page section.
 *************************************************************************** */
const SectionIntro = ({ info: { title, subTitle, prose, paddingTop, paddingBottom } }) => (
  <IntroWrapper paddingBottom={paddingBottom} paddingTop={paddingTop}>
    {title && <h2>{titleCase(title)}</h2>}
    {subTitle && <p>{subTitle}</p>}
    {prose && <MarkdownToHTML content={prose} />}
  </IntroWrapper>
);

SectionIntro.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    prose: PropTypes.string,
    paddingTop: PropTypes.bool,
    paddingBottom: PropTypes.bool,
  }),
};

SectionIntro.defaultProps = {
  info: {
    subTitle: null,
    prose: null,
    paddingTop: false,
    paddingBottom: false,
  },
};

export default SectionIntro;
