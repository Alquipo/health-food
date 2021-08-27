import * as S from './styles'

import { FieldHookConfig, useField } from 'formik'

export type TextFieldProps = {
  label?: string
  placeholder?: string
  onBlur?: () => Promise<void>
  gridArea?: string
  mask?: string
}

function TextField({
  label,
  placeholder,
  onBlur,
  mask,
  ...props
}: TextFieldProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props)

  return (
    <S.Wrapper gridArea={field.name}>
      {label && <S.Label htmlFor={field.name}>{label}</S.Label>}

      <S.Input
        placeholder={placeholder}
        type={props.type}
        {...field}
        onBlur={onBlur}
        autoComplete="off"
        mask={mask}
      />

      {meta.error && <S.Error>{meta.error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
