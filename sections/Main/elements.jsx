import styled from "styled-components";

import { SectionContainer, SectionHeading, SectionSubheading } from "../../components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  z-index: 1;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const StyledHeading = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  text-align: center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: -0.5rem 0 2rem 0;
  text-align: center;
  font-weight: 400;
`;

export const StyledInnerContainer = styled((props) => <SectionContainer {...props} />)`
  justify-content: center;
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledBackgroundContainer = styled(({ ...props }) => <div {...props} />)`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  @media (max-width: 1024px) {
    margin-top: 15rem;
    margin-left: -10rem;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  margin: 2rem 2rem 0 0;
`;

export const StyledSmallContainer = styled(({ ...props }) => <div {...props}></div>)`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 30rem;
`;
