import Image from "next/image";

import {
  StyledContainer,
  StyledHeading,
  StyledDescription,
  StyledInnerContainer,
  StyledSmallContainer,
  StyledImageContainer,
  StyledBackgroundContainer,
} from "./elements";

import { Card } from "../../collections/Card";

export const Main = ({ cards, image, title, description, background }) => {
  return (
    <StyledContainer>
      <StyledHeading>{title}</StyledHeading>
      <StyledDescription>{description}</StyledDescription>

      <StyledInnerContainer>
        <StyledBackgroundContainer>
          <Image {...background} layout="fixed" />
        </StyledBackgroundContainer>

        <StyledImageContainer>
          <Image {...image} />
        </StyledImageContainer>

        <StyledSmallContainer>
          {cards.map((card, i) => (
            <Card {...card} key={i} />
          ))}
        </StyledSmallContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
