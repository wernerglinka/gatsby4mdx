import React from "react";
import PropTypes from "prop-types";
import Icons, { MissingIcon } from "../../../../content/media/icons";
import { MediaWrapper } from "./styles";

/** *******************************************************************************
 * Media section with icon
 ******************************************************************************** */
const IconMedia = ({ icon }) => {
  const MediaIcon = icon ? Icons[icon] : MissingIcon;
  return (
    <MediaWrapper className="icon">
      <MediaIcon />
    </MediaWrapper>
  );
};

IconMedia.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default IconMedia;
