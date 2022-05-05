import Image from "next/image";

import {
  StyledContainer,
  StyledHeading,
  StyledDescription,
  StyledInnerContainer,
  StyledBackgroundContainer,
  StyledImageContainer,
  StyledContentContainer,
  StyledItemContainer,
  StyledInnerHeading,
  StyledInnerParagraph,
  StyledTextContainer,
  StyledIconWrapper,
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
        <StyledContentContainer>
          <StyledItemContainer bg="#f9f9f9">
            <StyledIconWrapper>
              <Image src="/img/icon1.png" width="64" height="64" layout="" />
            </StyledIconWrapper>
            <StyledTextContainer>
              <StyledInnerHeading>Brief</StyledInnerHeading>
              <StyledInnerParagraph>
                Complete <b>brief writing or simple guidance</b> or what to include, we've
                got you covered.
              </StyledInnerParagraph>
            </StyledTextContainer>
          </StyledItemContainer>
          <StyledItemContainer bg="#f4f4f4">
            <StyledIconWrapper>
              <Image src="/img/icon2.png" width="64" height="64" />
            </StyledIconWrapper>
            <StyledTextContainer>
              <StyledInnerHeading>Search</StyledInnerHeading>
              <StyledInnerParagraph>
                In-depth agency search covering; <b>criteria matching</b>, door knocking
                and due-dilligence vetting.
              </StyledInnerParagraph>
            </StyledTextContainer>
          </StyledItemContainer>
          <StyledItemContainer bg="#f1f1f1" selected>
            <StyledIconWrapper>
              <Image src="/img/icon3.png" width="64" height="64" />
            </StyledIconWrapper>
            <StyledTextContainer>
              <StyledInnerHeading selected>Pitch</StyledInnerHeading>
              <StyledInnerParagraph>
                Comprehensive <b>pitch management,</b> including comms, diary management
                and pitch hosting.
              </StyledInnerParagraph>
            </StyledTextContainer>
          </StyledItemContainer>
        </StyledContentContainer>
      </StyledInnerContainer>
    </StyledContainer>
  );
};
