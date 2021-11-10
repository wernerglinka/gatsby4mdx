import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import lottie from "lottie-web";

import { MediaWrapper } from "./styles";

import animationSource from "../../../../content/media/animations";

/** *******************************************************************************
 * Media section with lottie animation
 ******************************************************************************** */
const LottieMedia = ({ lottieData }) => {
  const AnimationRef = useRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: AnimationRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationSource[lottieData.src],
    });
    anim.addEventListener("DOMLoaded", function(e) {
      console.log("element loaded");
    });
    return () => {
      anim.removeEventListener("DOMLoaded");
      anim.destroy();
    };
  }, []);

  return <MediaWrapper className="image" ref={AnimationRef} />;
};

LottieMedia.propTypes = {
  lottieData: PropTypes.shape().isRequired,
};

export default LottieMedia;
