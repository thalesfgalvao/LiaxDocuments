import Layout from '../../components/Layout'
import * as S from './styles'

const Admin = () => {
  return (
    <Layout title="Administração">
      <S.LitsOfDocuments>
        <S.Documents>
          <S.DocumentsDiv>
            <S.Documents>Configurar Documentos</S.Documents>
          </S.DocumentsDiv>

          <S.DocumentsDiv>
            <S.Documents>Documento 2</S.Documents>
            <S.Documents>17%</S.Documents>
          </S.DocumentsDiv>

          <S.DocumentsDiv>
            <S.Documents>Documento XPTO</S.Documents>
            <S.Documents>95%</S.Documents>
          </S.DocumentsDiv>
        </S.Documents>
      </S.LitsOfDocuments>
    </Layout>
  )
}

export default Admin
