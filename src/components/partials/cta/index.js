import React from "react";
import PropTypes from "prop-types";
import { InternalCTALink, ExternalCTALink, ExternalCTAButton, InternalCTAButton } from "./styles";

/** ***************************************************************************
 *  Call-to-Action Component
 *  A CTA may be linked to internal or external pages and can be rendered as
 *  an inline link or a button
 *************************************************************************** */
const CTA = ({ cta }) => {
  const { url, label, isExternal, isButton, buttonStyle } = cta;

  let thisCTA;
  /* eslint-disable */
  isButton &&
    (isExternal
      ? (thisCTA =  
          <ExternalCTAButton href={url} target="_blank" rel="noopener noreferrer" btnstyle={buttonStyle}> 
            {label}
          </ExternalCTAButton>
        )
      : (thisCTA = <InternalCTAButton to={url} btnstyle={buttonStyle}>{label}</InternalCTAButton>));

  !isButton &&
    (isExternal
      ? (thisCTA = 
          <ExternalCTALink href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </ExternalCTALink>
        )
      : (thisCTA = <InternalCTALink to={url}>{label}</InternalCTALink>));
  /* eslint-enable */
  return thisCTA;
};

CTA.propTypes = {
  cta: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isExternal: PropTypes.bool.isRequired,
    isButton: PropTypes.bool,
    buttonStyle: PropTypes.string,
  }),
};

CTA.defaultProps = {
  cta: {
    isButton: false,
    buttonStyle: "primary",
  },
};

export default CTA;
