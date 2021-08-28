import { FormType } from '../../components/FormSignUp'
const APP_KEY = 'HEALTHYFOOD'

export default function useStorage() {
  function setLocalStorage(key: string, value: FormType) {
    // no Next via Server/Static não tem window
    /* istanbul ignore next */
    if (typeof window === 'undefined') return

    const data = JSON.stringify(value)
    return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
  }

  function setCookie(name: string, value: FormType, days: number) {
    // no Next via Server/Static não tem window
    /* istanbul ignore next */
    if (typeof window === 'undefined') return
    let expires = ''

    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }

    const data = JSON.stringify(value)

    return (window.document.cookie = `${APP_KEY}_${name} = ${
      data || ''
    } ${expires}; path=/`)
  }

  return { setLocalStorage, setCookie }
}
