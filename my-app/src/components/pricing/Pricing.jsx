import React from 'react'
import Back from '../common/Back'
import PriceCard from '../price/PriceCard'
import img from "../images/pricing.jpg"

 const Pricing = () => {
  return (
    <><section className='services mb'>
    <Back name="30 days Money back" title="No Extra Fee Friendly Support." cover={img}/>
    <div className="featured container"></div>
    <PriceCard/>
</section></>
  )
}

export default Pricing
