import React from 'react'
import ContactCard from '../Components/ContactCard'
import EmailCard from '../Components/EmailCard'

function Hero5() {
  return (
    <div className=' pb-5 mt-5 contactWrap' id='contactPage'>
      <div className='container-sm'>
         <div className='headingLine py-4'>
        <h3 ><i className='fw-bolder primaryColor'>#</i> Contacts</h3>
        <div className='line line2'></div>
        </div>

        <div className='row justify-content-around'>

          <div className="col-lg-5  ">

            <div className='hero5Border location p-3'>
              <h3 className='border-bottom  text-center '>Locate</h3>
              <iframe className='w-100 p-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.2385629292667!2d78.18326327454666!3d10.242333689875759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00abe47f72f82f%3A0x1364b27b67a87a67!2sNPR%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1738392942600!5m2!1sen!2sin"  height="450" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <p className=''>65RP+W8P, NPR Nagar, Natham, Dindigul, Tamil Nadu 624401</p>
            </div>

            <div className='mt-4 d-flex flex-column'>
              <h3 className='text-center'>Media</h3>
              <div className="mt-3  mx-auto fs-2 mediaIcons">
                <a href="https://www.instagram.com/npr_groupofinstitutions_offl/" target='/' className='greyColor'><i class="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/dr-m-karthigai-pandian-a9321020/" target='/' className='greyColor'><i class="bi bi-linkedin"></i></a>
                <a href="#contactPage" className='greyColor'><i class="bi bi-whatsapp"></i></a>
                <a href="https://www.facebook.com/nprinstitutions" target='/' className='greyColor'><i class="bi bi-facebook"></i></a>
              </div>
            </div>

          </div>
          <div className="col-lg-5  ">
            <div className='d-flex flex-column align-items-center justify-content-center mt-sm-4 mt-md-0 py-3 '>
            

              <h4 className='text-center'>Phone :-</h4>
              <div className="line line2 mx-auto "></div>
              <h4 className='pt-3'>Faculty Co-ordinators  &nbsp;<i class="bi bi-person-vcard"></i>  :</h4>
              <div className='line line1'></div>
             
              <ContactCard name="Mr.S.Nagamani" number="6383994849"/>
              <ContactCard name="Mr.P.Manivel Pandian" number="8778507858"/>

             
             

              <h4 className='mt-3'>Student Co-ordinators <i class="bi bi-person-arms-up"></i> :</h4>
              <div className='line line1'></div>
             
              <ContactCard name="Mr.R.Hariharan" number="6374150680"/>
              <ContactCard name="Ms.S.Sangeetha" number="8807188060"/>

          
             

            </div>
            

            
          </div>
         
        </div>


        <div className="row mt-5 justify-content-around">

          <div className="col-lg-5">
            <div class="hero5Border py-2 d-flex justify-content-center align-items-center mt-md-4 mt-lg-0 ">
                  <div class="form-container">
                      <h3 class="text-center">Send your Queries</h3>
                      <div className='line line1  mx-auto'></div>
                      <form className='mt-3'>
                          <div class="mb-3">
                              <input type="text" class="form-control w-100" placeholder="Name"/>
                          </div>
                          <div class="mb-3">
                              <input type="email" class="form-control" placeholder="Email"/>
                          </div>
                          <div class="mb-3">
                              <input type="text" class="form-control" placeholder="Title"/>
                          </div>
                          <div class="mb-3">
                              <textarea class="form-control" rows="4" placeholder="Message"></textarea>
                          </div>
                          <div class="text-center">
                              <button type="submit" class="btn btn-outline-warning border-2 text-white">Send &lt;~&gt;</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          
          <div className="col-lg-5  d-flex flex-column justify-content-center mt-4 mt-md-4 mt-lg-0">
            <div className='hero5Border p-4'>
                <h4 className='text-center '>Collaborate with us!</h4>
                <div className='line  mx-auto mb-3'></div>
                <EmailCard mailname="yuvasakthi@nprcolleges.org" />
                <EmailCard mailname="kalaranim@nprcolleges.org" />
                <h4 className='text-center mt-4 '>For Sponsorship enquiries :</h4>
                <div className='line   mx-auto mb-3'></div>
                <EmailCard mailname="yuvasakthi@nprcolleges.org" />
                <EmailCard mailname="kalaranim@nprcolleges.org" />
               
            </div>
            
       
          </div>

        </div>

      </div>

     

    </div>
  )
}

export default Hero5