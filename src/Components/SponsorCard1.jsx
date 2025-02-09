import React from 'react'

function SponsorCard1({sponsorName,sponsorDesc,sponsorLink,sponsorImage,sponsorCategory}) {
  return (
    <div className='container-lg mt-0 mt-lg-5 pt-3 pb-4 px-4 about1 '>
            <div className="row justify-content-between align-items-center">
    
           
              
                <div className="col-md-6 col-lg-6 px-4 px-md-0 pe-md-3  mt-4 mt-lg-0 ">
                    <h2><i className='primaryColor'>#</i> {sponsorName}</h2>
                    <h4 className='wordLimitAbout'>{sponsorDesc}</h4>
                    <a href={sponsorLink} target='/'><button type="button" class="mt-3 w-50 w-md-25 btn btn-outline-warning border-3">Read More &lt;~&gt;</button></a>
    
                </div>
                <div className="col-md-6 col-lg-5 border borderColor mt-3 mt-lg-0 p-4 d-flex flex-column align-items-center justify-content-center sponsorImage">
                    <div className='sponsorPlaceHolder'>
                      <img  src={sponsorImage}  />
                    </div>
                    <h5 className='mt-4'><i className='primaryColor'>// </i>{sponsorCategory}</h5>
                    
                </div>
    
                
            </div>
        </div>
  )
}

export default SponsorCard1