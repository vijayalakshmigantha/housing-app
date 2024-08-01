import React from 'react'
import "./Awards.css"
import Heading from '../../common/header/Heading'
import { awards } from '../../data/Data'

 const Awards = () => {
  return (
    <>
    <section className='awards padding'>
        <div className="container">
            <Heading title="More than 2,00,000+ coustomers happy with or services" subtitle="Our achievements"/>
            <div className="content grid4 mtop">
                {awards.map((val,index) => {
                  return (  <div className="box" key={index}>
                        <div className="icon">
                            <span>{val.icon}</span>
                        </div>
                        <h1>{val.num}</h1>
                        <p>{val.name}</p>
                    </div>
               ) })}
            </div>
        </div>
    </section>
    </>
  )
}


export default Awards