/* global window, document, YT */
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

const ModalVideo = ({ videoID, setModalState, modalState }) => {
  function closeModal() {
    setModalState({
      ...modalState,
      source: null,
      videoID: null,
      showModal: false,
    });
  }

  useEffect(() => {
    document.getElementById("htmlVideo").addEventListener("ended", () => closeModal());
    return () => document.getElementById("htmlVideo").removeEventListener("ended", () => closeModal());
  });

  return (
    <video autoPlay controls id="htmlVideo">
      <source src={`https://assets.perimeterx.com/video/upload${videoID}`} type="video/webm" />
      <source src={`https://assets.perimeterx.com/video/upload${videoID}`} type="video/mp4" />
      <source src={`https://assets.perimeterx.com/video/upload${videoID}`} type="video/ogg" />
    </video>
  );
};

ModalVideo.propTypes = {
  videoID: PropTypes.string.isRequired,
  setModalState: PropTypes.func.isRequired,
  modalState: PropTypes.object.isRequired,
};

export default ModalVideo;
