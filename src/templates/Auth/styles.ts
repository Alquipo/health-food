import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 0.75fr 1fr;
  `}
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;

    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.primary};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: ${theme.layers.base};

    div {
      width: fit-content;
      height: fit-content;
      margin-top: 2rem;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.secondary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;

    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
    }

    h2 {
      color: ${theme.colors.secondary};
      display: flex;
      justify-content: center;
      margin-top: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      /* width: 36rem; */
    `}
  `}
`
export const Logo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.spacings.medium};
  `}
`