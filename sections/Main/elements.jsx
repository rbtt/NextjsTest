import styled from "styled-components";

import { SectionContainer, SectionHeading, SectionSubheading } from "../../components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
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
  text-align: center;
`;
