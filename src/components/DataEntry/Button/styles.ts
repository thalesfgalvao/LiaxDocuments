import styled, { css } from 'styled-components'

export const Wrappeer = styled.div`
  width: 100%;
`

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem 0rem 1rem 0rem;
    box-shadow: ${theme.shadows.bottom};
    background-color: ${theme.colors.lightGrey};
    color: ${theme.colors.white};
    font-weight: bold;

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.grey};
      transition: 0.5s;
    }
  `}
`
