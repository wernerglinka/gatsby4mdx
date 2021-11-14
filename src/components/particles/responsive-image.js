/* global window */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import useWindowResize from "../../hooks/useWindowResize";
import useInView from "../../hooks/useInView";

const ResponsiveWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  // padding-bottom will be set during render based on image
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  .low-res {
    filter: blur(10px);
  }

  .high-res {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    &.done {
      opacity: 1;
    }
  }
`;

/** *******************************************************************************
 * Progressive/responsive image particle with lazy load
 * Implements a Low Res Image Placeholder (LRIP)
 *
 * With inspiration from Glen Maddern's screencast: https://www.youtube.com/watch?v=_lQvw2vSDbs
 * and Medium
 *
 * This component particle will wrap the image in a div that has the same aspect
 * ratio as the image. This prevents content realignment on slow connections.
 *
 * The images are loaded from Clouydinary, the placeholder with a very low resolution and the
 * final image with url parameters specifying the exact image size and pixel density.
 *
 * Approach:
 * - load very low resolution image into container with width 100%.
 * - measure container clientWidth and Height for image url parameters.
 * - when the image is in viewport, load the exactly sized final image
 * - on resize just replace the final image. Do this to prevent image artifacts when
 *   resizing from narrow to wider screen.
 ******************************************************************************** */
const ResponsiveImage = ({ src, alt, aspectRatio }) => {
  const siteMetaData = useSiteMetadata();
  const wrapperRef = useRef();
  const imgRef = useRef();

  // monitor window size
  const size = useWindowResize();
  // monitor if component is in viewport
  const isVisible = useInView(wrapperRef);

  // prevent content reflow when images is loaded
  const wrapperStyles = {
    paddingBottom: `${aspectRatio}%`,
  };

  // get exact image size
  const getImageSrc = () => {
    const { clientWidth, clientHeight } = wrapperRef.current;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageParams = `w_${100 * Math.round((clientWidth * pixelRatio) / 100)},h_${100 *
      Math.round((clientHeight * pixelRatio) / 100)},c_fill,g_auto,f_auto`;
    imgRef.current.src = `${siteMetaData.imagePrefix}${imageParams}/${src}`;
  };

  // get image source for LRIP
  const lowResIMagesrc = `${siteMetaData.imagePrefix}w_40,c_fill,g_auto,f_auto/${src}`;

  // add class to high res image when image has been loaded
  const imgFadeIn = () => {
    imgRef.current.classList.add("done");
  };

  // update image after resize
  useEffect(() => {
    getImageSrc();
  }, [size]);

  // load high res image when in viewport
  useEffect(() => {
    if (isVisible) {
      getImageSrc();
    }
  }, [isVisible]);

  return (
    <ResponsiveWrapper ref={wrapperRef} style={wrapperStyles}>
      <img src={lowResIMagesrc} alt={alt} className="low-res" />
      <img src="" alt={alt} ref={imgRef} className="high-res" onLoad={imgFadeIn} />
    </ResponsiveWrapper>
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  aspectRatio: PropTypes.string.isRequired,
};

ResponsiveImage.defaultProps = {
  alt: null,
};

export default ResponsiveImage;
