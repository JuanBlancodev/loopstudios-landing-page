import { useState } from 'react'
import styled from 'styled-components'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getWidth from '../helpers/getWidth'

const Wrapper = styled.header`
  position: relative;
  with: 100%;
  height: 800px;
  
  display: grid;
  align-content: start;
  row-gap: 150px;

  padding: 35px 20px;

  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-positon: center;

  @media (width > 720px){
    grid-column: 1 / -1;
    height: 650px;
    background-size: cover;

    grid-template-columns: repeat(12, 1fr);
  }
`

const Navegation = styled.nav`
  grid-column: 2 / 12;
`

const Img = styled.img`
  width: 170px;
`

const Menu = styled.ul`
  list-style: none;

  display: flex;
  gap: 30px;
`

const MenuMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 35px 30px;
  background-color: var(--color-black);
  z-index: 1000;
`

const Title = styled.h1`
  grid-column: 2;
  padding: 25px 20px;
  border: 2px solid var(--color-white);

  font-size: 1.3rem;

  @media (width > 720px){
    width: 650px;
    font-size: 2rem;

    padding: 25px 30px;
  }
`

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  if(getWidth > 720 && menuOpened){
    setMenuOpened(false)
  }

  const toggleMenu = () => setMenuOpened(!menuOpened)

  return (
    <Wrapper url={`/${getWidth() < 720 ? 'mobile' : 'desktop'}/image-hero.webp`}>
      <Navegation className='flex justify-between align-center gap-4'>
        <Img src='/logo.svg' alt='' />
        { getWidth() < 720 ? 
          <FontAwesomeIcon icon={faBars} className='icon' onClick={toggleMenu} /> : (
          <Menu>
            <li>
              <a href='#' className='white ff-primary fs-medium decoration-none link'>About</a>
            </li>
            <li>
              <a href='#' className='white ff-primary fs-medium decoration-none link'>Carrers</a>
            </li>
            <li>
              <a href='#' className='white ff-primary fs-medium decoration-none link'>Events</a>
            </li>
            <li>
              <a href='#' className='white ff-primary fs-medium decoration-none link'>Products</a>
            </li>
            <li>
              <a href='#' className='white ff-primary fs-medium decoration-none link'>Support</a>
            </li>
          </Menu>
        ) }

        { menuOpened && <MenuMobile className='flex flex-column gap-10 align-start'>
          <div className='w-full flex align-center justify-between'>
            <Img src='/logo.svg' />
            <FontAwesomeIcon icon={faXmark} className='icon'  onClick={toggleMenu} />
          </div>

          <ul className='flex flex-column gap-2'>
            <li>
              <a href="#" className='dark-gray ff-secondary fw-regular fs-xxl decoration-none uppercase link'>About</a>
            </li>
            <li>
              <a href="#" className='dark-gray ff-secondary fw-regular fs-xxl decoration-none uppercase link'>Carrers</a>
            </li>
            <li>
              <a href="#" className='dark-gray ff-secondary fw-regular fs-xxl decoration-none uppercase link'>Events</a>
            </li>
            <li>
              <a href="#" className='dark-gray ff-secondary fw-regular fs-xxl decoration-none uppercase link'>Products</a>
            </li>
            <li>
              <a href="#" className='dark-gray ff-secondary fw-regular fs-xxl decoration-none uppercase link'>Support</a>
            </li>
          </ul>
        </MenuMobile> }
      </Navegation>

      <Title>
        <h1 className='uppercase ff-secondary fw-regular white'>
          Immersive experiences that deliver
        </h1>
      </Title>
    </Wrapper>
  )
}

export default Header