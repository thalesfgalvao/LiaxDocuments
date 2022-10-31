import * as S from './styles'

interface IInputProps {
  placeholder: string
  disabled?: boolean
  title: string
  type: string
  percent?: string
  //eslint-disable-next-line
}

const Input = ({
  title,
  placeholder,
  disabled,
  type,
  percent
}: IInputProps) => {
  return (
    <S.Wrapper>
      <S.Small>{title}</S.Small>
      <S.Test>
        <S.Input placeholder={placeholder} disabled={disabled} type={type} />
        <S.Small>{percent}</S.Small>
      </S.Test>
    </S.Wrapper>
  )
}

export default Input
