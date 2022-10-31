import * as S from './styles'

interface IListOfDocuments {
  documento: string
  porcentagem: string
}

const ListOfDocuments = ({ documento, porcentagem }: IListOfDocuments) => {
  return (
    <S.Wrapper>
      <S.Document>{documento}</S.Document>
      <S.Percent>{porcentagem}</S.Percent>
    </S.Wrapper>
  )
}

export default ListOfDocuments
