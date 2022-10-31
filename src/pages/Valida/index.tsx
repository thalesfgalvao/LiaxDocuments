import Layout from '../../components/Layout'
import ListOfDocuments from '../../components/ListOfDocuments'
import * as S from './styles'

const Valida = () => {
  return (
    <Layout title="Validação de documentos">
      <S.Container>
        <ListOfDocuments documento="Lorem Ipsum" porcentagem="95%" />
        <ListOfDocuments documento="Lorem Ipsum" porcentagem="95%" />
        <ListOfDocuments documento="Lorem Ipsum" porcentagem="95%" />
        <ListOfDocuments documento="Lorem Ipsum" porcentagem="95%" />
        <ListOfDocuments documento="Lorem Ipsum" porcentagem="95%" />
      </S.Container>
    </Layout>
  )
}

export default Valida
