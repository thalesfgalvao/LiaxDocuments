import styled from 'styled-components'

export const Documents = styled.div`
  grid-column: 1/2;
  grid-row: 1/4;
  max-width: 100%;
`

export const Document = styled.iframe`
  width: 100%;
  min-height: 60vh;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3/4;
  grid-row: 1/4;
  max-width: 100%;
  gap: 1rem;
`
