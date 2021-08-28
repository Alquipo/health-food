import { fireEvent, render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import FormSignUp from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignUp />', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should render the form', () => {
    const { container } = render(<FormSignUp />)

    expect(screen.getByTestId(/name/i)).toBeInTheDocument()
    expect(screen.getByTestId(/birthDate/i)).toBeInTheDocument()
    expect(screen.getByTestId(/CPF/i)).toBeInTheDocument()
    expect(screen.getByTestId(/ZipCode/i)).toBeInTheDocument()
    expect(screen.getByTestId(/Address/i)).toBeInTheDocument()
    expect(screen.getByTestId(/number/i)).toBeInTheDocument()
    expect(screen.getByTestId(/District/i)).toBeInTheDocument()
    expect(screen.getByTestId(/City/i)).toBeInTheDocument()
    expect(screen.getByTestId(/State/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Confirm/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be accessible with tab', () => {
    render(<FormSignUp />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/name/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/birthDate/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/CPF/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/ZipCode/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/Address/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/number/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/District/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/City/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByTestId(/State/i)).toHaveFocus()
  })

  it('should handle submit button ', () => {
    render(<FormSignUp />)

    const handleSubmit = jest.fn()

    fireEvent.click(screen.getByLabelText(/Confirm/i))

    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
      jest.spyOn(window, 'alert')
    })
  })
})
