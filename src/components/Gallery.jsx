import React from "react";
import club1 from "../assets/club1.jpg";
import club2 from "../assets/club2.jpg";
import club3 from "../assets/club3.jpg";
import club4 from "../assets/club4.jpg";
import club5 from "../assets/club5.jpg";
import club7 from "../assets/club7.jpg";
import club8 from "../assets/club8.jpg";
import club9 from "../assets/club9.jpg";
import club10 from "../assets/club10.jpg";
import club11 from "../assets/club11.jpg";
import club12 from "../assets/club12.jpg";
import club13 from "../assets/club13.jpg";
import club14 from "../assets/club14.jpg";

const Gallery = () => {
  const imgStyle =
    "grayscale hover:grayscale-0 transition duration-300 w-96 border-transparent border-r-4 border-b-4 rounded-lg shadow-white";

  return (
    <div
      id="gallery-page"
      className="flex w-screen bg-black flex-none top-0 text-4xl text-center pt-20"
    >
      <div className="flex flex-col justify-between">
        <img src={club1} alt="cloud" className={`${imgStyle}`} />
        <img src={club2} alt="cloud" className={`${imgStyle}`} />
        <img src={club10} alt="cloud" className={`${imgStyle}`} />
      </div>
      <div className="flex flex-col justify-between">
        <img src={club4} alt="cloud" className={`${imgStyle}`} />
        <img src={club5} alt="cloud" className={`${imgStyle}`} />
        <img src={club3} alt="cloud" className={`${imgStyle}`} />
      </div>
      <div className="flex flex-col justify-between">
        <img src={club7} alt="cloud" className={`${imgStyle}`} />
        <img src={club8} alt="cloud" className={`${imgStyle}`} />
        <img src={club9} alt="cloud" className={`${imgStyle}`} />
      </div>

      <div className="flex flex-col h-full justify-between">
        <img src={club3} alt="cloud" className={`${imgStyle}`} />
        <img src={club14} alt="cloud" className={`${imgStyle}`} />
        <img src={club13} alt="cloud" className={`${imgStyle}`} />
      </div>
      <div className="flex flex-col justify-between">
        <img src={club14} alt="cloud" className={`${imgStyle}`} />
        <img src={club12} alt="cloud" className={`${imgStyle}`} />
        <img src={club11} alt="cloud" className={`${imgStyle}`} />
        <img src={club2} alt="cloud" className={`${imgStyle}`} />
      </div>
    </div>
  );
};

export default Gallery;
