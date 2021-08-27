import * as S from './styles'

import { FieldHookConfig, useField } from 'formik'

export type TextFieldProps = {
  label?: string
  placeholder?: string
  onBlur?: () => Promise<void>
}

function TextField({
  label,
  placeholder,
  onBlur,
  ...props
}: TextFieldProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props)

  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={field.name}>{label}</S.Label>}

      <S.Input
        placeholder={placeholder}
        type={props.type}
        {...field}
        onBlur={onBlur}
        autoComplete="off"
      />

      {meta.error && <S.Error>{meta.error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
