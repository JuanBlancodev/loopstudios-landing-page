import styled from 'styled-components'
import { getWidth } from '../helpers/getWidth'
import BtnSeeAll from './BtnSeeAll'
import Creation from './Creation'

const Wrapper = styled.article`

`

const Header = styled.header`
  @media (width > 720px){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Content = styled.div`
`

const creationsList = [
  {
    "id": 1,
    "title": "Deep earth",
    "image": "image-deep-earth",
    "link": "#deep-earth"
  },
  {
    "id": 2,
    "title": "Night arcade",
    "image": "image-night-arcade",
    "link": "#night-arcade"
  },
  {
    "id": 3,
    "title": "Soccer team VR",
    "image": "image-soccer-team",
    "link": "#soccer-team"
  },
  {
    "id": 4,
    "title": "The grid",
    "image": "image-grid",
    "link": "#the-grid"
  },
  {
    "id": 5,
    "title": "From up above VR",
    "image": "image-from-above",
    "link": "#from-up-above"
  },
  {
    "id": 6,
    "title": "Pocket borealis",
    "image": "image-pocket-borealis",
    "link": "#pocket-borealis"
  },
  {
    "id": 7,
    "title": "The curiosity",
    "image": "image-curiosity",
    "link": "#curiosity"
  },
  {
    "id": 8,
    "title": "Make it fisheye",
    "image": "image-fisheye",
    "link": "#make-it-fisheye"
  }
]

const Creations = () => {
  return (
    <Wrapper className='flex flex-column justify-center gap-5'>
      <Header>
        <h2 className='uppercase ff-primary fw-medium fs-xl center'>Our creations</h2>
        { getWidth() > 720 && <BtnSeeAll /> }
      </Header>

      <Content className='flex flex-column gap-2'>
        { creationsList.map(creation => (
          <Creation 
            key={creation.id} 
            title={creation.title} 
            image={creation.image} 
            link={creation.link} 
          />
        )) }
      </Content>
    </Wrapper>
  )
}

export default Creations