import React from 'react'
import nprCollege from './assets/img/NPR College.png'
import Yuvasakthi from './assets/img/yuvaSakthi.jpeg'
import { useEffect } from 'react'


function About() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <h1 className='ps-5 mt-5 bigText fontOne'><i className='primaryColor'>/ </i>about</h1>
       <div className='container-lg pt-2 px-5 px-lg-0 about1'>
        <div className="row justify-content-between align-items-center">
          
            <div className="col-md-6 col-lg-6 px-4 px-md-0">
                <h2><i className='primaryColor'></i> Yuvasakthi-2025</h2>
                <h4 className='wordLimitAbout'>Join us at <i className='primaryColor'>NPR College of Engineering and Technology</i> for a vibrant national-level tech fest. Featuring diverse technical and non-technical events across various departments, immersive workshops like 3-D Modeling with AR/VR and Block Chain Technology, and <i className='primary Color'>special events</i> such as "Hack Horizon" and "Ideaclum." Exciting prizes, games, and food stalls await. Mark your calendars for <i className='primaryColor'>February 20-21</i>  and be part of this inspiring experience! <i className='primaryColor'>Register now!</i></h4>

            </div>

            <div className="col-md-6 col-lg-5 ps-md-4 ps-lg-0 px-lg-0 mt-4 mt-lg-0 d-flex justify-content-center">
                <div className='yuvaSakthiImage'><img src={Yuvasakthi} alt="" /></div>
                

            </div>
        </div>
    </div>
    <div className='container-lg mt-0 mt-lg-5 pt-3 pb-4  px-5 px-lg-0 about1 about2'>
        <div className="row justify-content-between align-items-center">

        <div className="col-md-6 col-lg-5 pe-md-4 pe-lg-0  d-flex justify-content-center">
                <div className='about1PlaceHolder'>
                  <img src={nprCollege}  />
                </div>
                
            </div>
          
            <div className="col-md-6 col-lg-6 px-4 px-md-0 pb-4 pb-lg-0 mt-4 mt-lg-0  ">
             
                <h2><i className='primaryColor'></i> NPR</h2>
                <h4 className='wordLimitAbout'>NPR College of Engineering & Technology is one of the <i className='primaryColor'>premier institutions</i> in South Tamil Nadu situated near <i className='primaryColor'>Natham</i> in the Dindigul District. The institution was established in <i className='primaryColor'>2008</i> by Titan Educational Trust with the exalted aim of uplifting rural students to excel in the field of Engineering and Technology. It is approved by <i className='primaryColor'>AICTE</i> and affiliated with <i className='primaryColor'>Anna University</i>, Chennai. The institution was Accredited by <i className='primaryColor'>NAAC</i> A Grade with <i className='primaryColor'>3.25 CGPA</i> in 2021 and received <i className='primaryColor'>Autonomous</i> status in 2023.</h4>
                <a href="https://www.nprcet.org/" target='/'><button type="button" class="mt-3 w-50 w-md-25 btn btn-outline-warning border-3">Visit Site</button></a>

            </div>

            
        </div>
    </div>
      
    </div>
  )
}

export default About