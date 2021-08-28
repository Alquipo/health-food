import { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

import { Menu as MobileMenuIcon } from '@styled-icons/boxicons-regular'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  /* istanbul ignore next */
  function handleMobileMenu() {
    setIsOpen((state) => !state)
  }

  return (
    <S.Wrapper>
      <S.Logo>Healthy Food</S.Logo>

      <S.MenuNav isOpen={isOpen} aria-hidden={isOpen}>
        <S.MenuLink href="#">Healthy Recipes</S.MenuLink>
        <S.MenuLink href="#">Blog</S.MenuLink>
        <S.MenuLink href="#">Join</S.MenuLink>

        <Link href="/sign-up">
          <a>
            <S.Register>Register</S.Register>
          </a>
        </Link>
      </S.MenuNav>

      <S.MobileMenuButton onClick={handleMobileMenu}>
        <MobileMenuIcon size={40} aria-label="Open Menu" />
      </S.MobileMenuButton>
    </S.Wrapper>
  )
}
