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

export const Main = ({ cards, image, title, description, background }) => {
  return (
    <StyledContainer>
      <StyledHeading>{title}</StyledHeading>
      <StyledDescription>{description}</StyledDescription>

      <StyledInnerContainer>
        <StyledBackgroundContainer>
          <Image {...background} layout="fill" objectFit="cover" />
        </StyledBackgroundContainer>
        <StyledImageContainer>
          <Image {...image} />
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
