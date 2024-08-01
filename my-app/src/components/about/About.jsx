import React from 'react'
import Back from '../common/Back'
import img from "../images/about.jpg"
import Heading from '../common/header/Heading'
import "./about.css"


 const About = () => {
  return (
    <>
    <section className='about'>
        <Back name="About Us" title="About Us- Who We Are?" cover={img}/>
        <div className="container flex mtop">
            <div className="left row">
                <Heading title="Our Story" subtitle="Check out our company story and work process" />
                <p>fgahxju uiikl truiik wtyz hook aaxx iuyy ewc oopik fdsfdghb koigfg fr skxjmnxuygff iurredc.</p>
                <button className='btn2'>
                More About Us
                </button>
            </div>
            <div className="right row">
            <img src='./immio.jpg' alt='' />
            </div>
        </div>
    </section>
    </>
  )
}

export default About