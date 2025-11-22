"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import TestMe from "./components/Test";
import Skills from "./components/Skills";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mode = localStorage.getItem("mode");
    if (mode !== null) {
      setIsDarkMode(JSON.parse(mode) as boolean);
    }
    else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      console.log("in dark ", isDarkMode)
      // localStorage.setItem("mode", JSON.stringify(true))
      // console.log("in add dark mode")
    }
    else {
      document.documentElement.classList.remove("dark")
      console.log("in add light mode")
      // localStorage.setItem("mode", JSON.stringify(false))
      localStorage.theme = ''
    }
  }, [isDarkMode])


  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header></Header>
      <About></About>
      <Services />
      <Skills />
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
      {/* <TestMe/> */}
    </>
  );
}
