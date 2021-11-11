import styled from "@emotion/styled";

export const CTAWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1030px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const VideoButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  font-size: 11px;
  color: #333;
  border-width: 2px;
  border-style: solid;
  transition: background-color 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  border-color: #333;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

export const VideoLink = styled.a`
  display: inline-block;
  padding: 12px 20px 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease-in-out;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: ">>>";
    padding-left: 10px;
    letter-spacing: 0.1em;
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    letter-spacing: 1em;
  }
`;
