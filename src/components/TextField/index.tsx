import * as S from './styles'

import { FieldHookConfig, useField } from 'formik'

export type TextFieldProps = {
  label?: string
  placeholder?: string
  onBlur?: () => Promise<void>
  gridArea?: string
  mask?: string
  fullWidth?: boolean
}

function TextField({
  label,
  placeholder,
  onBlur,
  mask,
  fullWidth,
  ...props
}: TextFieldProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props)

  return (
    <S.Wrapper gridArea={field.name} fullWidth={fullWidth}>
      {label && <S.Label htmlFor={field.name}>{label}</S.Label>}

      <S.Input
        placeholder={placeholder}
        type={props.type}
        {...field}
        onBlur={onBlur}
        autoComplete="off"
        mask={mask}
        data-testid={field.name}
      />

      {meta.error && <S.Error>{meta.error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
