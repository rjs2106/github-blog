import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'

// Styles
export const HeaderContainer = styled.header`
  height: 18.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: radial-gradient(
    circle,
    rgba(50, 148, 248, 0.15) 10%,
    ${(props) => props.theme['blue-800']} 90%
  );

  @media ${breakpoints.medium} {
    grid-template-columns: auto;
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  background: url('./images/bg_header_01.svg');
  background-repeat: no-repeat;
  background-position: left center;
  -webkit-background-size: 25rem;
  -moz-background-size: 25rem;
  -o-background-size: 25rem;
  background-size: 25rem;

  @media ${breakpoints.medium} {
    display: none;
  }
`

export const MiddleContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3.5rem;
  filter: brightness(1.1);
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  background: url('./images/bg_header_02.svg');
  background-repeat: no-repeat;
  background-position: right center;
  -webkit-background-size: 22rem;
  -moz-background-size: 22rem;
  -o-background-size: 22rem;
  background-size: 22rem;

  @media ${breakpoints.medium} {
    display: none;
  }
`
