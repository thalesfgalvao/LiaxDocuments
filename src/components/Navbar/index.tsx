import * as S from './styles'

interface NavbarProps {
  welcomeMessage: string
}

const Navbar = ({ welcomeMessage }: NavbarProps) => {
  return (
    <S.Wrapper>
      <S.Logo src="https://static.wixstatic.com/media/ac9e8a_423b31cbd94d4944a72a20a2b601f137~mv2.png/v1/fill/w_170,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20original.png" />
      <S.WelcomeText>{welcomeMessage}</S.WelcomeText>
    </S.Wrapper>
  )
}

export default Navbar
