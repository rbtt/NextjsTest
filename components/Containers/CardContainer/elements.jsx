import styled from "styled-components";

export const StyledCardContainer = styled((props) => <div {...props} />)`
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
