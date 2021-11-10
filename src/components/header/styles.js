import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 100001;
  height: ${props => props.theme.header.height};

  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: ${props => props.theme.header.height};
    padding: ${props => props.theme.header.padding};
  }
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.content.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1440px) {
    padding: 0 40px;
  }
`;

export const Brand = styled.div`
  position: relative;
  z-index: 10000;
  width: 50px;
  height: 50px;

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
  transform-origin: top left;
  transition: all 1s ease-in-out;
  width: 200%;
  height: 200%;
  background-color: rgba(100, 100, 100, 0.95);

  &.isActive {
    transform: rotate(0deg);
  }
`;

export const Menu = styled(motion.nav)`
  position: fixed;
  top: ${props => props.theme.header.height};
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20% 10% 10%;

  font-size: 36px;
  color: #ccc;
`;
