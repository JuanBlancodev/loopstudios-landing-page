import styled from 'styled-components'
import { getWidth } from '../helpers/getWidth'
import BtnSeeAll from './BtnSeeAll'
import Creation from './Creation'

const Header = styled.header`
  @media (width > 720px){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Content = styled.div`
  @media (width > 720px){
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
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
    <article className='flex flex-column gap-2'>
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
      { getWidth() < 720 && <div className='flex justify-center'>
        <BtnSeeAll />
      </div> }
    </article>
  )
}

export default Creations