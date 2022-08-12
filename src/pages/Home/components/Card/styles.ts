import styled from 'styled-components'

export const CardContainer = styled.div`
  border: 1px solid transparent;
  width: 100%;
  height: 250px;
  border-radius: 0.5rem;
  background: ${(props) => props.theme['blue-600']};
  padding: 1.5rem;
`
