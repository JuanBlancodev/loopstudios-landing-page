import styled from 'styled-components'
import { getUrlImage } from '../helpers/getWidth'

const Wrapper = styled.article`
  height: 500px;

  @media (width > 720px){
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  width: 298px;
  height: 400px;
  overflow: hidden;
  margin-bottom: 50px;

  background: url(${props => props.image}) no-repeat center center/cover;

  @media (width > 720px){
    width: 600px;
    height: 400px;
  }
`

const InfoContainer = styled.div`
  text-align: center;
  max-width: 500px;
  @media (width > 720px){
    position: absolute;
    right: 0;
    bottom: 0;

    width: 510px;
    padding: 50px 0;
    padding-left: 60px;
    background-color: var(--color-white);
    text-align: left;

    h2{
      font-size: 3rem;
    }
  }

  @media (width > 1200px){
    right: 150px;
    bottom: 50px;
  }
`

const FeaturedArticle = () => {
  return (
    <Wrapper className='relative flex flex-column align-center'>
      <ImageContainer image={getUrlImage('image-interactive')} />
      <InfoContainer className="flex flex-column gap-2">
        <h2 className='black ff-primary fw-regular fs-xl uppercase'>The leader in interactive VR</h2>
        <p className='dark-gray ff-primary fw-bold fs-small'>
          Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.
        </p>
      </InfoContainer>
    </Wrapper>
  )
}

export default FeaturedArticle