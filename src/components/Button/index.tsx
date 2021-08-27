import { HTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = HTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  boxShadow?: boolean
  fullSize?: boolean
} & ButtonTypes

export default function Button({
  type = 'button',
  children,
  boxShadow,
  fullSize,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper {...props} fullSize={fullSize} type={type} boxShadow={boxShadow}>
      {children}
    </S.Wrapper>
  )
}
