import * as S from './styles'

import Container from '../Container'
import RecipeCard from '../RecipeCard'

export default function RecipeSection() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Header>
            <S.Title>Our Best Recipes</S.Title>

            <S.Text>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </S.Text>
          </S.Header>

          <S.Recipes>
            <RecipeCard
              image="/img/comida_1.svg"
              title="Broccoli Saladwith Bacon"
            />
            <RecipeCard
              image="/img/comida_2.svg"
              title="Classic Beef Burgers"
            />
            <RecipeCard
              image="/img/comida_3.svg"
              title="Classic Potato Salad"
            />
            <RecipeCard
              image="/img/comida_4.svg"
              title="Cherry Cobbler on the Grill"
            />
          </S.Recipes>
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}
