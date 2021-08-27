import * as S from './styles'

import Button from '../Button'

export default function ServicesSection() {
  return (
    <S.Wrapper>
      <S.Image src="/img/bloco_services.svg" />

      <S.Content>
        <S.TextWrapper>
          <S.Title>The best services ready To serve you</S.Title>

          <S.Text>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </S.Text>

          <S.Text>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </S.Text>

          <S.Text>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </S.Text>

          <Button boxShadow>Know More</Button>
        </S.TextWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
