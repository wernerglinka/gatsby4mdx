import React from "react";
import PropTypes from "prop-types";
import Fade from "@stahl.luke/react-reveal/Fade";
import Container from "../../commons/container";
import { BackgroundColorAndContainer, WithContainer, BackgroundColorAndFullWidth, FullWidth } from "./styles";

/** ***************************************************************************
 *  Section Wrapper
 *  Determines the layout properties of a section.
 *  - A section may be full width or inside a container which has a max width.
 *  - A section may have a background color.
 *  - A section may be animated during initial scroll.
 *  - A section may have a top or bottom margin applied (done here for consistency).
 *
 *************************************************************************** */

const SectionWrapper = ({ children }) => {
  const { info } = children.props;
  const { backgroundColor, inContainer, marginTop, marginBottom, animateSection } = info;
  const hasBackground = backgroundColor !== "";

  if (hasBackground && inContainer && animateSection) {
    return (
      <Fade bottom duration={1000} distance="50px">
        <BackgroundColorAndContainer bgColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
          {children}
        </BackgroundColorAndContainer>
      </Fade>
    );
  }

  if (hasBackground && inContainer && !animateSection) {
    return (
      <BackgroundColorAndContainer bgColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
        {children}
      </BackgroundColorAndContainer>
    );
  }

  if (hasBackground && !inContainer && animateSection) {
    return (
      <Fade bottom duration={1000} distance="50px">
        <BackgroundColorAndFullWidth bgColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
          <Container>{children}</Container>
        </BackgroundColorAndFullWidth>
      </Fade>
    );
  }

  if (hasBackground && !inContainer && !animateSection) {
    return (
      <BackgroundColorAndFullWidth bgColor={backgroundColor} marginTop={marginTop} marginBottom={marginBottom}>
        <Container>{children}</Container>
      </BackgroundColorAndFullWidth>
    );
  }

  if (!hasBackground && inContainer && animateSection) {
    return (
      <Fade bottom duration={1000} distance="50px">
        <WithContainer marginTop={marginTop} marginBottom={marginBottom}>
          {children}
        </WithContainer>
      </Fade>
    );
  }
  if (!hasBackground && inContainer && !animateSection) {
    return (
      <WithContainer marginTop={marginTop} marginBottom={marginBottom}>
        {children}
      </WithContainer>
    );
  }

  if (animateSection) {
    return (
      <Fade bottom duration={1000} distance="50px">
        <FullWidth marginTop={marginTop} marginBottom={marginBottom}>
          {children}
        </FullWidth>
      </Fade>
    );
  }

  if (!animateSection) {
    return (
      <FullWidth marginTop={marginTop} marginBottom={marginBottom}>
        {children}
      </FullWidth>
    );
  }
};

export default SectionWrapper;

SectionWrapper.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      info: PropTypes.shape({
        inContainer: PropTypes.bool,
        backgroundColor: PropTypes.string,
        marginTop: PropTypes.bool,
        marginBottom: PropTypes.bool,
        animateSection: PropTypes.bool,
      }),
    }),
  }),
};

SectionWrapper.defaultProps = {
  children: {
    props: {
      info: {
        inContainer: false,
        backgroundColor: "",
        marginTop: false,
        marginBottom: false,
        animateSection: false,
      },
    },
  },
};
