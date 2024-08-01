import React from 'react'
import Back from '../common/Back'
import img from '../images/services.jpg'
import FeaturedCard from '../home/featured/FeaturedCard'

const Services = () => {
  return (
    <>
    <section className='services mb'>
        <Back name="" title="" cover={img}/>
        <div className="featured container"></div>
        <FeaturedCard/>
    </section>
    </>
  )
}


export default Services