import styled from 'styled-components'
import { breakpoints } from '../../../../styles/breakpoints'

export const ProfileContainer = styled.section`
  position: relative;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['blue-700']};
  border-radius: 0.75rem;
  margin-top: -7rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.3);

  @media ${breakpoints.medium} {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`
export const Photo = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 9.25rem;
    border-radius: 0.5rem;
  }
`
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakpoints.medium} {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.snow};

    @media ${breakpoints.medium} {
      margin-bottom: 0.5rem;
    }
  }

  button {
    background: transparent;
    border: 1px solid transparent;
    color: ${(props) => props.theme['blue-400']};
    font-size: 0.75rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.5s;
    font-weight: 700;

    &:hover {
      filter: brightness(1.3);
      border-bottom: 1px solid;
    }
  }
`

export const Description = styled.div`
  flex: 1;
  padding: 0.5rem 0;
  color: ${(props) => props.theme['blue-200']};
  text-shadow: 0px 1px 2px ${(props) => props.theme['blue-900']};
`

export const Social = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1.5rem;

  @media ${breakpoints.medium} {
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: ${(props) => props.theme['blue-50']};

    svg {
      color: ${(props) => props.theme['blue-300']};
    }
  }
`
