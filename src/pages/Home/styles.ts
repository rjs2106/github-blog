import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.5rem;
`
export const PostsContainer = styled.section`
  margin-top: 3rem;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.2rem;
    color: ${(props) => props.theme['blue-50']};
  }

  span {
    font-size: 0.85rem;
    color: ${(props) => props.theme['blue-300']};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  input {
    background-color: ${(props) => props.theme['blue-900']};
    height: 2.5rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['blue-500']};
    padding: 0.5rem;
    color: ${(props) => props.theme.snow};
    transition: all 0.2s;

    &::placeholder {
      color: ${(props) => props.theme['blue-300']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['blue-400']};
    }
  }
`

export const CardsContainer = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem 1.5rem;
`
