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
  align-items: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;
