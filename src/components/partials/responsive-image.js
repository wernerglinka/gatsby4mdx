/* global window */
import React, { useEffect, useState, useRef } from "react";
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
    display: block;
  }

  .low-res {
    filter: blur(10px);
    transition: opacity 0.4s ease-in-out;
  }

  .high-res {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  // the hi-res image may have a sligly different height. That may be due to the low-res
  // image size being restricked to fewer steps when generating the image. To avoid the
  // low-res showing under the high-res image, the low-res will be faded out as the high
  // res is faded in
  &.done {
    .high-res {
      opacity: 1;
    }
    .low-res {
      opacity: 0;
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
  const [dim, setDim] = useState({ x: 0, y: 0 });
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

  /**
   * get exact image size
   * Note imageParams include "c_fill,g_auto". This is appropriate for pictures only. Whe showing
   * images of graphs, they may need to be removed
   *
   * c_fill
   * Creates an asset with the exact specified width and height without distorting the asset. This
   * option first scales as much as needed to at least fill both of the specified dimensions. If the
   * requested aspect ratio is different than the original, cropping will occur on the dimension
   * that exceeds the requested size after scaling.
   *
   * g_auto
   * Automatically identifies the most interesting regions in the asset to be included in the crop.
   */

  const getImageSrc = () => {
    const { clientWidth, clientHeight } = wrapperRef.current;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageParams = `w_${100 * Math.round((clientWidth * pixelRatio) / 100)},h_${100 *
      Math.round((clientHeight * pixelRatio) / 100)},c_fill,g_auto,f_auto`;
    imgRef.current.src = `${siteMetaData.imagePrefix}${imageParams}/${src}`;
  };

  // get image source for LRIP
  const lowResIMagesrc = `${siteMetaData.imagePrefix}w_100,c_fill,g_auto,f_auto/${src}`;

  // add class to high res image when image has been loaded
  const imgFadeIn = () => {
    wrapperRef.current.classList.add("done");
  };

  // update image after resize
  useEffect(() => {
    // set explicit width and height of image
    const { clientWidth, clientHeight } = wrapperRef.current;
    setDim({ x: clientWidth, y: clientHeight });
    // and get img source if image is in viewport
    isVisible && getImageSrc();
  }, [size]);

  // load high res image when in viewport
  useEffect(() => {
    isVisible && getImageSrc();
  }, [isVisible]);

  return (
    <ResponsiveWrapper ref={wrapperRef} style={wrapperStyles}>
      <img src={lowResIMagesrc} alt={alt} className="low-res" width={dim.x} height={dim.y} />
      <img src="" alt={alt} ref={imgRef} className="high-res" onLoad={imgFadeIn} width={dim.x} height={dim.y} />
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
