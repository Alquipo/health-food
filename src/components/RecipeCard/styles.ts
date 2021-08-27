import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 52.8rem;
    height: 22.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    box-shadow: 0 1.1rem 1.5rem 0 rgba(158, 154, 154, 0.36);

    ${media.lessThan('small')`
      max-width: 100%;
      flex-direction: column;
      height: 40rem;

    `};
  `}
`

export const WrapperImage = styled.div`
  flex: 9;
  width: 100%;
  height: 100%;
  position: relative;

  ${media.lessThan('small')`
    flex: 9;
  `};
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 8;
    padding: 0 ${theme.spacings.small};

    ${media.lessThan('small')`
      flex: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: ${theme.spacings.xsmall};
      margin-top: ${theme.spacings.xsmall};
    `};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    color: ${theme.colors.secondary};
    letter-spacing: 0.1rem;
  `}
`
