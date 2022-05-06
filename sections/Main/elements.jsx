import styled from "styled-components";

import { SectionContainer, SectionHeading, SectionSubheading } from "../../components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
  position: relative;
  z-index: 1;
`;

export const StyledHeading = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  text-align: center;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  margin-bottom: 3rem;
  text-align: center;
`;

// #################################################

export const StyledInnerContainer = styled((props) => <SectionContainer {...props} />)`
  width: 100%;
  height: 100%;
  border: 2px solid green;
  justify-content: center;
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledBackgroundContainer = styled(({ ...props }) => <div {...props} />)`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid lightblue;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  /* margin-left: 10rem; */
`;

export const StyledContentContainer = styled(({ ...props }) => <div {...props}></div>)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  position: relative;
  z-index: 1;
  width: 500px;
`;

// card
export const StyledItemContainer = styled(({ ...props }) => <div {...props}></div>)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg || "#ccc"};
  margin-top: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  border: ${({ selected }) => selected && "2px solid #006efd"};
`;

export const StyledIconWrapper = styled(({ ...props }) => <div {...props}></div>)`
  flex: 1;
  padding: 1rem;
  margin-left: 1rem;
  /* border: 1px solid red; */
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props}></div>)`
  /* margin-left: 3rem; */
  flex: 3;
  /* border: 1px solid blue; */
`;

export const StyledInnerHeading = styled(({ ...props }) => <h2 {...props}></h2>)`
  font-family: Poppins;
  font-weight: 600;
  color: ${({ selected }) => selected && "#006efd"};
  text-decoration: ${({ selected }) => selected && "underline"};
  text-decoration-color: ${({ selected }) => selected && "#79aff7"};
  margin: 0;
`;

export const StyledInnerParagraph = styled(({ ...props }) => <p {...props}></p>)`
  font-family: Poppins;
  margin: 0;
`;
