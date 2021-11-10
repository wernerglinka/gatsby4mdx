import React, { useState } from "react";
import PropTypes from "prop-types";
// component to convert markdown from frontmatter to html
import APStyleTitleCase from "ap-style-title-case";
import MarkdownToHTML from "../../particles/markdown-to-html";
import ImageMedia from "../../particles/media-types/image";
import VideoMedia from "../../particles/media-types/video";
import LottieMedia from "../../particles/media-types/lottie";
import IconMedia from "../../particles/media-types/icon";
import AudioMedia from "../../particles/media-types/audio";
import CTAs from "../../particles/ctas";
import APTitle from "../../particles/ap-style-title";

import { MediaWrapper, ContentWrapper } from "./styles";

/** *******************************************************************************
 * Media Component
 ******************************************************************************** */
const SectionMedia = ({ info }) => {
  const {
    direction,
    title,
    mediaContent,
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
      {title && <APTitle content={title} level="2" />}
      <ContentWrapper reverse={direction === "reverse"}>
        <div className="prose">
          {mediaContent.title && <APTitle content={mediaContent.title} level="3" />}
          {mediaContent.text && <MarkdownToHTML content={mediaContent.text} />}
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

SectionMedia.propTypes = {
  info: PropTypes.shape({
    direction: PropTypes.string,
    paddingTop: PropTypes.bool,
    paddingBottom: PropTypes.bool,
    title: PropTypes.string,
    mediaContent: PropTypes.shape().isRequired,
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

SectionMedia.defaultProps = {
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

export default SectionMedia;
