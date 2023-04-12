import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Events from "./components/Events";
import Residents from "./components/Residents";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";

function App() {
  const [nav, setActiveNav] = useState("Club");

  function handleNav(lastNav) {
    setActiveNav(lastNav);
    const slider = document.getElementById("slider");
    const pageWidth = slider.clientWidth;
    let moveAmount = 0;

    if (nav !== lastNav) {
      if (nav === "Residents" && lastNav === "Club") {
        moveAmount = -pageWidth * 2;
      } else if (nav === "Residents" && lastNav === "Events") {
        moveAmount = -pageWidth;
      } else if (nav === "Residents" && lastNav === "Gallery") {
        moveAmount = pageWidth;
      } else if (nav === "Club" && lastNav === "Events") {
        moveAmount = pageWidth;
      } else if (nav === "Club" && lastNav === "Residents") {
        moveAmount = pageWidth * 2;
      } else if (nav === "Club" && lastNav === "Gallery") {
        moveAmount = pageWidth * 3;
      } else if (nav === "Events" && lastNav === "Club") {
        moveAmount = -pageWidth;
      } else if (nav === "Events" && lastNav === "Residents") {
        moveAmount = pageWidth;
      } else if (nav === "Events" && lastNav === "Gallery") {
        moveAmount = pageWidth * 2;
      } else if (nav === "Gallery" && lastNav === "Club") {
        moveAmount = -pageWidth * 3;
      } else if (nav === "Gallery" && lastNav === "Events") {
        moveAmount = -pageWidth * 2;
      } else if (nav === "Gallery" && lastNav === "Residents") {
        moveAmount = -pageWidth;
      }
    }

    slider.scrollLeft += moveAmount; // move the slider by the calculated amount
  }

  const cellStyle = "w-fit h-fit px-2 py-1 bg-transparent hover:cursor-pointer";
  const navStyle =
    "transform scale-125 transition duration-150 ease-in-out text-red-400";

  return (
    <div className="bg-green-600 h-fit font-bold uppercase w-screen ">
      <nav className="flex justify-center sm:gap-10 gap-2 sm:text-4xl text-lg items-center fixed bg-green-600 top-0 z-10 h-20 w-screen border-black border-b-2">
        <img
          src={logo}
          alt="logo"
          className="absolute top-2 left-2 h-16 sm:visible hidden"
        />
        <div
          className={`${cellStyle} ${nav === "Club" ? navStyle : null}`}
          onClick={() => {
            handleNav("Club");
          }}
        >
          Club
        </div>
        <div
          className={`${cellStyle} ${nav === "Events" ? navStyle : null}`}
          onClick={() => {
            handleNav("Events");
          }}
        >
          Events
        </div>
        <div
          className={`${cellStyle} ${nav === "Residents" ? navStyle : null}`}
          onClick={() => {
            handleNav("Residents");
          }}
        >
          Residents
        </div>
        <div
          className={`${cellStyle} ${nav === "Gallery" ? navStyle : null}`}
          onClick={() => {
            handleNav("Gallery");
          }}
        >
          Gallery
        </div>
      </nav>

      <div
        id="slider"
        className="flex h-auto overflow-x-hidden sm:overflow-x-scroll scroll scroll-smooth scrollbar-hide"
      >
        <Home />
        <Events />
        <Residents />
        <Gallery />
      </div>

      <Footer />
    </div>
  );
}

export default App;
