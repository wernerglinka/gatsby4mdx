import React, { useState } from "react";
import PropTypes from "prop-types";
import APTitle from "../../particles/ap-style-title";
import ImageMedia from "../../particles/media-types/image";
import VideoMedia from "../../particles/media-types/video";
import LottieMedia from "../../particles/media-types/lottie";
import IconMedia from "../../particles/media-types/icon";
import AudioMedia from "../../particles/media-types/audio";
import CTAs from "../../particles/ctas";

import { Banner, BannerContent, TextWrapper } from "./styles";

/** ***************************************************************************
 *  Page banner with key points Component
 *************************************************************************** */
const SectionBanner = ({ info }) => {
  const { title, subTitle, hasCtas, ctas, mediaType, image, video, lottieData, icon, audio } = info;

  const [modalState, setModalState] = useState({
    source: null,
    videoID: null,
    showModal: false,
  });

  return (
    <Banner>
      <BannerContent>
        <TextWrapper>
          {title && <APTitle content={title} level="1" />}
          {subTitle && <p>{subTitle}</p>}
          {hasCtas && <CTAs ctas={ctas} video={video} modalState={modalState} setModalState={setModalState} />}
        </TextWrapper>
        {mediaType === "Video" && <VideoMedia video={video} modalState={modalState} setModalState={setModalState} />}
        {mediaType === "Image" && <ImageMedia image={image} />}
        {mediaType === "Lottie" && <LottieMedia lottieData={lottieData} />}
        {mediaType === "Icon" && <IconMedia icon={icon} />}
        {mediaType === "Audio" && <AudioMedia audio={audio} />}
      </BannerContent>
    </Banner>
  );
};

SectionBanner.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
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

SectionBanner.defaultProps = {
  info: {
    subTitle: null,
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

export default SectionBanner;
