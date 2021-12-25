import React from "react";
import PropTypes from "prop-types";
import { IntroWrapper } from "./styles";
import Text from "../../partials/text";

/** ***************************************************************************
 *  Section Intro Component
 *  A common set of optional fields for a page section.
 *************************************************************************** */
const Intro = ({ info }) => {
  const { paddingTop, paddingBottom } = info;
  return (
    <IntroWrapper paddingBottom={paddingBottom} paddingTop={paddingTop}>
      <Text info={info} />
    </IntroWrapper>
  );
};

Intro.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    prose: PropTypes.string,
    paddingTop: PropTypes.bool,
    paddingBottom: PropTypes.bool,
  }),
};

Intro.defaultProps = {
  info: {
    subTitle: null,
    prose: null,
    paddingTop: false,
    paddingBottom: false,
  },
};

export default Intro;
