import React from 'react'

function ContactCard({name,number}) {
  return (
    <div className='d-flex mt-3 justify-content-between align-items-center p-3 border border-rounded border-light contactCard'>
        <div>
            <h4>{name}</h4>
            <div>+91 {number}</div>
        </div>
        <a  href={`tel:+91${number}`} className='bg-light phoneIcon'>
        <i class="bi bi-telephone-fill "></i>

        </a>
       
        
    </div>
  )
}

export default ContactCard