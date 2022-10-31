import Menu from '../Menu'
import Navbar from '../Navbar'
import { IPageContentProps } from '../PageContent'
import * as S from './styles'

const Layout = ({ title, children }: IPageContentProps) => {
  return (
    <S.Wrapper>
      <Navbar welcomeMessage="Seja bem-vindo(a)!" />
      <Menu />
      <S.WrapperTitle>
        <S.Title>{title}</S.Title>
      </S.WrapperTitle>
      {children == null ? <></> : <S.Container>{children}</S.Container>}
    </S.Wrapper>
  )
}

export default Layout
