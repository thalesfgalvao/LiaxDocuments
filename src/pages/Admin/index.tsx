import { useState } from 'react'
import Layout from '../../components/Layout'
import Documents from '../Documents'
import * as S from './styles'

const Admin = () => {
  const [clicked, isClicked] = useState(false)
  return (
    <Layout title="Administração">
      {clicked == false ? (
        <S.LitsOfDocuments>
          <S.Documents>
            <S.DocumentsDiv>
              <S.Documents>Configurar Documentos</S.Documents>
            </S.DocumentsDiv>

            <S.DocumentsDiv onClick={() => isClicked(true)}>
              <S.Documents>Documento 2</S.Documents>
              <S.Documents>17%</S.Documents>
            </S.DocumentsDiv>

            <S.DocumentsDiv>
              <S.Documents>Documento XPTO</S.Documents>
              <S.Documents>95%</S.Documents>
            </S.DocumentsDiv>
          </S.Documents>
        </S.LitsOfDocuments>
      ) : (
        <Documents />
      )}
    </Layout>
  )
}

export default Admin
