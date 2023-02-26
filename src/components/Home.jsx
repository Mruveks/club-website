import React from 'react'

const Home = () => {

  const style = "p-10 border-black border-b-2"

  return (
    <div className="flex w-screen flex-none top-0 border-x border-black text-4xl text-center pt-20">

      <div className="flex flex-col w-[50%] border-r-2 border-black">
        <div className={`${style}`}>
          <header className="rounded-xl bg-black mx-auto text-green-600 w-fit p-2 text-xl">TONIGHT</header>
          <p>Friday 24-2</p>
          <p className="capitalize">inner tension w dasha rush aksamit blazej malinowski anna borsuk ola teks</p>
          <p className="">sʞǝʇ ɐlo ʞnsɹoq ɐuuɐ ıʞsʍouılɐɯ ɾǝzɐlq ʇıɯɐsʞɐ ɥsnɹ ɐɥsɐp ʍ uoısuǝʇ ɹǝuuı</p>
        </div> 
      </div>
      <div className="flex flex-col w-[25%] border-r-2 border-black">

        <div className={`${style}`}>
          <header className="rounded-xl border-black border-2 mx-auto w-fit p-2 text-xl">THIS WEEK</header>
          <p>Saturday 25-2</p>
          <p>SHADOWS: VIL, CRAVO</p>
          <p>MKO / CRACKD, WENCEL</p>
        </div>
        <div className={`${style}`}>
          <header className="rounded-xl border-black border-2 mx-auto text-whtie w-fit p-2 text-xl">NEXT WEEK</header>
          <p>Saturday 25-2</p>
          <p>SHADOWS: VIL, CRAVO</p>
          <p>MKO / CRACKD, WENCEL</p>
        </div>
        <div className={`${style}`}>
          <header className="rounded-xl border-black border-2 mx-auto w-fit p-2 text-xl">NEXT WEEK</header>
          <p>Saturday 25-2</p>
          <p>SHADOWS: VIL, CRAVO</p>
          <p>MKO / CRACKD, WENCEL</p>
        </div>
        <div className='my-auto'>
          <header>view All events</header>
        </div>
      </div>
      <div className="flex flex-col w-[25%]">

        <div className={`${style}`}>
          <p>ELECTRONIC MUSIC VENUE FOR ALL HUMAN BEINGS. FOREVER THE BRIGHT SIDE OF THE NIGHT.</p> 
        </div>
        <div className="grid">
          <p className={`${style}`}>Facebook</p>
          <p className={`${style}`}>Instagram</p>
          <p className={`${style}`}>House Rules</p>
        </div>
        
      </div>
          
    </div>
  )
}

export default Home
