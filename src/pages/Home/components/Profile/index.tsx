import {
  Content,
  Description,
  Header,
  Social,
  Photo,
  ProfileContainer,
} from './styles'

import image from '../../../../assets/images/profile.jpeg'
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'

export const Profile = () => {
  return (
    <ProfileContainer>
      <Photo>
        <img src={image} alt="Profile Photo" />
      </Photo>

      <Content>
        <Header>
          <h1>Rodrigo Santos</h1>
          <button>
            <span>Github</span>
            <ArrowSquareUpRight size={16} />
          </button>
        </Header>

        <Description>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass quam dignissim aenean malesuada suscipit.
            Nunc, volutpat pulvinar. quam dignissim aenean malesuada suscipit.
            Nunc, volutpat pulvinar.
          </p>
        </Description>

        <Social>
          <div>
            <GithubLogo size={16} weight="duotone" />
            <span>rodrigo.santos</span>
          </div>

          <div>
            <Buildings size={16} weight="duotone" />
            <span>Gympass</span>
          </div>

          <div>
            <Users size={16} weight="duotone" />
            <span>200 seguidores</span>
          </div>
        </Social>
      </Content>
    </ProfileContainer>
  )
}
