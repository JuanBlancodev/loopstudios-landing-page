import styled from 'styled-components'
import Header from './Header'
import FeaturedArticle from './FeaturedArticle'
import Creations from './Creations'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const Content = styled.main`
  grid-column: 2 / 12;
  margin: 100px 0;
`

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Content className='flex flex-column gap-6'>
        <FeaturedArticle />
        <Creations />
      </Content>
    </Wrapper>
  )
}

export default App