import styled from "styled-components";

import {
  SectionContainer,
  SectionBigHeading,
  SectionHeading,
  SectionInnerHeading,
  SectionParagraph,
  SectionSubheading,
  SectionTinyHeading,
} from "../../components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
  position: relative;
  z-index: 1;
`;

export const StyledHeading = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  text-align: center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  margin-bottom: 3rem;
`;

export const StyledInnerContainer = styled((props) => <SectionContainer {...props} />)`
  width: 100%;
  height: 100%;
  border: 2px solid green;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)``;

export const StyledBackgroundContainer = styled(({ ...props }) => <div {...props}></div>)`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid lightblue;
`;
