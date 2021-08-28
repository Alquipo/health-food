import { renderHook } from '@testing-library/react-hooks'
import useStorage from '.'

const APP_KEY = 'HEALTHYFOOD'

const valuesMock = {
  address: '3333',
  birthDate: '1992-12-05',
  city: '333',
  cpf: '333.333.333-33',
  district: '3333',
  name: 'sadsa',
  number: '3333',
  state: 'RJ',
  zipCode: '33333-333'
}

describe('useStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return all information registered on localStorage', async () => {
    const { result } = renderHook(() => useStorage())

    result.current.setLocalStorage('signup-data', valuesMock)

    const data = window.localStorage.getItem(`${APP_KEY}_signup-data`)

    expect(JSON.parse(data)).toEqual(valuesMock)
  })

  it('should return all information registered on Cookie', async () => {
    const { result } = renderHook(() => useStorage())

    result.current.setCookie('signup-data', valuesMock, 5)

    const data = window.document.cookie

    if (data === `${APP_KEY}_signup-data`) {
      expect(JSON.parse(data)).toEqual(valuesMock)
    }
  })
})
