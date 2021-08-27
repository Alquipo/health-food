import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;
    height: 45rem;
    width: 100%;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    box-shadow: 0 1.1rem 1.5rem 0 rgba(10, 10, 10, 0.3);
    border: none;
  `}
`

export const WrapperImage = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xxlarge};

    ${media.between('small', 'medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xlarge};
    `};
  `}
`

export const AuthorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xsmall};

    .AuthorPhoto {
      border-radius: 50%;
    }

    ${media.lessThan('small')`
    margin-top: ${theme.spacings.small};
    `};
  `}
`

export const AuthorName = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `};
  `}
`
