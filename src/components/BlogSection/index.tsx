import * as S from './styles'

import Gallery from 'components/Gallery'
import gallery from '../Gallery/mock'

export default function BlogSection() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <S.Title>Read Our Blog</S.Title>

          <S.Text>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </S.Text>
        </S.Header>

        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      </S.Content>
    </S.Wrapper>
  )
}
