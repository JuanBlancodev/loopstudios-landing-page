import { useState } from 'react'
import styled from 'styled-components'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getWidth, getUrlImage } from '../helpers/getWidth'

import Brand from './Brand'

const Wrapper = styled.header`
  position: relative;
  with: 100%;
  height: 800px;
  
  display: grid;
  align-content: start;
  row-gap: 150px;

  padding: 35px 20px;

  background: url(${props => props.url}) no-repeat center center/cover;

  grid-column: 1 / -1;
  @media (width > 720px){
    height: 650px;

    grid-template-columns: repeat(12, 1fr);
  }
`

const Navegation = styled.nav`
  grid-column: 2 / 12;
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

const Title = styled.div`
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
    <Wrapper url={getUrlImage('image-hero')}>
      <Navegation className='flex justify-between align-center gap-4'>
        <Brand />
        { getWidth() < 720 ? 
          <FontAwesomeIcon icon={faBars} className='icon' onClick={toggleMenu} /> : (
          <Menu className='list-none'>
            <li>
              <a href='#about' className='link'>About</a>
            </li>
            <li>
              <a href='#careers' className='link'>Careers</a>
            </li>
            <li>
              <a href='#events' className='link'>Events</a>
            </li>
            <li>
              <a href='#products' className='link'>Products</a>
            </li>
            <li>
              <a href='#support' className='link'>Support</a>
            </li>
          </Menu>
        ) }

        { menuOpened && <MenuMobile className='flex flex-column gap-7 align-start'>
          <div className='w-full flex align-center justify-between'>
            <Brand />
            <FontAwesomeIcon icon={faXmark} className='icon'  onClick={toggleMenu} />
          </div>

          <ul className='flex flex-column gap-2 list-none'>
            <li>
              <a href="#about" className='uppercase link mobile'>About</a>
            </li>
            <li>
              <a href="#careers" className='uppercase link mobile'>Careers</a>
            </li>
            <li>
              <a href="#events" className='uppercase link mobile'>Events</a>
            </li>
            <li>
              <a href="#products" className='uppercase link mobile'>Products</a>
            </li>
            <li>
              <a href="#support" className='uppercase link mobile'>Support</a>
            </li>
          </ul>
        </MenuMobile> }
      </Navegation>

      <Title>
        <h1 className='uppercase ff-primary fw-regular white'>
          Immersive experiences that deliver
        </h1>
      </Title>
    </Wrapper>
  )
}

export default Header