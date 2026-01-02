
import './App.css'
import "./components/Intro/Intro"
import { useState,useEffect } from 'react'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Background from './components/Background/Background'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'

function App() {
  const [showIntro,setShowIntro]=useState(true)
  const [exitIntro,setExitIntro]=useState(false)

  useEffect(()=>{
    const exitTimer=setTimeout(()=>{
      setExitIntro(true)


    },4000)
    const timer=setTimeout(()=>{
      setShowIntro(false)
    },3000)
    return () =>{clearTimeout(timer)
      clearTimeout(exitTimer)
    };
    
  },[])
  
  return (
    <>
      <Background/>
      {showIntro &&  <Intro  exit={exitIntro}/>}
      {!showIntro && (
        <>
         <Navbar/>
         <Profile/>
         <About/>
         <Education/>
         <Skills/>
         <Projects/>
         <Contact/>
         <Footer/>
         
      
      
        </>
      )}

     
    </>
  )
}

export default App
