import React, { useState } from "react";
import PropTypes from "prop-types";
import useSiteMetadata from "../../../hooks/useSiteMetadata";
import ResponsiveImage from "../responsive-image";
import VideoModal from "../modals/ModalVideo";
import { MediaWrapper, PlayButton } from "./styles";

/** *******************************************************************************
 * Media section with a video, which will be played in a modal box
 ******************************************************************************** */
const VideoMedia = ({ video, modalState, setModalState }) => {
  function showVideo(source, videoID) {
    setModalState({ ...modalState, source, videoID, showModal: true });
  }

  return (
    <>
      <MediaWrapper className="video">
        <button type="button" onClick={() => showVideo(video.src, video.id)}>
          <PlayButton />
          <ResponsiveImage src={video.tn} aspectRatio={video.aspectRatio} />
        </button>
      </MediaWrapper>
      {modalState.showModal && (
        <VideoModal
          source={modalState.source}
          videoID={modalState.videoID}
          setModalState={setModalState}
          modalState={modalState}
        />
      )}
    </>
  );
};

VideoMedia.propTypes = {
  video: PropTypes.shape().isRequired,
  modalState: PropTypes.shape().isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default VideoMedia;
