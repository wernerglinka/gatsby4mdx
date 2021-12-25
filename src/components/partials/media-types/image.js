/* global window */
import React from "react";
import PropTypes from "prop-types";
import ResponsiveImage from "../responsive-image";
import { MediaWrapper } from "./styles";

/** *******************************************************************************
 * Media section with image
 ******************************************************************************** */
const ImageMedia = ({ image }) => {
  return (
    <MediaWrapper className="image">
      <ResponsiveImage {...image} />
    </MediaWrapper>
  );
};

ImageMedia.propTypes = {
  image: PropTypes.shape().isRequired,
};

export default ImageMedia;
