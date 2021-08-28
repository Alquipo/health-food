import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxxlarge};
      background-color: ${theme.colors.primary};
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      border: none;

      ${media.lessThan('large')`
      left: ${theme.spacings.small};
      `};
    }

    .slick-next {
      right: -${theme.spacings.xxxlarge};
      background-color: ${theme.colors.primary};
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      border: none;

      ${media.lessThan('large')`
      right: ${theme.spacings.small};
      `};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: ${theme.spacings.small} ${theme.spacings.xsmall};
      cursor: pointer;
    }

    .slick-slide {
      ${media.lessThan('medium')`
      margin-left: ${theme.spacings.small};

    `}
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`
