import * as S from './styles'
import Image from 'next/image'

export type BlogCardProps = {
  image: string
  title: string
  authorName: string
  authorPhoto: string
}
export default function BlogCard({
  image,
  title,
  authorName,
  authorPhoto
}: BlogCardProps) {
  return (
    <S.Wrapper>
      <S.WrapperImage>
        <Image src={image} alt={title} objectFit="cover" layout="fill" />
      </S.WrapperImage>

      <S.Content>
        <S.Title>{title}</S.Title>

        <S.AuthorWrapper>
          <Image
            src={authorPhoto}
            alt={authorName}
            objectFit="cover"
            layout="fixed"
            width="50"
            height="50"
            className="AuthorPhoto"
          />
          <S.AuthorName>{authorName}</S.AuthorName>
        </S.AuthorWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
