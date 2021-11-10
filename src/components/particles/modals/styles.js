import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fade-in 0.5s ease-in-out;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  width: 70%;
  margin-left: -35%;
  padding: 40px;
  background-color: #fff;
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  svg {
    position: absolute;
    top: -35px;
    right: -35px;
    z-index: 1;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.red1Color};
    }
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
