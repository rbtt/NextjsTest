import styled from "styled-components";
import { SectionContainer } from "../SectionContainer";

export const StyledInnerContainer = styled((props) => <SectionContainer {...props} />)`
  width: 100%;
  height: 100%;
  justify-content: center;
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`;
