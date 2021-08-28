import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, boxShadow, fullSize }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    transition: ${theme.transition.fast};
    box-shadow: ${boxShadow &&
    `0 1.3rem 2.1rem -0.8rem ${theme.colors.primary}`};
    cursor: pointer;
    border: none;

    width: ${fullSize && '100%'};

    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    &:hover {
      filter: brightness(0.95);
    }
  `}
`
