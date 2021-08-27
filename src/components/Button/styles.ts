import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, boxShadow }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    transition: ${theme.transition.fast};
    box-shadow:  ${boxShadow &&  `0 1.3rem 2.1rem -0.8rem ${theme.colors.primary}`}; 
    cursor: pointer;
    border: none;

    &:hover {
      filter: brightness(0.95);
    }
  `}
`