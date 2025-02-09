import React from 'react'
import SponsorCard1 from './Components/SponsorCard1'
import SponsorCard2 from './Components/SponsorCard2'
import ATSImage from './assets/img/Sponsors/ATSSponsor.jpg'
import RoamAiImage from './assets/img/Sponsors/RoamAiSponsor.jpg'
import ReccsarImage from './assets/img/Sponsors/ReccsarSponsor.jpg'
import { useEffect } from 'react'



function Sponsors() {
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

  const ATS={
    name:"Accent Techno Soft",
    Category:"Title Sponsor",
    Link:"https://www.accenttechnosoft.com/",
    Desc:"Accent Techno Soft (ATS) provides a wide range of solutions in IT Consulting, technology and Operations space for our clients. To enhance the business value of our service offerings to our customers, we have formed strategic alliances with industry bodies, technologies vendors and system integrators. Through these partnerships we are able to deliver industry-best end –to-end solutions to our customers.",
    Image:ATSImage

  }
  const RoamAi={
    name:"ROAM Ai",
    Category:"Events Sponsor",
    Link:"https://www.roam.ai/",
    Desc:"Battery efficient, highly accurate, and reliable location solutions for mobile apps. With our SDK and APIs, unlock the potential of location technology and enhance your mobile app’s user experience. Experience a full and complete product range to suit your apps every needs. Customizable and tailored to your use case.",
    Image:RoamAiImage

  }
  const Reccsar={
    name:"Reccsar",
    Category:"Technology Partner",
    Link:"https://reccsar.com/",
    Desc:"Welcome to Reccsar, an esteemed training institute dedicated to empowering individuals and organizations to excel in the fast-evolving world of technology. As a frontrunner in the industry, Reccsar offers a diverse array of cutting-edge courses that transcend boundaries, driving economic transformations across the globe. ",
    Image:ReccsarImage,

  }

  return (
    <div>
      <h1 className='ps-5 mt-5 bigText fontOne'><i className='primaryColor'>/ </i>sponsors</h1>

      <SponsorCard1 sponsorName={RoamAi.name} sponsorCategory={RoamAi.Category} sponsorLink={RoamAi.Link} sponsorDesc={RoamAi.Desc} sponsorImage={RoamAi.Image}/>
      <SponsorCard2 sponsorName={ATS.name} sponsorCategory={ATS.Category} sponsorLink={ATS.Link} sponsorDesc={ATS.Desc} sponsorImage={ATS.Image}/>
      <SponsorCard1 sponsorName={Reccsar.name} sponsorCategory={Reccsar.Category} sponsorLink={Reccsar.Link} sponsorDesc={Reccsar.Desc} sponsorImage={Reccsar.Image}/>
     
      
    </div>
  )
}

export default Sponsors