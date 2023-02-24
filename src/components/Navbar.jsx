import React, {useState} from 'react'

const Navbar = () => {

  const [nav, setActiveNav] = useState('')

  const cellStyle = 'w-fit h-fit px-2 py-1 bg-transparent hover:text-white hover:cursor-pointer'

  return (
    <nav className="flex justify-center gap-10 text-2xl items-center absolute top-0 h-20 w-full uppercase bg-green-400 text-black border-black border-b-4">

      <div id="logo" className="absolute top-0 left-0 border-black border-4 h-20 w-34 " >KILLMEINDUSTRIES</div>

      <div className={`${cellStyle} ${ nav === 'Club' ? 'transform scale-150 transition duration-150 ease-in-out' : null }`} onClick={() => setActiveNav('Club')}>Club</div>
      <div className={`${cellStyle} ${ nav === 'Events' ? 'transform scale-150 transition duration-150 ease-in-out' : null }`} onClick={() => setActiveNav('Events')}>Events</div>
      <div className={`${cellStyle} ${ nav === 'Residents' ? 'transform scale-150 transition duration-150 ease-in-out' : null }`} onClick={() => setActiveNav('Residents')}>Residents</div>
      <div className={`${cellStyle} ${ nav === 'Gallery' ? 'transform scale-150 transition duration-150 ease-in-out' : null }`} onClick={() => setActiveNav('Gallery')}>Gallery</div>

    </nav>
  )
}

export default Navbar
