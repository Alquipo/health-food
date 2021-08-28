import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacings.xxlarge} 0 ${theme.spacings.large};
  `}
`

export const Header = styled.div`
  width: 100%;
  max-width: 51rem;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.secondary};
    text-align: center;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};
    text-align: center;
    line-height: 1.4;
  `}
`

export const Recipes = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.xxlarge};

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;

    `};
  `}
`
