import styled, { css } from 'styled-components'

import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    form {
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.lessThan('large')`
      height: auto;
    `};
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 10rem auto;
  max-width: 120rem;

  ${media.lessThan('large')`
    margin-top: 0;
    padding: 10rem 0;
    justify-content: center;
  `};
`

export const FirstWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;

    button {
      margin-left: ${theme.spacings.xxsmall};
    }

    ${media.lessThan('large')`
      width: 100%;
      max-width: 55rem;
    `};
  `}
`

export const SecondWrapper = styled.div`
  flex: 2;

  ${media.lessThan('large')`
    display: none;
  `};
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
    line-height: 1.3;

    ${media.lessThan('large')`
    font-size: ${theme.font.sizes.xxxlarge};

    `};
  `}
`

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  ${media.lessThan('large')`
    display: none;
  `};
`
