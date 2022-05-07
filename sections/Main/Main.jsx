import Image from "next/image";

import { StyledContainer, StyledHeading, StyledDescription } from "./elements";
import { Card } from "../../collections/Card";
import {
  InnerContainer,
  BackgroundContainer,
  SectionImageContainer,
  SectionSmallContainer,
} from "../../components/Containers";

export const Main = ({ cards, image, title, description, background }) => {
  return (
    <StyledContainer>
      <StyledHeading>{title}</StyledHeading>
      <StyledDescription>{description}</StyledDescription>

      <InnerContainer>
        <BackgroundContainer>
          <Image {...background} layout="fill" objectFit="cover" />
        </BackgroundContainer>

        <SectionImageContainer>
          <Image {...image} />
        </SectionImageContainer>

        <SectionSmallContainer>
          {cards.map((card, i) => (
            <Card {...card} key={i} />
          ))}
        </SectionSmallContainer>
      </InnerContainer>
    </StyledContainer>
  );
};
