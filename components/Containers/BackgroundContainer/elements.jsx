import styled from "styled-components";

export const StyledBackgroundContainer = styled(({ ...props }) => <div {...props} />)`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  margin-top: 3rem;
  @media(max-width: 1024px) {
    margin-top: 15rem;
    margin-left: -10rem;
  }
`;
