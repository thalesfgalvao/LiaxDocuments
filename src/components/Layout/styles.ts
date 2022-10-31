import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 4fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 4fr 5fr 1fr;
  width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  grid-column: 2/5;
  grid-row: 2/5;
  background-color: red;
`

export const WrapperTitle = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.semiWhite};
    font-weight: bold;
    font-style: italic;
    grid-column: 3/6;
    grid-row: 2/3;
    padding: 1rem;
    border: 1px solid black;
    margin-top: 2rem;
    border-radius: 1.5rem 0rem 1.5rem 0rem;
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.grey};
    text-align: center;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    margin-top: 3rem;
    display: grid;
    grid-column: 3/6;
    grid-row: 3/5;
    grid-template-columns: 5fr 1fr 5fr;
    grid-template-rows: 1fr 5fr 5fr 1fr;
    background-color: ${theme.colors.semiWhite};
    padding: 2rem;
    border: 1px solid black;
    border-radius: 1.5rem 0rem 1.5rem 0rem;
  `}
`
