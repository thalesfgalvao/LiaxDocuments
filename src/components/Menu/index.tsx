import * as S from './styles'

const Menu = () => {
  return (
    <S.Wrapper>
      <S.DivItem to="/dashboard">Home</S.DivItem>
      <S.DivItem to="/admin">Administração</S.DivItem>
      <S.DivItem to="/valida">Valida</S.DivItem>
      <S.DivItem to="/documents">Exemplo Documento</S.DivItem>
    </S.Wrapper>
  )
}
export default Menu
