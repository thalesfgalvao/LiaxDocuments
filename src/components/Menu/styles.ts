import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    top: 0;
    grid-column: 1/2;
    grid-row: 2/6;
    display: flex;
    padding-top: 1rem;
    flex-direction: column;
    background-color: ${theme.colors.semiWhite};
  `}
`

export const DivItem = styled(Link)`
  ${({ theme }) => css`
    & {
      padding: 0.5rem;
      width: 100%;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
      color: ${theme.colors.dark};
    }
    &:hover {
      background-color: ${theme.colors.shadowgrey};
      font-weight: bold;
      cursor: pointer;
      transition: 0.5s;
      padding-left: 1rem;
    }
  `}
`
