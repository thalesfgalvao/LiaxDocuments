import Layout from '../../components/Layout'
import Documents from '../Documents'
import * as S from './styles'

const handleClick = () => {
  return <Documents />
}

const Admin = () => {
  return (
    <Layout title="Administração">
      <S.LitsOfDocuments>
        <S.Documents>
          <S.DocumentsDiv>
            <S.Documents>Configurar Documentos</S.Documents>
          </S.DocumentsDiv>

          <S.DocumentsDiv onClick={() => handleClick}>
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
