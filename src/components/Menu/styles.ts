import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
    width: 100%;
  }
`

export const Logo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.spacings.medium};
  `}
`

type MenuNavProps = {
  isOpen: boolean
}

const menuNavModifiers = {
  isOpen: () => css`
    animation: menuAnimation 0.3s forwards;

    @keyframes menuAnimation {
      to {
        opacity: 1;
        pointer-events: all;
      }
    }
  `
}

export const MenuNav = styled.div<MenuNavProps>`
  ${({ theme, isOpen }) => css`
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
    position: absolute;
      opacity: 0;
      pointer-events: none;
      top: 100%;
      right: 0;
      background: ${theme.colors.primary};
      z-index: ${theme.layers.menu};

      ${isOpen && menuNavModifiers.isOpen()}
    `};
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
    color: ${theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.small};
    transition: ${theme.transition.fast};

    &:hover {
      filter: brightness(0.95);
    }

    ${media.lessThan('large')`
    color: ${theme.colors.text};

    `};

    ${media.lessThan('medium')`
      color: ${theme.colors.white};
      display: block;
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      border-bottom: solid 0.1rem ${theme.colors.white};
      width: 100%;
    `};
  `}
`

export const Register = styled.button`
  ${({ theme }) => css`
    border: none;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.small};
    transition: ${theme.transition.fast};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.primary};
    cursor: pointer;
    font-weight: ${theme.font.bold};

    ${media.lessThan('large')`
      background: ${theme.colors.primary};
      color: ${theme.colors.white};

    `};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    `};
  `}
`

export const MobileMenuButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      fill: ${theme.colors.secondary};
    }

    ${media.greaterThan('medium')`
      display: none;
    `};
  `}
`
