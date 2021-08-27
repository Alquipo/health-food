import styled, { css } from 'styled-components'
import { TextFieldProps } from '.'
import InputMask from 'react-input-mask'

export const Wrapper = styled.div<TextFieldProps>`
  ${({ theme, gridArea }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: ${gridArea};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Input = styled(InputMask)`
  ${({ theme }) => css`
    display: block;
    max-width: 25rem;
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
