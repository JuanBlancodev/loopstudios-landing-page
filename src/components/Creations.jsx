import styled from 'styled-components'
import { getWidth } from '../helpers/getWidth'
import BtnSeeAll from './BtnSeeAll'

const Wrapper = styled.article`

`

const Header = styled.header`
  @media (width > 720px){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Creations = () => {
  return (
    <Wrapper>
      <Header>
        <h2 className='uppercase ff-primary fw-medium fs-xl center'>Our creations</h2>
        { getWidth() > 720 && <BtnSeeAll /> }
      </Header>
    </Wrapper>
  )
}

export default Creations