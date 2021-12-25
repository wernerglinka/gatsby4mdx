import React, { useState } from "react";
import PropTypes from "prop-types";
import APTitle from "../../partials/ap-style-title";
import MarkdownToHTML from "../../partials/markdown-to-html";
import ImageMedia from "../../partials/media-types/image";
import VideoMedia from "../../partials/media-types/video";
import LottieMedia from "../../partials/media-types/lottie";
import IconMedia from "../../partials/media-types/icon";
import AudioMedia from "../../partials/media-types/audio";
import Text from "../../partials/text";
import CTAs from "../../partials/ctas";

import { BannerWrapper, BannerContent, TextWrapper } from "./styles";

/** ***************************************************************************
 *  Page banner with key points Component
 *************************************************************************** */
const Banner = ({ info }) => {
  const { title, subTitle, prose, hasCtas, ctas, mediaType, image, video, lottieData, icon, audio } = info;

  const [modalState, setModalState] = useState({
    source: null,
    videoID: null,
    showModal: false,
  });

  return (
    <BannerWrapper>
      <BannerContent>
        <TextWrapper>
          <Text info={info} />
          {hasCtas && <CTAs ctas={ctas} video={video} modalState={modalState} setModalState={setModalState} />}
        </TextWrapper>
        {mediaType === "Video" && <VideoMedia video={video} modalState={modalState} setModalState={setModalState} />}
        {mediaType === "Image" && <ImageMedia image={image} />}
        {mediaType === "Lottie" && <LottieMedia lottieData={lottieData} />}
        {mediaType === "Icon" && <IconMedia icon={icon} />}
        {mediaType === "Audio" && <AudioMedia audio={audio} />}
      </BannerContent>
    </BannerWrapper>
  );
};

Banner.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    prose: PropTypes.string,
    hasCtas: PropTypes.bool,
    ctas: PropTypes.array,
    mediaType: PropTypes.string,
    image: PropTypes.shape(),
    video: PropTypes.shape(),
    lottieData: PropTypes.shape(),
    icon: PropTypes.string,
    audio: PropTypes.shape(),
  }),
};

Banner.defaultProps = {
  info: {
    subTitle: null,
    prose: null,
    hasCtas: false,
    ctas: null,
    mediaType: null,
    image: null,
    video: null,
    lottieData: null,
    icon: "",
    audio: null,
  },
};

export default Banner;
