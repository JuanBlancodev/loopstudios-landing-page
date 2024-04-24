import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getUrlImage } from '../helpers/getWidth'
import ReactLoading from 'react-loading'

const Wrapper = styled.a`
  width: 100%;
  height: 100px;
  overflow: hidden;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &:hover{
    &::before{
      background-color: rgba( 229, 229, 229 , 0.6);
    }

    h3{
      color: black;
    }
  }

  @media (width > 720px){
    height: 500px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h3`
  width: 120px;
  position: absolute;
  left: 20px;
  bottom: 10px;

  transition: color 0.3s;
`

const Creation = ({ title, image, link }) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <Wrapper href={link} className='relative decoration-none flex align-center'>
      <Img src={getUrlImage(image)} alt={title.toLowerCase().replace(' ', '-')} onLoad={() => setImgLoaded(true)} />
      { !imgLoaded ? <ReactLoading 
          color='var(--color-dark-gray)' 
          width={40} height={40} 
          className='m-auto' 
          type='bars'
        /> : <Title className='white uppercase ff-primary fw-medium fs-large'>{ title }</Title>
      }
    </Wrapper>
  )
}

Creation.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Creation