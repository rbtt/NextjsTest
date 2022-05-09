import styled from "styled-components";

export const StyledCardContainer = styled((props) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg || "#ccc"};
  margin-top: 2rem;
  border-radius: 0.5rem;
  padding: 1rem;
  border: ${({ selected }) => (selected ? "2px solid #006efd" : "2px solid transparent")};
  width: ${({ width }) => width};
`;

export const StyledIconWrapper = styled(({ ...props }) => <div {...props}></div>)`
  flex: 1;
  padding: 1rem;
  margin-left: 1rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props}></div>)`
  flex: 3;
`;

export const StyledCardHeading = styled(({ ...props }) => <h2 {...props} />)`
  font-family: Poppins;
  font-weight: 600;
  color: ${({ selected }) => selected && "#006efd"};
  text-decoration: ${({ selected }) => selected && "underline"};
  text-decoration-color: ${({ selected }) => selected && "#79aff7"};
  margin: 0;
`;

export const StyledCardParagraph = styled((props) => (
  <p dangerouslySetInnerHTML={{ __html: props.children }} className={props.className} />
))`
  font-family: Poppins;
  margin: 0;
`;
