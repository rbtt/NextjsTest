import styled from "styled-components";

export const StyledSmallContainer = styled(({ ...props }) => <div {...props}></div>)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  /* border: 1px solid black; */
  position: relative;
  z-index: 1;
  width: 30rem;
  align-items: baseline;
`;
