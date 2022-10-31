import { useState } from 'react'
import Layout from '../../components/Layout'
import ListOfDocuments from '../../components/ListOfDocuments'
import Documents from '../Documents'
import * as S from './styles'

const Admin = () => {
  const [clicked, isClicked] = useState(false)
  return (
    <Layout title="Administração">
      {clicked == false ? (
        <S.LitsOfDocuments>
          <S.Documents>
            <ListOfDocuments
              documento="Documento 1"
              porcentagem="10%"
              onClick={() => isClicked(true)}
            />
            <ListOfDocuments
              documento="Documento 1"
              porcentagem="10%"
              onClick={() => isClicked(true)}
            />
          </S.Documents>
        </S.LitsOfDocuments>
      ) : (
        <Documents />
      )}
    </Layout>
  )
}

export default Admin
