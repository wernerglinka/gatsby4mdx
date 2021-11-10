import React from "react";
import PropTypes from "prop-types";

import { MediaWrapper } from "./styles";

/** *******************************************************************************
 * Media section with audio player
 ******************************************************************************** */
const AudioMedia = ({ audio }) => {
  return (
    <MediaWrapper className="audio">
      <img src={audio.bgImage} alt="" />
      <audio controls>
        <source src={audio.ogg} type="audio/ogg" />
        <source src={audio.mpeg} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </MediaWrapper>
  );
};

AudioMedia.propTypes = {
  audio: PropTypes.shape().isRequired,
};

export default AudioMedia;
