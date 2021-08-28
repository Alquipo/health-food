import * as S from './styles'

import IntroductionSection from '../../components/IntroductionSection'
import ServiceSection from '../../components/ServiceSection'
import RecipeSection from '../../components/RecipeSection'
import BlogSection from '../../components/BlogSection'
import JoinSection from '../../components/JoinSection'
import Footer from '../../components/Footer'

const HomeTemplate = () => (
  <S.Wrapper>
    <IntroductionSection />
    <RecipeSection />
    <ServiceSection />
    <BlogSection />
    <JoinSection />
    <Footer />
  </S.Wrapper>
)

export default HomeTemplate
