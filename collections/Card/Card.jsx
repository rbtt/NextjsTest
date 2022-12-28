import { useState, useCallback } from "react";
import Image from "next/image";

import {
  StyledCardContainer,
  StyledIconWrapper,
  StyledTextContainer,
  StyledCardHeading,
  StyledCardParagraph
} from "./elements";

export const Card = (props) => {
  const [selected, setSelected] = useState(false);
  const mouseEnterHandler = useCallback(() => {
    setSelected(true);
  }, []);
  const mouseExitHandler = useCallback(() => {
    setSelected(false);
  }, []);
  return (
    <StyledCardContainer
      width={props.width}
      bg={props.background}
      selected={selected}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseExitHandler}
    >
      <StyledIconWrapper>
        <Image src={props.icon} width="56" height="56" alt="" />
      </StyledIconWrapper>
      <StyledTextContainer>
        <StyledCardHeading selected={selected}>{props.title}</StyledCardHeading>
        <StyledCardParagraph>{props.description}</StyledCardParagraph>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};
