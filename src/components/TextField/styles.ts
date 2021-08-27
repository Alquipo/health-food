import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: block;
    max-width: 45rem;
    width: 100%;
    padding: ${theme.spacings.xsmall};
    border: solid 0.1rem ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    transition: ${theme.transition.fast};
    font-size: ${theme.font.sizes.small};

    &:focus,
    &:hover {
      outline: none;
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.red};
  `}
`
