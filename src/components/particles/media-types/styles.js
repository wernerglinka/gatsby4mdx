import styled from "@emotion/styled";

export const MediaWrapper = styled.div`
  flex: 0 0 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px 0 0;

  button {
    border: none;
    background: none;
    cursor: pointer;
    position: relative;
  }

  img {
    max-width: 800px;
    width: 100%;
  }

  &.audio {
    position: relative;

    audio {
      position: absolute;
      bottom: 100px;
      left: 50%;
      margin-left: -165px;
    }
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -30px 0 0 -30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: ${props => props.theme.defaultBoxShadow};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.PXRed};
  }

  &:after {
    position: absolute;
    top: 12px;
    left: 18px;
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-width: 18px 28px;
    border-style: solid;
    border-color: transparent transparent transparent #000;
    transition: all 0.5s ease-in-out;
  }

  &:hover:after {
    border-color: transparent transparent transparent #666;
  }
`;
