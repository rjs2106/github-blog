import {
  HeaderContainer,
  LeftContent,
  MiddleContent,
  RightContent,
} from './styles'

import logo from '../../assets/images/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftContent></LeftContent>
      <MiddleContent>
        <img src={logo} alt="Github Blog" />
      </MiddleContent>
      <RightContent></RightContent>
    </HeaderContainer>
  )
}
