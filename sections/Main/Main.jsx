import Image from "next/image";

import { StyledContainer, StyledTitle } from "./elements";

export const Main = (props) => {
  return (
    <StyledContainer {...props}>
      <StyledTitle>This is the Main Section</StyledTitle>
    </StyledContainer>
  );
};
