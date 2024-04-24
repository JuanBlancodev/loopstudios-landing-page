import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getUrlImage } from '../helpers/getWidth'

const Wrapper = styled.a`
  position: relative;
  width: 100%;
  height: 100px;
  background: url(${props => props.image}) no-repeat center center/cover;

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
`

const Title = styled.h3`
  width: 120px;
  position: absolute;
  left: 20px;
  bottom: 10px;

  transition: color 0.3s;
`

const Creation = ({ title, image, link }) => {
  return (
    <Wrapper image={getUrlImage(image)} href={link} className='decoration-none'>
      <Title className='white uppercase ff-primary fw-medium fs-large'>{ title }</Title>
    </Wrapper>
  )
}

Creation.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Creation