import styled from "@emotion/styled";

export const BannerWrapper = styled.div``;

export const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }

  > div {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      display: block;
      width: 100%;
    }
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
