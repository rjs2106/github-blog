import { Profile } from './components/Profile'
import { Card } from './components/Card'

import {
  HomeContainer,
  CardsContainer,
  PostsContainer,
  SearchContainer,
} from './styles'

export const Home = () => {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <HomeContainer>
      <Profile />

      <PostsContainer>
        <SearchContainer>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo" />
        </SearchContainer>

        <CardsContainer>
          {cards.map((card) => (
            <Card key={card} />
          ))}
        </CardsContainer>
      </PostsContainer>
    </HomeContainer>
  )
}
