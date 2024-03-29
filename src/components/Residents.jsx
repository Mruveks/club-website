import React from 'react'

const Residents = () => {

  const cellStyle = "grid items-center h-96 bg-cover hover:opacity-60  transition-colors duration-300 hover:text-white border-black"

  return (
    <table id="residents-page" className="flex flex-none w-screen text-center bg-yellow-600 top-0 text-5xl pt-20">

      <div id="column" className="w-[50%]">
        <div className={`${cellStyle} hover:bg-resident1 border-b-2`}>
          <header className="">Griessmuehle</header>
        </div>
        <div className={`${cellStyle} hover:bg-resident4 border-b-2`}>
          <header className="">Mauro Picotto</header>
        </div>
        <div className={`${cellStyle} hover:bg-resident7`}>
          <header className="">Casual Gabberz</header>
        </div>
      </div>

      <div id="column" className="w-[50%]">
      <div className={`${cellStyle} hover:bg-resident2 border-x-2 border-b-2`}>
          <header className="">Lea Ochi</header>
        </div>
        <div className={`${cellStyle} hover:bg-resident5 border-x-2  border-b-2`}>
          <header className="">Paul Elstak</header>
        </div>
        <div className={`${cellStyle} hover:bg-resident8 border-x-2`}>
          <header className="">Pawlowski</header>
        </div>
      </div>

      <div id="column" className="w-[50%]">
      <div className={`${cellStyle} hover:bg-resident3 border-b-2`}>
          <header className="">VTSS</header>
        </div>
        <div className={`${cellStyle} hover:bg-resident6 border-b-2`}>
          <header className="">Ascendant Vierge</header>
        </div>
        <div className={`${cellStyle} hover:bg-resident9`}>
          <header className="">The Empire Line</header>
        </div>
      </div>
    </table>
  )
}

export default Residents
