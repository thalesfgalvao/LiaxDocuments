import * as S from './styles'

interface IButtonProps {
  value: string
}

const Button = ({ value }: IButtonProps) => {
  return (
    <S.Wrappeer>
      <S.Button>{value}</S.Button>
    </S.Wrappeer>
  )
}

export default Button
