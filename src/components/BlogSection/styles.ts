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
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.secondary};
    text-align: center;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};
    text-align: center;
    line-height: 1.4;
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
