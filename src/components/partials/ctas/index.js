import React from "react";
import PropTypes from "prop-types";
import CTA from "../cta";
import { CTAWrapper, VideoButton, VideoLink } from "./styles";
/** *******************************************************************************
 * CTAs section
 * Renders multiple CTAs and video trigger
 ******************************************************************************** */
const CTAs = ({ ctas, video, modalState, setModalState }) => {
  function showVideo(source, videoID) {
    setModalState({ ...modalState, source, videoID, showModal: true });
  }

  return (
    <CTAWrapper className="ctas-wrapper">
      {ctas.map((cta, i) => {
        // special case: button/link is used to trigger a video
        // if cta triggers a video then either as arrow link or a  button
        // if not render a regular link/button

        /* eslint-disable */
        return cta.isVideoTrigger ? (
          cta.isButton ? (
            <VideoButton key={`${video.id}${i}`} onClick={() => showVideo(video.src, video.id)}>
              {cta.label}
            </VideoButton>
          ) : (
            <VideoLink onClick={() => showVideo(video.src, video.id)} key={`${video.id}${i}`}>
              {cta.label}
            </VideoLink>
          )
        ) : (
          // default button/link cta
          <CTA key={i} cta={cta} />
        );
        /* eslint-enable */
      })}
    </CTAWrapper>
  );
};

CTAs.propTypes = {
  ctas: PropTypes.array.isRequired,
  video: PropTypes.shape(),
  modalState: PropTypes.shape(),
  setModalState: PropTypes.func,
};
CTAs.defaultProps = {
  video: null,
  modalState: null,
  setModalState: null,
};

export default CTAs;
