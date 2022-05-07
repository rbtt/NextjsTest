import Image from "next/image";
import {
  CardContainer,
  CardIconContainer,
  CardTextContainer,
} from "../../components/Containers";
import { CardHeading, CardParagraph } from "../../components/Typography";

export const Card = (props) => {
  return (
    <CardContainer width={props.width} bg={props.background} selected={props.selected}>
      <CardIconContainer>
        <Image src={props.icon} width="56" height="56" />
      </CardIconContainer>
      <CardTextContainer>
        <CardHeading selected={props.selected}>{props.title}</CardHeading>
        <CardParagraph>{props.description}</CardParagraph>
      </CardTextContainer>
    </CardContainer>
  );
};
