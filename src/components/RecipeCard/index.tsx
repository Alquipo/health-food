import * as S from './styles'

import Button from '../Button'
import Image from 'next/image'

export type RecipeCardProps = {
  image: string
  title: string
}

export default function RecipeCard({ image, title }: RecipeCardProps) {
  return (
    <S.Wrapper>
      <S.WrapperImage>
        <Image src={image} alt={title} objectFit="cover" layout="fill" />
      </S.WrapperImage>

      <S.Content>
        <S.Title>{title}</S.Title>
        <Button>See Recipe</Button>
      </S.Content>
    </S.Wrapper>
  )
}
