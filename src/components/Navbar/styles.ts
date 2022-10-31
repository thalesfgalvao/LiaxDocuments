import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    grid-column: 1/7;
    grid-row: 1/2;
    padding: 1.5rem;
    display: grid;
    box-shadow: ${theme.shadows.bottom};
    background-color: ${theme.colors.semiWhite};
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-rows: 12fr;
    z-index: ${theme.index.above} !important;
  `}
`

export const Logo = styled.img`
  width: 25%;
  grid-column: 1/1;
  color: white;
  grid-row: 1;
`

export const WelcomeText = styled.p`
  ${({ theme }) => css`
    font-style: italic;
    grid-row: 1;
    grid-column: 4;
    color: ${theme.colors.grey};
  `}
`
