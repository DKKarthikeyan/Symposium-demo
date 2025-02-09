import React from 'react'

function Hero4Card({person}) {
  return (
     <div className='developerShadow'>
              <div className='p-4 border developerBorder '>
    
              <div className='developerImage p-3'>
                <img src={person.image} alt="" />
              </div>
    
              <div className='pt-2'>
                <h3 className='mb-0'><i className='primaryColor'>{person.initial} </i>. {person.name}</h3>
                <p className='mb-2'>FinalYear - <i className='primaryColor'>CSE</i></p>
               <a href={person.linkedin} target='/'> <button className='btn btn-outline-warning border-4 developerButton'><i class="bi bi-linkedin"></i> LinkedIn</button></a>
              </div>
    
            </div>
            </div>
  )
}

export default Hero4Card