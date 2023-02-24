import React, {useState} from 'react'

const Navbar = () => {

  const [nav, setActiveNav] = useState('')

  const cellStyle = 'w-fit h-fit px-2 py-1 bg-transparent hover:cursor-pointer'
  const navStyle = 'text-black transform scale-125 transition duration-150 ease-in-out'

  return (
    <nav className="flex justify-center gap-10 text-4xl items-center absolute top-0 h-20 w-full uppercase text-gray-400 border-black border-b-2">

      <div id="logo" className="absolute top-0 left-0 border-black border-4 h-20 w-34 " >KILLMEINDUSTRIES</div>

      <div className={`${cellStyle} ${ nav === 'Club' ? navStyle : null }`} onClick={() => setActiveNav('Club')}>Club</div>
      <div className={`${cellStyle} ${ nav === 'Events' ? navStyle : null }`} onClick={() => setActiveNav('Events')}>Events</div>
      <div className={`${cellStyle} ${ nav === 'Residents' ? navStyle : null }`} onClick={() => setActiveNav('Residents')}>Residents</div>
      <div className={`${cellStyle} ${ nav === 'Gallery' ? navStyle : null }`} onClick={() => setActiveNav('Gallery')}>Gallery</div>

    </nav>
  )
}

export default Navbar
