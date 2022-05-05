import Image from "next/image";

import {
  StyledContainer,
  StyledHeading,
  StyledDescription,
  StyledInnerContainer,
  StyledBackgroundContainer,
  StyledImageContainer,
} from "./elements";

export const Main = (props) => {
  return (
    <StyledContainer {...props}>
      <StyledHeading>Managed agency selection</StyledHeading>
      <StyledDescription>Strengthen your onboarding proccess</StyledDescription>

      <StyledInnerContainer>
        <StyledBackgroundContainer>
          <Image
            alt="background"
            src="/img/background.png"
            layout="fill"
            objectFit="cover"
          />
        </StyledBackgroundContainer>
        <StyledImageContainer>
          <Image src="/img/video.png" width="329" height="525" alt="video" layout="" />
        </StyledImageContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
