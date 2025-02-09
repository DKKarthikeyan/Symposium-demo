import React from 'react'
import Logo from '../assets/img/yuvaSakthiLogo.png'

function Hero1() {
  return (
    <div className='container-lg px-2 d-flex justify-content-around align-items-center  hero1'>
        <div className="row justify-content-between align-items-center w-100">
            <div className="col-md-7 p-3  ">
                <h1 className='fontTwo fst-italic bigFont'>YUVASAKTHI' 25 </h1>
                <h1 className='fontTwo '><i className='goldColor'>"A National Level Tech Fest"</i></h1>
                <h6 className='mt-4 fs-5 fontTwo'>Navigating the Future, One Innovation at a Time</h6>
                <button type="button" class="mt-3 btn btn-outline-warning border-3 fontTwo"  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScw5hddu82bCWz8QV-Jtm0GrBmw1_NhurNzU-jMsVJ4uM7_RA/viewform", "_blank")}>Register Now!!</button>

            </div>
            <div className="col-md-5 mt-4 mt-sm-0 d-flex justify-content-center">
                <div className='hero1PlaceHolder'><img src={Logo} alt="" /></div>
                

            </div>
        </div>




    </div>
  )
}

export default Hero1