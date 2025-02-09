import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/img/yuvaSakthiLogo.png'

function Hero2() {
  return (
    <div className='container-lg px-lg-1 hero2'>
        <div className="row w-100 justify-content-center align-items-center">

            <div className="col-md-6 d-flex justify-content-center">
                <div className='hero2PlaceHolder'><img src={Logo} alt="" /></div>

            </div>
            <div className="col-md-6 ">
                
                <h4 className='mt-4 wordLimit'>The <i className='primaryColor'>Yuvasakthi'2K25</i> is a national-level tech fest organized by NPR College of Engineering and Technology.
                     It features <i className='primaryColor'>technical</i>  and <i className='primaryColor'>non-technical</i> events across various departments
                     , including workshops on 3-D Modeling with AR/VR, Block Chain Technology,
                      and EV Retrofit. <i className='primaryColor'>Special events</i> like Hack Horizon and Ideaclum are also part of the fest.
                       Scheduled for <i className='primaryColor'>February 20-21</i>, it promises an exciting and enriching experience for participants.</h4>
                <Link to="/about"><button type="button" class="mt-3 btn btn-outline-warning border-3 colorChange ">Read More <i id='' class="bi bi-book-half "></i></button></Link>

            </div>
            
        </div>




    </div>
   
  )
}

export default Hero2