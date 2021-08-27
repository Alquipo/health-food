import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    width: 100%;
    display: flex;
    justify-content: center;

    form {
      width: 100%;

      display: grid;

      grid-template-columns: 1fr 1fr;
      grid-gap: ${theme.spacings.xxsmall};
      grid-template-areas: 'name birthDate' 'cpf zipCode' 'address number' 'district city' 'state state' 'button button';
      justify-items: center;

      margin: 0 ${theme.spacings.medium};

      ${media.greaterThan('large')`
        width: 50%;
      `};

      div:last-of-type {
        align-items: center;
      }

      ${media.lessThan('small')`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin: 0 ${theme.spacings.medium};

      div {
        align-items: center;
      }
    `};
    }

    button {
      margin-top: ${theme.spacings.medium};
      margin-left: auto;
      grid-area: button;
      margin-bottom: ${theme.spacings.small};
    }

    label {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
