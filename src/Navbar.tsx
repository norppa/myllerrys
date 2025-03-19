import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import './Navbar.css'

const DesktopNavbar = () => {

  return (
    <div className='Navbar'>
      <a id='logo' href='/'>Aitomäen Myllerrys</a>
      <div className='menu'>
        {/* <div className='dropdown'>
          <a href='#Info'>INFO</a>
          <div className='dropdown-content'>
            <a href='#Opetus'>Opetus</a>
            <a href='#Jamit'>Jamit</a>
            <a href='#MajoitusJaRuokailut'>Majoitus ja ruokailut</a>
            <a href='#Majoituspaketit'>Majoituspaketit</a>
            <a href='#Ilmoittautuminen'>Ilmoittaudu</a>
          </div>
        </div> */}

        {/* <div className='dropdown'>
          <a href='#Teachers'>MYLLERRYSTIIMI</a>
          <div className='dropdown-content'>
            <a href='#Jari'>Jari Haavisto</a>
            <a href='#Maiju'>Maiju Laurila</a>
            <a href='#Arttu'>Arttu Peltoniemi</a>
            <a href='#Mari'>Mari Solja</a>
          </div>
        </div> */}
        <a href='#Opetus'>Opetus</a>
        <a href='#Jamit'>Jamit</a>
        <a href='#MajoitusJaRuokailut'>Majoitus ja ruokailut</a>
        <a href='#Ilmoittautuminen'>ILMOITTAUDU</a>
      </div>
    </div>
  )

}

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const closeMenu = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.icon')) {
      setShowMenu(false)
    }
    document.removeEventListener('click', closeMenu, true)

  }

  const onMenuIconClick = () => {
    console.log('onMenuIconClick', showMenu)
    setShowMenu(!showMenu)
    document.addEventListener('click', closeMenu, true)
  }

  return (
    <div className='Navbar mobile'>
      <a id='logo' href='#Home'>Aitomäen Myllerrys</a>
      <HiMenu className='icon' onClick={onMenuIconClick} />
      {showMenu && <div className='menu'>

        <a href='#Info'>INFO</a>

        <a href='#Opetus'>Opetus</a>
        <a href='#Jamit'>Jamit</a>
        <a href='#MajoitusJaRuokailut'>Majoitus ja ruokailut</a>
        <a href='#Majoituspaketit'>Majoituspaketit</a>
        <a href='#Ilmoittautuminen'>Ilmoittaudu</a>
        <div className='spacer' />

        {/* <a href='#Teachers'>MYLLERRYSTIIMI</a>
        <a href='#Jari'>Jari Haavisto</a>
        <a href='#Maiju'>Maiju Laurila</a>
        <a href='#Arttu'>Arttu Peltoniemi</a>
        <a href='#Mari'>Mari Solja</a>
        <div className='spacer' /> */}

        <a href='#Ilmoittautuminen'>ILMOITTAUDU</a>
      </div>}
    </div>
  )
}

const Navbar = () => {
  return <>
    <DesktopNavbar />
    <MobileNavbar />
  </>
}

export default Navbar