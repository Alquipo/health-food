import { NextSeo } from 'next-seo'

import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <NextSeo
      title={'SignUp - Healthy Food'}
      description={'The best recipe site in the world'}
    />
    <S.BannerBlock>
      <Image
        src="/img/healthy_food.jpg"
        alt="Healthy Food"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <div>
          <S.Subtitle>
            <strong> Healthy Food Web </strong> is the best and most complete
            site healthy food.
          </S.Subtitle>
        </div>

        <S.Footer>
          Healthy Food {currentYear} © Todos os Direitos Reservados
        </S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <S.Logo>Healthy Food</S.Logo>
          </a>
        </Link>

        <h2>{title}</h2>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
