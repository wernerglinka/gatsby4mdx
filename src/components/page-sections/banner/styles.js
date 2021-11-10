import styled from "@emotion/styled";

export const Banner = styled.div``;

export const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: ${props => props.theme.tabletBreakpoint}) {
    flex-direction: column-reverse;
  }

  > div {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    margin-bottom: 30px;
  }
  p {
    margin: 0 0 30px;
  }
  .ctas-wrapper {
    a {
      margin-right: 30px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const TextWrapper = styled.div``;
