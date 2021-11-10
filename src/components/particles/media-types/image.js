import React from "react";
import PropTypes from "prop-types";

import { MediaWrapper } from "./styles";

/** *******************************************************************************
 * Media section with image
 ******************************************************************************** */
const ImageMedia = ({ image }) => {
  return (
    <MediaWrapper className="image">
      <img src={image.src} alt={image.alt} />
    </MediaWrapper>
  );
};

ImageMedia.propTypes = {
  image: PropTypes.shape().isRequired,
};

export default ImageMedia;
