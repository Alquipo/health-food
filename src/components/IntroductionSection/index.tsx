import * as S from './styles'

import { Formik, Form } from 'formik'

import { Search } from '@styled-icons/boxicons-regular'

import Button from '../Button'
import Menu from '../Menu'
import TextField from '../TextField'

type FormType = {
  text: string
}

const initialValues: FormType = {
  text: ''
}

export default function IntroductionSection() {
  async function handleSubmit() {
    return null
  }

  return (
    <>
      <S.Wrapper>
        <Menu />

        <S.Content>
          <S.FirstWrapper>
            <S.Title>Ready for Trying a new recipe?</S.Title>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {() => (
                <Form style={{ display: 'flex' }}>
                  <TextField
                    placeholder="Search healthy recipes"
                    name="recipes"
                    type="text"
                    fullWidth
                  />
                  <Button type="submit" aria-label="Submit">
                    <Search size="24" />
                  </Button>
                </Form>
              )}
            </Formik>
          </S.FirstWrapper>
          <S.SecondWrapper></S.SecondWrapper>
        </S.Content>
      </S.Wrapper>
      <S.Image src="/img/Illustration.svg" alt="um peso e uma maçã" />
    </>
  )
}
