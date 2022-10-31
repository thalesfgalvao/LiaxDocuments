import styled, { css } from 'styled-components'

export const LitsOfDocuments = styled.div`
  display: flex;
  grid-column: 1/2;
  gap: 10rem;
`

export const DocumentsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  &:hover {
    cursor: pointer;
  }
`

export const Documents = styled.p``

export const Placeholder = styled.div`
  opacity: 0;
`
