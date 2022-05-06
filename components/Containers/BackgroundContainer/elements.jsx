import styled from "styled-components";

export const StyledBackgroundContainer = styled(({ ...props }) => <div {...props} />)`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid lightblue;
`;
