import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.white};
    padding: 0.5rem;
    border-radius: 1rem 0rem 1rem 0rem;
    border: 1px solid ${theme.colors.dark};

    &:focus {
      border: none;
    }
  `}
`

export const Small = styled.p`
  font-weight: bold;
`

export const Test = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
