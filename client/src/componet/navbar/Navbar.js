import React from 'react'
import { Link } from 'react-router-dom'
import "./Img.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../navbar/Navbar.css"
import IMg from "../../componet/navbar/Img.css"
import Dark from "../../asset/dark.png"
import Light from "../../asset/Light.png"
import Avatar from "../../asset/avatar.svg"
import home_icon from "../../asset/Home_new.png"
import link_icon from "../../asset/link.png"
import submit_project from "../../asset/contract.png"
import AboutIcon from "../../asset/about.png"



const Navbar = (props) => {
  const darkcss = props.mode
  console.log(darkcss)
   

  const DecodeText = {
    color: "aliceblue"
  }
  let DecodeStyle;
  if (darkcss === "dark") {
    DecodeStyle = DecodeText;
  }

  const AvatarIcon = {
    filter: " invert(100%) brightness(150%) contrast(150%)"
  }
  let AvatarStyle;
  if (darkcss === "dark") {
    AvatarStyle = AvatarIcon;
  }

  const SubmitProject = {
    filter: "invert(100%) brightness(150%) contrast(150%)"
  };

  let SubmitProjectStyle;
  if (darkcss === "dark") {
    SubmitProjectStyle = SubmitProject;
  }

  const linkIcon = {
    filter: " invert(100%) brightness(150%) contrast(150%)"
  }

  let linkStyle;
  if (darkcss === "dark") {
    linkStyle = linkIcon;
  }


  const AboutIconColor = {
    filter: "invert(100%) brightness(150%) contrast(150%)"
  }
  let AboutIconStyle;
  if (darkcss === "dark") {
    AboutIconStyle = AboutIconColor;
  }

  const homeColor = {
    filter: "invert(100%) brightness(150%) contrast(150%)"
  }
  let homestyle;
  const navcolor = {
    backgroundColor: "rgb(44, 9, 62)",
  }
  if (darkcss === "dark") {
    homestyle = homeColor;
  }

  let navstyle;
  if (darkcss === "dark") {
    navstyle = navcolor;
  }

  const handleImg = () => {
    if (darkcss === "light") {
      return <img className='modeImg mb-2' src={Dark} style={IMg} alt="light mode" />
    }
    else {
      return <img className='modeImg mb-2'  src={Light} style={IMg} alt="dark mode" />
    }
  }
  return (
    <div>
      <nav style={navstyle} className={`navbar navbar-expand-lg`}>
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img className='brand ms-5 ' alt='Avatar' src={Avatar} />
            <div style={DecodeStyle} className='DECODE ms-5'>DECODE</div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-auto">
                <Link className="nav-link active" aria-current="page" to="/"><img style={homestyle} alt='home_icon' src={home_icon} /></Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="link"><img style={linkStyle} alt='link_icon' src={link_icon} /></Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="#"><img style={SubmitProjectStyle} alt='submit_project' src={submit_project} /></Link>
              </li>
              <li className="nav-item ms-auto">
                <Link className="nav-link" to="about"><img style={AboutIconStyle} alt='AboutIcon' src={AboutIcon} /></Link>
              </li>
            </ul>
            <div className={` form-check form-switch text-light`} >
              <input className="navToggle1 switch form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className=" lable form-check-label" htmlFor="flexSwitchCheckDefault">{handleImg()}</label>
            </div>
          </div>
        </div>
      </nav>

    </div>

  )
}

export default Navbar