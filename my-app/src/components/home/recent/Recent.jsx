import React from 'react'
import Heading from '../../common/header/Heading'
import RecentCard from './RecentCard'
import "./Recent.css"

 const Recent = () => {
  return (
    <>
    <section className='recent padding'>
    <div className="container">
     <Heading title='Recent Property Listed' subtitle='Select your sweet home in the listed property here. Enjoy your life in the way what ever you want.'/>   
       <RecentCard/> 
        
        </div>     
    </section>
    </>
  )
}

export default Recent