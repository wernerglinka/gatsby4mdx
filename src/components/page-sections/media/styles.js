import styled from "@emotion/styled";

export const MediaWrapper = styled.section`
  padding-top: ${props => (props.paddingTop ? "40px" : "0")};
  padding-bottom: ${props => (props.paddingBottom ? "40px" : "0")};

  h2 {
    margin-bottom: 1em;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }

  > div {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .prose {
    padding: ${props => (props.reverse ? "0 0 0 50px" : "0 50px 0 0")};

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 20px 0;
    }

    ul,
    ol {
      margin: 0 0 1em 2em;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }

  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 20px 0;
    }

    img {
      align-self: center;
    }
  }
`;

export const Prove = styled.div`
  * {
    color: #007ca4;
    font-weight: 700;
  }
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .prefix {
    margin-bottom: 0;
  }
  .point {
    white-space: nowrap;
    font-size: 38px;
    margin: 0;

    @media (max-width: 767px) {
      font-size: 22px;
    }
  }
  .postfix {
    padding-left: 20px;
    margin: 0;
  }
`;
