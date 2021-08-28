import { render } from 'utils/test-utils'
import TextField from '.'

const fieldMock = {}
const metaMock = {}

jest.mock('formik', () => ({
  useField: jest.fn().mockImplementation(() => {
    return [fieldMock, metaMock]
  })
}))

describe('<TextField/>', () => {
  it('Renders with Label', () => {
    const { container } = render(<TextField label="test" name="Label" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
