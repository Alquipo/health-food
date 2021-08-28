import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    max-height: 70rem;
    ${media.lessThan('large')`
      padding: ${theme.spacings.xxlarge} ${theme.spacings.xsmall};
    `};
  `}
`

export const Image = styled.img`
  flex: 1;
  object-fit: cover;

  ${media.lessThan('large')`
    display: none;
  `};
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;

  ${media.lessThan('large')`
    align-items: center;
    justify-content: center;
  `};
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 55rem;

    button {
      align-self: flex-start;
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
    line-height: 1.3;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxxlarge};

    `};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};
    line-height: 1.6;
    font-size: ${theme.font.sizes.xlarge};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};

    `};
  `}
`
