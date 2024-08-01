import React from 'react'
import Heading from '../common/header/Heading'
import { team } from '../data/Data'
 const Team = () => {
  return (
    <>
    <section className='team background'>
        <div className='container'>
            <Heading title="Our Featured Agents" subtitle="You tyhbm puyt tuhnbkk Tkjlpo we qetybb ghjj tyuu ooopo fd ghjjn is ght thre go the opss."/>
        <div className="contet grid3 mtop">
            {team.map((val,index) => {
                return (<div className="box" key={index}>
                    <button className='btn3'>{val.list} Listings</button>
                    <div className="detals">
                        <div className="img">
                            <img src={val.cover} alt=""/>
                            <i className='fa fa-circle-check'></i>
                        </div>
                        <i className='fa fa-location-dot'></i>
                        <label htmlFor=''>{val.address}</label>
                        <h4>{val.name}</h4>
                        <ul>
                            {val.icon.map((icon,index)=>(
                                <li key={index}>{icon}</li>
            ))}
                        </ul>
                        <div className="button flex">
                            <button>
                                <i className='fa fa-envelope'></i>Message
                            </button>
                            <button className='btn4'>
                                <i className='fa fa-phone-alt'></i>
                            </button>
                        </div>
                    </div>
                </div>

                )
            })}
        </div>
        
        </div>
    </section>
    </>
  )
}

export default Team