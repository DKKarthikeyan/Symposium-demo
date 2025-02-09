import React from 'react'
import Hero1 from './Hero/Hero1'
import Hero2 from './Hero/Hero2'
import Hero3 from './Hero/Hero3'
import Hero4 from './Hero/Hero4'
import Hero5 from './Hero/Hero5'
import Footer from './Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contactPage') {
      const element = document.getElementById('contactPage');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); 
  return (
    <section>
        
        <Hero1/>
        <div className='d-flex justify-content-end mb-3 hero1BoxWrap '>
          <div className='d-flex align-items-center border border-white p-2 hero1Box '>
            <div className='hero1ColorBox'></div>
            <div className='ms-1'>Innovate, Integrate, Inspire: YUVASAKTHI'25</div>
          </div>

        </div>
       
        <div className='headingLine py-5'>
        <h3 ><i className='fw-bolder primaryColor'></i> Yuvasakthi 2025</h3>
        <div className='line line1'></div>
        </div>
        
        <Hero2/>
        <div className='headingLine mt-5 py-4'>
        <h3 ><i className='fw-bolder primaryColor'></i> Sponsors</h3>
        <div className='line line2'></div>
        </div>
        <Hero3/>
        <div className='headingLine py-4'>
        <h3 ><i className='fw-bolder primaryColor'></i> Developers</h3>
        <div className='line line3'></div>
        </div>
        <Hero4/>


        <Hero5/>
       
        
        




    </section>
  )
}

export default Home