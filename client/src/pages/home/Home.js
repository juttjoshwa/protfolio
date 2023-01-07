import React, { useState } from 'react'
import "../home/Hero.css"
import Avatar from "../../asset/avatar.svg"
import hero_img from "../../asset/heroimg.gif"
import Navbar from '../../componet/navbar/Navbar'
import About from '../about/About'
import Skills from '../Skills/Skills'
import Link1 from '../link/Link1'
import Contact from '../contact/Contact'




const Home = () => {
  const [darkmode, setDarkMode] = useState("light")

  const toggleMode = () => {
    if (darkmode === "light") {
      setDarkMode("dark")
    }
    else {
      setDarkMode("light")
    }
  }




  const HeroTextColor = {
    color: "rgb(222, 225, 228)"
  }
  let HeroTextStyle;
  if (darkmode === "dark") {
    HeroTextStyle = HeroTextColor;
  }

  const DecodeColor = {
    color: "aliceblue"
  }
  let DecodeStyle;
  if (darkmode === "dark") {
    DecodeStyle = DecodeColor;
  }

  const darkcss = {
    background: "linear-gradient(to right, #6f598b, #978abe, #dfd5ed)",
  }

  let style;
  if (darkmode === "dark") {
    style = darkcss;
  }


  return (
    <>
      <Navbar mode={darkmode} toggleMode={toggleMode} />
      <div style={style} className={`container-fluid`}>
        <div style={style} className='row rowH'>
          <div className='Mcol1 col-6 my-5 '>
            <div >
              <img className='avatar' alt='Avatar' src={Avatar} />
            </div>
            <h1 style={DecodeStyle} className='decode' >DECODE</h1>
            <div>
              <h5 style={HeroTextStyle} className='hero-text'>I am a proficient MERN stack developer
                with a passion for crafting cutting-edge web applications
                that solve complex problems</h5>
            </div>
            <button type="button" className="btn btn-primary">place project</button>
          </div >
          <div className='Mcol2 col-6 '><img className='heroImg' src={hero_img} alt="hero_img" /></div>
        </div>
      </div>





      <Skills mode={darkmode} />
      <Contact mode = {darkmode} />
      <About />
      <Link1 />
    </>
  )
}

export default Home