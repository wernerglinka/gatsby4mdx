import React from "react";
import PropTypes from "prop-types";
import useSiteMetadata from "../../../hooks/useSiteMetadata";

import { MediaWrapper } from "./styles";

/** *******************************************************************************
 * Media section with image
 ******************************************************************************** */
const ImageMedia = ({ image }) => {
  const siteMetaData = useSiteMetadata();
  const thisImage = `${siteMetaData.imagePrefix}${image.src}`;

  return (
    <MediaWrapper className="image">
      <img src={thisImage} alt={image.alt} />
    </MediaWrapper>
  );
};

ImageMedia.propTypes = {
  image: PropTypes.shape().isRequired,
};

export default ImageMedia;
