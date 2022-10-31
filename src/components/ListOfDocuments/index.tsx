import * as S from './styles'

interface IListOfDocuments {
  documento: string
  porcentagem: string
  onClick?: () => void
}

const ListOfDocuments = ({
  documento,
  porcentagem,
  onClick
}: IListOfDocuments) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Document>{documento}</S.Document>
      ...
      <S.Percent>{porcentagem}</S.Percent>
    </S.Wrapper>
  )
}

export default ListOfDocuments
