import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;

    ${media.lessThan('large')`
      padding: ${theme.spacings.xxlarge} ${theme.spacings.xsmall};
    `};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall};

    ${media.lessThan('large')`
      align-items: center;
      justify-content: center;
    `};
  `}
`

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 42rem;

    button {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
    line-height: 1.3;
  `}
`

export const Image = styled.img`
  flex: 1;
  object-fit: cover;

  ${media.lessThan('large')`
    display: none;
  `};
`
