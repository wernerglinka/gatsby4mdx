import styled from "@emotion/styled";

// a section in container with background color
export const BackgroundColorAndContainer = styled.div`
  max-width: ${props => props.theme.content.maxWidth};
  margin: 0 auto;
  background-color: ${props => (props.hasBackground ? props.bgColor : "transparent")};
  margin-top: ${props => (props.marginTop ? props.theme.section.clearanceTop : props.theme.section.noClearance)};
  margin-bottom: ${props =>
    props.marginBottom ? props.theme.section.clearanceBottom : props.theme.section.noClearance};

  @media (max-width: ${props => props.theme.content.maxWidth}) {
    padding: 0 40px;
  }
`;

// section with full width and background color
export const BackgroundColorAndFullWidth = styled.div`
  background-color: ${props => (props.hasBackground ? props.bgColor : "transparent")};
  margin-top: ${props => (props.marginTop ? props.theme.section.clearanceTop : props.theme.section.noClearance)};
  margin-bottom: ${props =>
    props.marginBottom ? props.theme.section.clearanceBottom : props.theme.section.noClearance};

  @media (max-width: ${props => props.theme.content.maxWidth}) {
    padding: 0 40px;
  }
`;

// sections in container with no background
export const WithContainer = styled.div`
  max-width: ${props => props.theme.content.maxWidth};
  margin: 0 auto;
  margin-top: ${props => (props.marginTop ? props.theme.section.clearanceTop : props.theme.section.noClearance)};
  margin-bottom: ${props =>
    props.marginBottom ? props.theme.section.clearanceBottom : props.theme.section.noClearance};

  @media (max-width: ${props => props.theme.content.maxWidth}) {
    padding: 0 40px;
  }
`;

// section with full width and no background
export const FullWidth = styled.div`
  margin-top: ${props => (props.marginTop ? props.theme.section.clearanceTop : props.theme.section.noClearance)};
  margin-bottom: ${props =>
    props.marginBottom ? props.theme.section.clearanceBottom : props.theme.section.noClearance};

  @media (max-width: ${props => props.theme.content.maxWidth}) {
    padding: 0 40px;
  }
`;
