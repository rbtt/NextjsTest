import styled from "styled-components";

import { SectionContainer, SectionHeading, SectionSubheading } from "../../components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
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
