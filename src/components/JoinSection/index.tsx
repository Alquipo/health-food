import * as S from './styles'

import { Formik, Form } from 'formik'

import Button from '../Button'
import TextField from '../TextField'

type FormType = {
  email: string
}

const initialValues: FormType = {
  email: ''
}

export default function JoinSection() {
  async function handleSubmit() {
    return null
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.FormWrapper>
          <S.Title>Join our membership to get special offer</S.Title>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {() => (
              <Form style={{ display: 'flex' }}>
                <TextField
                  placeholder="Enter your email address"
                  name="email"
                  type="email"
                  fullWidth
                />
                <Button type="submit" aria-label="join">
                  Join
                </Button>
              </Form>
            )}
          </Formik>
        </S.FormWrapper>
      </S.Content>

      <S.Image src="/img/bloco_final_image.svg" />
    </S.Wrapper>
  )
}
