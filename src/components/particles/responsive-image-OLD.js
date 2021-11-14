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
`;

/** *******************************************************************************
 * Responsiv image particle
 * Based on Glen Maddern's screencast: https://www.youtube.com/watch?v=_lQvw2vSDbs
 *
 * This component particle will wrap every image in a div that has the same aspect
 * ratio of the image that will be place in it on render, thus preventing content
 * realignment when the correctly sized image is inserted into the DOM.
 *
 * The image is requested from Clouydinary, with url parameters specifying the exact
 * image size and pixel density.
 *
 * TODO: Add progressive image loaded and
 * sources:
 * - https://www.sitepoint.com/how-to-build-your-own-progressive-image-loader/
 * - https://codeburst.io/how-to-do-simple-progressive-image-loading-in-react-like-medium-dfad4c181b53
 * - https://medium.com/@perjansson/a-progressive-image-loader-in-react-f14ae652619d
 *
 * Approach:
 * - load a very low resolution instance of the image into the container and apply width 100%
 * - now measure clientWidth and Height of the container and prepare the image url parameters
 * - when the image is in viewport, load the exact sized image
 ******************************************************************************** */
const ResponsiveImage = ({ src, alt, aspectRatio }) => {
  const siteMetaData = useSiteMetadata();
  const wrapperRef = useRef();
  const imgRef = useRef();

  // monitor window size
  const size = useWindowResize();
  // monitor if component is in viewport
  const isVisible = useInView(wrapperRef);

  const wrapperStyles = {
    paddingBottom: `${aspectRatio}%`,
  };

  const getImageSrc = () => {
    const { clientWidth, clientHeight } = wrapperRef.current;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageParams = `w_${100 * Math.round((clientWidth * pixelRatio) / 100)},h_${100 *
      Math.round((clientHeight * pixelRatio) / 100)},c_fill,g_auto,f_auto`;
    imgRef.current.src = `${siteMetaData.imagePrefix}${imageParams}/${src}`;
  };

  useEffect(() => {
    getImageSrc();
  }, []);

  useEffect(() => {
    getImageSrc();
  }, [size]);

  useEffect(() => {
    if (isVisible) {
      console.log(src);
    }
  }, [isVisible]);

  return (
    <ResponsiveWrapper ref={wrapperRef} style={wrapperStyles}>
      <img src="" alt={alt} ref={imgRef} />
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
