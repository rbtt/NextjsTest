import Image from "next/image";

import {
  StyledContainer,
  StyledHeading,
  StyledDescription,
  StyledInnerContainer,
  StyledBackgroundContainer,
  StyledImageContainer,
  StyledContentContainer,
} from "./elements";
import { Card } from "../../collections/Card";

export const Main = ({ cards, ...props }) => {
  console.log(props);
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
        <StyledContentContainer>
          {cards.map((card, i) => (
            <Card {...card} key={i} />
          ))}
        </StyledContentContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
