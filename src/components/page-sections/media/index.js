import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageMedia from "../../partials/media-types/image";
import VideoMedia from "../../partials/media-types/video";
import LottieMedia from "../../partials/media-types/lottie";
import IconMedia from "../../partials/media-types/icon";
import AudioMedia from "../../partials/media-types/audio";
import CTAs from "../../partials/ctas";
import Text from "../../partials/text";

import { MediaWrapper, ContentWrapper } from "./styles";

/** *******************************************************************************
 * Media Component
 ******************************************************************************** */
const Media = ({ info }) => {
  const {
    direction,
    hasCtas,
    ctas,
    mediaType,
    image,
    video,
    lottieData,
    icon,
    audio,
    paddingTop,
    paddingBottom,
  } = info;

  const [modalState, setModalState] = useState({
    source: null,
    videoID: null,
    showModal: false,
  });

  return (
    <MediaWrapper paddingBottom={paddingBottom} paddingTop={paddingTop}>
      <ContentWrapper reverse={direction === "reverse"}>
        <div className="prose">
          <Text info={info} />
          {hasCtas && <CTAs ctas={ctas} video={video} modalState={modalState} setModalState={setModalState} />}
        </div>
        {mediaType === "Video" && <VideoMedia video={video} modalState={modalState} setModalState={setModalState} />}
        {mediaType === "Image" && <ImageMedia image={image} />}
        {mediaType === "Lottie" && <LottieMedia lottieData={lottieData} />}
        {mediaType === "Icon" && <IconMedia icon={icon} />}
        {mediaType === "Audio" && <AudioMedia audio={audio} />}
      </ContentWrapper>
    </MediaWrapper>
  );
};

Media.propTypes = {
  info: PropTypes.shape({
    direction: PropTypes.string,
    paddingTop: PropTypes.bool,
    paddingBottom: PropTypes.bool,
    title: PropTypes.string,
    hasCtas: PropTypes.bool,
    ctas: PropTypes.array,
    mediaType: PropTypes.string.isRequired,
    video: PropTypes.shape(),
    image: PropTypes.shape(),
    lottieData: PropTypes.shape(),
    icon: PropTypes.string,
    audio: PropTypes.shape(),
  }),
};

Media.defaultProps = {
  info: {
    direction: "normal",
    title: null,
    paddingTop: false,
    paddingBottom: false,
    hasCtas: false,
    ctas: null,
    video: null,
    image: null,
    lottie: null,
    icon: null,
    audio: null,
  },
};

export default Media;
