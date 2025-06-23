import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Banner from './Components/Banner/banner'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import {useEffect,useState} from "react"
const App=()=>{
  const [orderPopup, setOrderPopup]= useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(()=>{
     AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
     })
     AOS.refresh();
  })
  return(
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Banner />
    </div>
    </>
  )
}
export default App