import * as yup from 'yup'

const nascimentoRegex =
  /^((((19|[2-9]\d)\d{2})-(0[13578]|1[02])-(0[1-9]|[12]\d|3[01]))|(((19|[2-9]\d)\d{2})-(0[13456789]|1[012])-(0[1-9]|[12]\d|30))|(((19|[2-9]\d)\d{2})-02-(0[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-02-29))$/g

const cpfRegex = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/

const cepRegex = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/

const estadoRegex =
  /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i

export const fieldsValidationSchema = yup.object({
  name: yup.string().required('Is not allowed to be empty'),
  birthDate: yup
    .string()
    .required('Is not allowed to be empty')
    .matches(nascimentoRegex, 'must be a valid email'),
  cpf: yup
    .string()
    .max(14, 'Must be 14 characters')
    .required('Is not allowed to be empty')
    .matches(cpfRegex, 'Invalid CPF'),
  zipCode: yup
    .string()
    .required('Is not allowed to be empty')
    .matches(cepRegex, 'Invalid ZipCode'),
  address: yup.string().required('Is not allowed to be empty'),
  district: yup.string().required('Is not allowed to be empty'),
  number: yup.number().required('Is not allowed to be empty'),
  city: yup.string().required('Is not allowed to be empty'),
  state: yup
    .string()
    .required('Is not allowed to be empty')
    .matches(estadoRegex, 'Invalid State')
})
