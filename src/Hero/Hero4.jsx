import React from 'react'
import Dk1 from '../assets/img/Developers/karthiDK.jpg'
import KeerthiImage from '../assets/img/Developers/keerthi.jpg'
import Hero4Card from './Hero4Card'

function Hero4() {

  const DK={
    initial:"DK",
    name:"Karthikeyan",
    image:Dk1,
    linkedin:"https://www.linkedin.com/in/karthikeyan-dk-82a804285/"

  }
  const Keerthi={
    initial:"R",
    name:"Keerthiharan",
    image:KeerthiImage,
    linkedin:"https://www.linkedin.com/in/keerthiharanr/"

  }
  return (
    <div className='container-fluid p-3'>
      <div className='d-flex justify-content-around gap-4 developerWrap'>

        <Hero4Card person={DK}/>
        <Hero4Card person={Keerthi}/>
       
      

      </div>

        
     

    </div>
  )
}

export default Hero4