import Container from '../Container'
import * as S from './styles'

export default function Footer() {
  return (
    <Container>
      <S.Wrapper>
        <S.Copyright>© Copyrights 2019 Stack. All Rights Reserved.</S.Copyright>

        <S.Links>
          <a href="https://github.com/Alquipo">Privacy Policy</a>
          <a href="https://github.com/Alquipo">Terms and Conditions</a>
        </S.Links>
      </S.Wrapper>
    </Container>
  )
}
