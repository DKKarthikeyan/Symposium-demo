
import React from 'react';

function EmailCard({ mailname }) {
  return (
    <div className="d-flex ps-4 mt-2 p-2 fs-5 border rounded-4 emailCard">
      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mailname}`} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none">
        <i className="bi bi-envelope-fill mailColor"></i>
        <div className="ps-2 text-white">{mailname}</div>
      </a>
    </div>
    
  );
}

export default EmailCard