import * as S from './styles'

import { useRouter } from 'next/router'

import { Form, Formik, Field } from 'formik'

import { fieldsValidationSchema } from '../../utils/validations'

import Button from '../../components/Button'
import TextField from '../../components/TextField'
import useStorage from '../../hooks/use-storage'

export type FormType = {
  name: string
  birthDate: string
  cpf: string
  zipCode: string
  address: string
  district: string
  number: string
  state: string
  city: string
}

const initialValues: FormType = {
  name: '',
  birthDate: '',
  cpf: '',
  zipCode: '',
  address: '',
  district: '',
  number: '',
  state: '',
  city: ''
}

function FormSignUp() {
  const { setLocalStorage, setCookie } = useStorage()
  const { push } = useRouter()

  /* istanbul ignore next */
  async function handleSubmit(values: FormType) {
    setLocalStorage('signup-data', values)
    setCookie('signup-data', values, 5)

    window.alert('registered successfully')
    push(`/`)
  }

  /* istanbul ignore next */
  async function fetchCEP(
    e: React.FocusEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: string) => void
  ) {
    const { value } = e.target as HTMLInputElement

    const regex = new RegExp(/[^0-9]|[/ /]/g, '')
    const sCep = value.trim().replace(regex, '')

    if (sCep.length !== 8) return

    const resp = await fetch(`https://viacep.com.br/ws/${value}/json`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })

    const data = await resp.json()

    setFieldValue('address', data.logradouro)
    setFieldValue('district', data.bairro)
    setFieldValue('city', data.localidade)
    setFieldValue('state', data.uf)
  }

  return (
    <>
      <S.FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={fieldsValidationSchema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ setFieldValue }) => (
            <Form autoComplete="off">
              <Field as={TextField} name="name" label="Name" type="text" />

              <Field
                as={TextField}
                name="birthDate"
                label="Birth Date"
                type="date"
              />

              <Field
                as={TextField}
                mask="999.999.999-99"
                name="cpf"
                label="CPF"
                type="text"
              />

              <Field
                as={TextField}
                name="zipCode"
                label="Zip Code"
                mask="99999-999"
                type="text"
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                  fetchCEP(e, setFieldValue)
                }
              />

              <Field
                as={TextField}
                name="address"
                label="Address"
                type="text"
              />

              <Field
                as={TextField}
                name="number"
                label="Number"
                type="number"
              />

              <Field
                as={TextField}
                name="district"
                label="District"
                type="text"
              />

              <Field as={TextField} name="city" label="City" type="text" />

              <Field
                as={TextField}
                name="state"
                label="State (UF)"
                type="text"
              />

              <Button fullSize type="submit" aria-label="Confirm">
                Confirm
              </Button>
            </Form>
          )}
        </Formik>
      </S.FormWrapper>
    </>
  )
}

export default FormSignUp
