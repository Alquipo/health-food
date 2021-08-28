import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10.3rem;
    padding: ${theme.spacings.small} 0;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};

    ${media.lessThan('medium')`
      flex-direction: column;
      justify-content: center;
      text-align: center;
      height: auto;
    `};
  `}
`

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    ${media.lessThan('medium')`
    margin-top: ${theme.spacings.medium};
      order: 2;
    `};
  `}
`

export const Links = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.text};
      text-decoration: none;
      transition: ${theme.transition.fast};

      &:not(:first-child) {
        margin-left: ${theme.spacings.xsmall};
      }

      &:hover {
        text-decoration: underline;
      }

      ${media.lessThan('medium')`
        &:not(:first-child) {
          margin-top: ${theme.spacings.xxsmall};
         }
     `};
    }

    ${media.lessThan('medium')`
      order: 1;
      display: flex;
      flex-direction: column;
    `}
  `}
`
