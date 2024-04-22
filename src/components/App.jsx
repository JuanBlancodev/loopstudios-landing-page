import styled from 'styled-components'
import Header from './Header'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  @media (width > 720px){
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`

const Content = styled.div`
  grid-column: 2 / 12;
`

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Content>

      </Content>
    </Wrapper>
  )
}

export default App