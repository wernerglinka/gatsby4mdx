import React from "react";
import PropTypes from "prop-types";
import ResponsiveImage from "../responsive-image";
import useSiteMetadata from "../../../hooks/useSiteMetadata";

import { MediaWrapper } from "./styles";

/** *******************************************************************************
 * Media section with audio player
 ******************************************************************************** */
const AudioMedia = ({ audio }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <MediaWrapper className="audio">
      <ResponsiveImage src={audio.bgImage} aspectRatio={audio.aspectRatio} />
      <audio controls>
        <source src={`${siteMetadata.audioPrefix}${audio.ogg}`} type="audio/ogg" />
        <source src={`${siteMetadata.audioPrefix}${audio.mpeg}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </MediaWrapper>
  );
};

AudioMedia.propTypes = {
  audio: PropTypes.shape().isRequired,
};

export default AudioMedia;
