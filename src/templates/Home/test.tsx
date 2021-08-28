import { render, screen } from 'utils/test-utils'

import HomeTemplate from '.'

jest.mock('components/IntroductionSection', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock IntroductionSection"></div>
    }
  }
})

jest.mock('components/RecipeSection', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock RecipeSection"></div>
    }
  }
})

jest.mock('components/ServiceSection', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ServiceSection"></div>
    }
  }
})

jest.mock('components/BlogSection', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BlogSection"></div>
    }
  }
})

jest.mock('components/JoinSection', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock JoinSection"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<HomeTemplate />', () => {
  it('should render All section in Home', () => {
    render(<HomeTemplate />)

    expect(screen.getByTestId('Mock IntroductionSection')).toBeInTheDocument()
    expect(screen.getByTestId('Mock RecipeSection')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ServiceSection')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BlogSection')).toBeInTheDocument()
    expect(screen.getByTestId('Mock JoinSection')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
