import * as S from './styles'

export interface IPageContentProps {
  title: string
  children?: React.ReactNode
}
const PageContent = ({ title, children }: IPageContentProps) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <S.Title>{title}</S.Title>
      </S.WrapperTitle>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default PageContent
