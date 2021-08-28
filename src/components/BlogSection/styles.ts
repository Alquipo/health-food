import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    overflow: hidden;
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

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxlarge};

    `};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};
    text-align: center;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};

    `};
  `}
`

export const SectionGallery = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);

      display: block;

    `};
  `}
`
