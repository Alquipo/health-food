import { HTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = HTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  boxShadow?: boolean
} & ButtonTypes

export default function Button({
  type = 'button',
  children,
  boxShadow,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper {...props} type={type} boxShadow={boxShadow}>
      {children}
    </S.Wrapper>
  )
}
