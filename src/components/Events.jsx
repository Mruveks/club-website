import React from 'react'

const Events = () => {

  const eventStyle = "border-b-2 border-black p-10 hover:bg-red-400 h-full"
  const rectangleStyle_1 = "pl-60 h-20 w-20 border-black border-4 rotate-45 transform origin-bottom-left"
  
  return (
    <div className="flex w-screen bg-red-600 flex-none top-0 border-x border-black text-4xl text-center pt-20">

      <div className="flex flex-col w-[70%] border-r-2 border-black">

        <div className={`${eventStyle}`}>
          <p>Friday 3-3</p>
          <p>PAXXX W/ YONTI, MKO, PAWEL / MATRIX3K, KURIOZUM:</p>
        </div>
        <div className={`${eventStyle}`}>
          <p>SATURDAY 4—3</p>
          <p>COURTESY, CYRYL / ARTUR8, DD B2B PITTI SCHMITTI:</p>
        </div>
        <div className={`${eventStyle}`}>
          <p>FRIDAY 10—3</p> 
          <p>EUNIC NOC KOBIET — WEEKENDER</p>
          <p>FRI: BTFL, EVA GEIST, MARIE PRAVDA, MAJLI, PIKKAUCH, YANA ETC / SAT: CONNY FRISCHAUF, ELENA SIZOVA, EMILY JEANNE, MVRIA, OLA TEKS</p>
        </div>
        <div className={`${eventStyle}`}>
          <p>SATURDAY 11—3</p>
          <p>Mødule Pres. P.E.A.R.L. and Scalameriya</p>
          Sunday chãos. #1 - Bardzo Bardzo
        </div>
        <div className={`${eventStyle}`}>
          <p>Friday 17—3</p>
          <p>Antigone b2b Shlømo</p>
        </div>
        <div className={`${eventStyle} border-b-0`}>
          <p>SATURDAY 18—3</p>
          <p>Saturday chãos. #1 - Bardzo Bardzo</p>
          <p>Truant, Phil Jensky, internal explorer, absvrd</p>
        </div> 
      </div>

      <div className="w-[30%] border-black">
      <div class="inline-block">
          <div class={` ${rectangleStyle_1} bg-green-600`}></div>
          <div class={`${rectangleStyle_1} bg-blue-600`}></div>
          <div class={`${rectangleStyle_1} bg-red-600`}></div>
          <div class={`${rectangleStyle_1} bg-yellow-600`}></div>
          <div class={`${rectangleStyle_1} bg-green-600`}></div>
          <div class={`${rectangleStyle_1} bg-blue-600`}></div>
          <div class={`${rectangleStyle_1} bg-red-600`}></div>
          <div class={`${rectangleStyle_1} bg-yellow-600`}></div>
          <div class={`${rectangleStyle_1} bg-green-600`}></div>
          <div class={`${rectangleStyle_1} bg-blue-600`}></div>
          <div class={`${rectangleStyle_1} bg-red-600`}></div>
          <div class={`${rectangleStyle_1} bg-yellow-600`}></div>
      </div>
      </div>
          
    </div>
  )
}

export default Events
