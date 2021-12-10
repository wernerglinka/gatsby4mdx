import styled from "@emotion/styled";

export const IntroWrapper = styled.section`
  padding-top: ${props => (props.paddingTop ? "40px" : "0")};
  padding-bottom: ${props => (props.paddingBottom ? "40px" : "0")};
`;
