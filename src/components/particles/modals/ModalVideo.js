/* global window, document, YT */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FiX } from "react-icons/Fi";

import CloudinaryVideo from "./ModalCloudinaryVideo";
import YouTubeVideo from "./ModalYouTubeVideo";

import { Overlay, ModalContent, VideoWrapper } from "./styles";

/** *******************************************************************************
 * Modal Video section particle
 * Renders a modal box with a video
 ******************************************************************************** */
const ModalVideo = ({ source, videoID, setModalState, modalState }) => {
  function closeModal() {
    setModalState({
      ...modalState,
      source: null,
      videoID: null,
      showModal: false,
    });
  }

  function handleOverlayClicked(e) {
    if (e.target.id === "modalOverlay") {
      closeModal();
    }
  }

  return ReactDOM.createPortal(
    <Overlay id="modalOverlay" onClick={handleOverlayClicked}>
      <ModalContent>
        <VideoWrapper>
          <span role="button" onClick={closeModal}>
            <FiX />
          </span>
          {source === "cloudinary" && (
            <CloudinaryVideo videoID={videoID} setModalState={setModalState} modalState={modalState} />
          )}
          {source === "youtube" && (
            <YouTubeVideo videoID={videoID} setModalState={setModalState} modalState={modalState} />
          )}
        </VideoWrapper>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

ModalVideo.propTypes = {
  videoID: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  setModalState: PropTypes.func.isRequired,
  modalState: PropTypes.object.isRequired,
};

export default ModalVideo;
