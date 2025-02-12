import React from 'react'
import Hero3Sponsor from '../Components/Hero3Sponsor'
import ATSImage from '../assets/img/Sponsors/ATSSponsor.jpg'
import RoamAiImage from '../assets/img/Sponsors/RoamAiSponsor.jpg'
import ReccsarImage from '../assets/img/Sponsors/ReccsarSponsor.jpg'
import GoogleImage from '../assets/img/Sponsors/Google.png'
import HCLImage from '../assets/img/Sponsors/HCL.png'
import TeslaImage from '../assets/img/Sponsors/Tesla.png'
import { Link } from 'react-router'




function Hero3() {
  return (
    <div className='container-md'>
      <div className='d-flex flex-wrap gap-4 justify-content-center sponsorFlex'>

          <Hero3Sponsor name="Title Sponsor" sponsorImage={RoamAiImage} sponsorName="ROAM Ai" link="https://www.roam.ai/" blurr="" /> 
          <Hero3Sponsor name="Events Sponsor" sponsorImage={ATSImage} sponsorName="Accent Techno Soft" link="https://www.accenttechnosoft.com/" blurr="" />         
          <Hero3Sponsor name="Technology Partner" sponsorImage={ReccsarImage} sponsorName="Reccsar" link="https://reccsar.com/" blurr="" />
          {/* <Hero3Sponsor name="??? partner" sponsorImage={GoogleImage} sponsorName="Yet to be Announced.." blurr="imageBlur" />
          <Hero3Sponsor name="??? Sponsor" sponsorImage={HCLImage} sponsorName="Yet to be Announced.." blurr="imageBlur" />
          <Hero3Sponsor name="??? Partner" sponsorImage={TeslaImage} sponsorName="Yet to be Announced.." blurr="imageBlur" /> */}

      </div>
     <Link to='/sponsors'><button type="button" class="mt-5 btn btn-outline-warning border-3 d-block mx-auto colorChange">Read More &lt;~&gt; </button></Link> 
  
         
</div>
  )
}

export default Hero3