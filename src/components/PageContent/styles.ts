import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  padding-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 5rem;
  width: 100%;
  height: 100%;
  grid-template-columns: 6fr 6fr;
  grid-template-rows: 1fr 5fr 5fr 1fr;
  gap: 2rem;
`

export const WrapperTitle = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.semiWhite};
    font-weight: bold;
    font-style: italic;
    grid-column: 1/3;
    grid-row: 1/2;
    padding: 1rem;
    border: 1px solid black;
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

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    display: grid;
    grid-column: 1/3;
    grid-row: 2/3;
    grid-template-columns: 6fr 1fr 4fr 1fr;
    grid-template-rows: 1fr 5fr 5fr 1fr;
    background-color: ${theme.colors.semiWhite};
    padding: 5rem;
    border: 1px solid black;
    border-radius: 1.5rem 0rem 1.5rem 0rem;
  `}
`
