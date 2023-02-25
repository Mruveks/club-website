import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full text-4xl">
      
      <div id="socials" className="flex justify-center gap-10 h-20 items-center border-t-2 border-black">
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Soundcloud</div>
        <div>Bandcamp</div>
      </div>

      <div id="contact" className="flex justify-center gap-10 h-20 items-center border-t-2 border-black">
        <div>Info@club.com</div>
        <div>Telephone: +48 666 674 781</div>
        <div>Adress: Kiepury 8, 02-672 Warsaw, Poland</div>
      </div>

    </footer>
  )
}

export default Footer
