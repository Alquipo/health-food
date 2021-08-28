import * as S from './styles'

import { Formik, Form } from 'formik'

import { Search } from '@styled-icons/boxicons-regular'

import Button from '../Button'
import Menu from '../Menu'
import Container from '../Container'
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
      {/* <Container> */}
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
                    name="text"
                    type="text"
                    fullWidth
                  />
                  <Button type="submit">
                    <Search size="24" />
                  </Button>
                </Form>
              )}
            </Formik>
          </S.FirstWrapper>

          <S.SecondWrapper></S.SecondWrapper>
        </S.Content>
      </S.Wrapper>

      <S.Image src="/img/Illustration.svg" />
      {/* </Container> */}
    </>
  )
}
