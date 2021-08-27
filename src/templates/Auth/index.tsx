import Link from 'next/link'
import Image from 'next/image'

// import Heading from 'components/Heading'
// import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/healthy_food.svg"
        alt="Healthy Food"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <div>
          <h1>All your favorite recipes in one place</h1>
          <S.Subtitle>
            <strong>Healthy Food Web</strong> is the best and most complete site
            healthy food.
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