import React from 'react'

function Hero3Sponsor({name,sponsorImage,sponsorName,link,blurr}) {
  return (
   
     <div class="card text-center card3 sponsorCard ">
       
        <div class="card-header sponsorHead">
            {name}           
        </div>
        <div class="card-body sponsorBody">
        <a href={link} target='/' className='text-light'>
             <img src={sponsorImage} className={blurr}  />

             <p style={{"marginTop":"1rem"}}>{sponsorName}</p>
             </a>
        </div>
        </div>
   
  )
}

export default Hero3Sponsor