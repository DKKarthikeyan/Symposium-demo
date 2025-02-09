import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = '/#contactPage';
    // Or for smoother scrolling:
    document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className='container-fluid d-flex justify-content-between navbar'>
       <div className='d-flex justify-content-center align-items-end'>
       
        <h4 className='text-white fontOne m-3 ps-4'>YUVASAKTHI <i className='primaryColor'>' </i>&nbsp;25</h4>

       </div>

       <div className='desktopMenu'>
      
        <a href="" className='navHover '><Link to={'/'}><i className='navHash'></i><i className='navTitle '>Home</i></Link></a>
        <a href="" className='navHover'><Link to={'/about'}><i className='navHash'></i><i className='navTitle'>About</i></Link></a>
        <a href="" className='navHover'><Link to={'/sponsors'}><i className='navHash'></i><i className='navTitle'>Sponsors</i></Link></a>
        <a href="" className='navHover'><Link to={'/events'}><i className='navHash'></i><i className='navTitle'>Events</i></Link></a>
        <a href="" className='navHover'><Link to={'/workshops'}><i className='navHash'></i><i className='navTitle'>Workshops</i></Link></a>
        <a href="/#contactPage" className='navHover' onClick={handleContactClick}><i className='navHash'></i><i className='navTitle'>Contact</i></a>
        
       </div>
        

    </nav>
  )
}

export default Navbar