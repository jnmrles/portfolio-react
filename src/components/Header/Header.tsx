import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import Curriculo from '../../assets/CV_JoaoTulio.pdf'
// import { createReadStream } from 'fs'
export function Header() {
  const [isActive, setActive] = useState(false)
  const [isToggled, setToggle] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light');

    let title = document.getElementById("services");

    let card = [document.getElementsByClassName('card')]

    console.log("isToggled", isToggled)
    if(isToggled){

     console.log( title?.classList.remove('text-black'))

    }
    else{
      title?.classList.add("text-black");

     for(let i = 0; card.length -1 ;i++){
       let elem = card[i]
       console.log(elem)
     }


    }

    setToggle(!isToggled)

  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span id="jm">JM</span>
          <span>.Dev</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#sobre" onClick={closeMenu}>
            Services
          </NavHashLink>
          <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
            Portfolio
          </NavHashLink>
          {/* <NavHashLink smooth to="#contato" onClick={closeMenu}>
            Contato
          </NavHashLink> */}
          <a href={Curriculo} download className="button">
            CV
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close Menu' : 'open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
