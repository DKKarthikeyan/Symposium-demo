

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar() {
  const [active, setActive] = useState('home');

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <nav className='mobileNavbarBox'>
      <div className='mobileNavbar'>
        <div
          onClick={() => handleClick('home')}
          className={active === 'home' ? 'mobileCircle' : ''}
        >
          <Link to={'/'}>
            <i className={`bi bi-house-door`} id={active === 'home' ? 'circle' : ''}></i>
          </Link>
          <p className='mobileNavText'>{active === 'home' ? 'Home' : ''}</p>
        </div>
        <div
          onClick={() => handleClick('workshop')}
          className={active === 'workshop' ? 'mobileCircle' : ''}
        >
          <Link to={'/workshops'}>
            <i className={`bi bi-tools`} id={active === 'workshop' ? 'circle' : ''}></i>
          </Link>
          <p className='mobileNavText' style={{marginLeft:"-3px",fontSize:"0.8rem",marginRight:'10px'}}>{active === 'workshop' ? 'Workshop' : ''}</p>
        </div>
        <div
          onClick={() => handleClick('events')}
          className={active === 'events' ? 'mobileCircle' : ''}
        >
          <Link to={'/events'}>
            <i className={`bi bi-journal-bookmark`} id={active === 'events' ? 'circle' : ''}></i>
          </Link>
          <p className='mobileNavText' style={{marginLeft:"1px"}}>{active === 'events' ? 'Events' : ''}</p>
        </div>
        <div
          onClick={() => handleClick('about')}
          className={active === 'about' ? 'mobileCircle' : ''}
        >
          <Link to={'/about'}>
            <i className={`bi bi-info-circle`} id={active === 'about' ? 'circle' : ''}></i>
          </Link>
          <p className='mobileNavText' style={{"marginLeft":"4px"}}>{active === 'about' ? 'About' : ''}</p>
        </div>
        <div
          onClick={() => handleClick('sponsors')}
          className={active === 'sponsors' ? 'mobileCircle' : ''}
        >
          <Link to={'/sponsors'}>
            <i className={`bi bi-cash-stack`} id={active === 'sponsors' ? 'circle' : ''}></i>
          </Link>
          <p className='mobileNavText' style={{"marginLeft":"-3px"}}>{active === 'sponsors' ? 'Sponsors' : ''}</p>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
