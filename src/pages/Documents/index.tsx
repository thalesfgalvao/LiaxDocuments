import Button from '../../components/DataEntry/Button'
import Input from '../../components/DataEntry/Input'
import Layout from '../../components/Layout'
import * as S from './styles'

const urlDownload =
  'https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf'

const Documents = () => {
  return (
    <>
      <S.Document src={urlDownload} />
      <S.Inputs>
        <Input
          type="text"
          title="Código do documento"
          placeholder="123456"
          percent="95%"
        />
        <Input
          type="date"
          title="Data"
          placeholder="dd/mm/aaaa"
          percent="85%"
        />
        <Input
          type="text"
          title="CNPJ"
          placeholder="00.0000.0000/0000-00"
          percent="90%"
        />
        <Input
          type="date"
          title="Vencimento"
          placeholder="dd/mm/aaaa"
          percent="90%"
        />
        <Button value="Alterar" />
      </S.Inputs>
    </>
  )
}

export default Documents
