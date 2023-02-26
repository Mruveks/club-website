import React, {useState} from 'react'
import './App.css'
import Home from './components/Home'
import Events from './components/Events'
import Residents from './components/Residents'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import logo from './assets/logo.png'

function App() {

  const [nav, setActiveNav] = useState('Club')

  function handleNav(lastNav) {

    setActiveNav(lastNav)
    var slider = document.getElementById('slider')

    if (nav != lastNav) {
      if (nav === 'Residents' && lastNav === 'Club') {      
        slider.scrollLeft = slider.scrollLeft - 3840
      } else if (nav === 'Residents' && lastNav === 'Events') {      
        slider.scrollLeft = slider.scrollLeft - 1920
      } else if (nav === 'Residents' && lastNav === 'Gallery') {      
        slider.scrollLeft = slider.scrollLeft + 1920
      } else if (nav === 'Club' && lastNav === 'Events') {        
        slider.scrollLeft = slider.scrollLeft + 1920
      } else if (nav === 'Club' && lastNav === 'Residents') {      
        slider.scrollLeft = slider.scrollLeft + 3840
      } else if (nav === 'Club' && lastNav === 'Gallery') {      
        slider.scrollLeft = slider.scrollLeft + 5760
      } else if (nav === 'Events' && lastNav === 'Club') {     
        slider.scrollLeft = slider.scrollLeft - 1920
      } else if (nav === 'Events' && lastNav === 'Residents') {     
        slider.scrollLeft = slider.scrollLeft + 1920
      } else if (nav === 'Events' && lastNav === 'Gallery') {     
        slider.scrollLeft = slider.scrollLeft + 3840
      } else if (nav === 'Gallery' && lastNav === 'Club') {      
        slider.scrollLeft = slider.scrollLeft - 5760
      } else if (nav === 'Gallery' && lastNav === 'Events') {        
        slider.scrollLeft = slider.scrollLeft - 3840
      } else if (nav === 'Gallery' && lastNav === 'Residents') {       
        slider.scrollLeft = slider.scrollLeft - 1920
      }     
    }
  }
  
  const cellStyle = 'w-fit h-fit px-2 py-1 bg-transparent hover:cursor-pointer'
  const navStyle = 'transform scale-125 transition duration-150 ease-in-out text-red-400'

  return (
    <div className="bg-green-600 font-bold uppercase w-screen ">

      <nav className="flex justify-center gap-10 text-4xl items-center fixed bg-green-600 top-0 z-10 h-20 w-full border-black border-b-2">
        <img src={logo} alt="logo" className="absolute top-2 left-2 h-16 "/>
        <div className={`${cellStyle} ${nav === 'Club' ? navStyle : null}`} onClick={() => { handleNav('Club') }}>
          Club
        </div>
        <div className={`${cellStyle} ${nav === 'Events' ? navStyle : null}`} onClick={() => { handleNav('Events') }}>
          Events
        </div>
        <div className={`${cellStyle} ${nav === 'Residents' ? navStyle : null}`} onClick={() => { handleNav('Residents') }}>
          Residents
        </div>
        <div className={`${cellStyle} ${nav === 'Gallery' ? navStyle : null}`} onClick={() => { handleNav('Gallery') }}>
          Gallery
        </div>
      </nav>
      
      <div id="slider" className='flex overflow-x-scroll scroll scroll-smooth scrollbar-hide'>
        
        <Home />
        <Events />
        <Residents />
        <Gallery />
      </div>

      <Footer />
    </div>
  )
}

export default App
