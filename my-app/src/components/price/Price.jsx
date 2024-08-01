import React from 'react'
import Heading from '../common/header/Heading'
import PriceCard from './PriceCard'
import "./price.css"
 const Price = () => {
  return (
    <>
    <section className='price padding'>
        <div className="container">
        <Heading title="Select Your Package" subtitle="ggyyu nhe as dit At obfrr gyuj he wkcdy ioo hggt. "/>
       <PriceCard/>
        </div>
    </section>
    </>
  )
}


export  default Price