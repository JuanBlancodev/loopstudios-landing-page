import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Brand from './Brand'

const Wrapper = styled.footer`
  grid-column: 1 / -1;
  width: 100%;

  flex-direction: column;
  align-items: center;

  padding: 50px;
  background-color: var(--color-black);

  @media (width > 940px){
    height: 150px;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 100px;
  }
`

const Principal = styled.section`
  @media (width > 940px){
    gap: 20px;
  }
`

const Menu = styled.ul`
  flex-direction: column;

  @media (width > 940px){
    flex-direction: row;
  }
`

const Social = styled.div`
  @media (width > 940px){
    a{
      font-size: 2px;
    }
  }
`

const Footer = () => {
  return (
    <Wrapper className='flex gap-2'>
      <Principal className='flex flex-column gap-2'>
        <Brand className='justify-self-start' />
        <Menu className='flex align-center gap-1 list-none ff-secondary fs-large'>
          <li>
            <a href="#about" className='link'>About</a>
          </li>
          <li>
            <a href="#careers" className='link'>Careers</a>
          </li>
          <li>
            <a href="#events" className='link'>Events</a>
          </li>
          <li>
            <a href="#products" className='link'>Products</a>
          </li>
          <li>
            <a href="#support" className='link'>Support</a>
          </li>
        </Menu>
      </Principal>
      <section className='flex flex-column align-center gap-1'>
        <Social className='flex gap-1 align-center'>
          <a href="#facebook">
            <FontAwesomeIcon icon={faFacebook} className='icon' />
          </a>
          <a href="#twitter">
            <FontAwesomeIcon icon={faTwitter} className='icon' />
          </a>
          <a href="#pinterest">
            <FontAwesomeIcon icon={faPinterest} className='icon' />
          </a>
          <a href="#instagram">
            <FontAwesomeIcon icon={faInstagram} className='icon' />
          </a>
        </Social>
        <p className='dark-gray ff-secondary fs-small nowrap'>
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </section>
    </Wrapper>
  )
}

export default Footer