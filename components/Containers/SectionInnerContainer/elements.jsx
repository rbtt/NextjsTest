import styled from 'styled-components'
import { SectionContainer } from '../SectionContainer'

export const StyledInnerContainer = styled((props) => <SectionContainer {...props} />)`
  width: 100%;
  height: 100%;
  border: 2px solid green;
  justify-content: center;
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
  }
`
