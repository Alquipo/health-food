import * as S from './styles'

import IntroductionSection from '../../components/IntroductionSection'
import ServicesSection from '../../components/ServiceSection'
import RecipesSection from '../../components/RecipesSection'
import BlogSection from '../../components/BlogSection'
import JoinSection from '../../components/JoinSection'
import Footer from '../../components/Footer'

const HomeTemplate = () => (
  <S.Wrapper>
    <IntroductionSection />
    <RecipesSection />
    <ServicesSection />
    <BlogSection />
    <JoinSection />
    <Footer />
  </S.Wrapper>
)

export default HomeTemplate
