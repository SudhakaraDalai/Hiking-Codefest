import React from 'react'
import "./hiking.css";
import mountain from "./images/shape_45.png"
import logo from "./images/logo.png"

function Hiking() {
  return (
    <div>
        <div className='sectionA'>
        <div class="logo">
        <img className='logo' src={logo} alt=''/>
        </div>
        <nav className='navbar'>
            <div className='navbar1'>
                <li tabIndex={"1"}>Home</li>
                <li tabIndex={"1"}>About</li>
                <li tabIndex={"1"}>Package</li>
                <li tabIndex={"1"}>Gallery</li>
                <li tabIndex={"1"}>Contacts</li>
            </div>
            <div>
                <input className='search' type={"text"} placeholder="search"/>
            </div>
        </nav>
        <div className='grid'>
            <div className='cardcontainer'>
                <div className='card'>
                    <div><p>*****</p></div>
                    <div><p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse temporibus eligendi voluptates corrupti voluptatibus labore quam quibusdam, repellendus maxime non cupiditate assumenda consequatur voluptas natus eveniet laboriosam ratione rem."</p>
                    <p>-QUOTES-</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='mountainimg' src={mountain} alt=''/>
                <h1 className='heading'>Hike more</h1>
                <p className='subheading'>----worry less----</p>
                <p className='para'><b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse temporibus eligendi voluptates corrupti voluptatibus labore quam quibusdam, repellendus maxime non cupiditate assumenda consequatur voluptas natus eveniet laboriosam ratione rem.</b></p>
                <button className='learnbtn'>Learn More</button>
            </div>
        </div>
        </div>
        <div className='sectionB'>
            <div>
                <p>1000+ Route. 1 Million hikers.<br/>
                Memorable Memories</p>
            </div>
            <div className='quetesBox'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse temporibus eligendi voluptates corrupti voluptatibus labore quam quibusdam, repellendus maxime non cupiditate assumenda consequatur voluptas natus eveniet laboriosam ratione rem.
            </div>
        </div>
        <div className='sectionC'>
            <h2 className='footerhead'>Choose Your level</h2>
            <div className='level'>
                <div>
                    <p className='userlevel'>Beginner</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse temporibus eligendi voluptates corrupti voluptatibus labore quam quibusdam, repellendus maxime non cupiditate assumenda consequatur</p>
                    <button className='footerbtn'>Learn More</button>
                </div>
                <div>
                <p className='userlevel'>Experienced</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse temporibus eligendi voluptates corrupti voluptatibus labore quam quibusdam, repellendus maxime non cupiditate assumenda consequatur</p>
                    <button className='footerbtn'>Learn More</button>
                </div>
                <div>
                <p className='userlevel'>Expert</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse temporibus eligendi voluptates corrupti voluptatibus labore quam quibusdam, repellendus maxime non cupiditate assumenda consequatur</p>
                    <button className='footerbtn'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hiking