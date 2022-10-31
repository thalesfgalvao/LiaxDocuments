import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 11fr;
    grid-template-rows: 1fr 11fr;
    width: 100vw;
    height: 100vh;
  `}
`

export const Content = styled.div`
  grid-column: 2/5;
  grid-row: 2/5;
  background-color: red;
`
