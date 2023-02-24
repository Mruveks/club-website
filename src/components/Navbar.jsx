import React, {useState} from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [nav, setActiveNav] = useState('')

  const cellStyle = 'w-fit h-fit px-2 py-1 bg-transparent hover:cursor-pointer'
  const navStyle = 'transform scale-125 transition duration-150 ease-in-out text-red-400'

  return (
    <nav className="flex justify-center gap-10 text-4xl items-center fixed bg-green-600 top-0 h-20 w-full uppercase border-black border-b-2">

      <img src={logo} alt="logo" className="absolute top-2 left-2 h-16 "/>

      <div className={`${cellStyle} ${ nav === 'Club' ? navStyle : null }`} onClick={() => setActiveNav('Club')}>Club</div>
      <div className={`${cellStyle} ${ nav === 'Events' ? navStyle : null }`} onClick={() => setActiveNav('Events')}>Events</div>
      <div className={`${cellStyle} ${ nav === 'Residents' ? navStyle : null }`} onClick={() => setActiveNav('Residents')}>Residents</div>
      <div className={`${cellStyle} ${ nav === 'Gallery' ? navStyle : null }`} onClick={() => setActiveNav('Gallery')}>Gallery</div>

    </nav>
  )
}

export default Navbar
