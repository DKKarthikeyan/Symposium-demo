import React from "react";
import '../assets/style/event3.css';
import img1 from '../assets/img/MECH/img1.jpg'
import img2 from '../assets/img/MECH/img2.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function Mechtech(){
     const navigate = useNavigate();
     const contacts = [
      { name: "Mr.M. Prakash", number: "8667245872" },
      { name: "Mr. K. Shanmugapriyan", number: "9789300807" },
      { name: "Mr. M. Gokul", number: "9952893601" },
     
      // { name: "Ms. G. Dharshana", number: "6383431307" },
    ]
    return(
        <>
        <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>Events</h1>
                                             <div className="event-container"> {/* Use class names from external CSS */}
                                               <div className="image-side">
                                               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                                 <img className="event-image" src={img1} alt="Starlight Coding Event" />
                                               </div>
                                               <div className="text-side">
                                                 <h2 className="title">&lt; CAD Modeling /&gt;</h2>
                                                 <p className="description pb-3">
                                                 Design and create a 3D model using AutoCAD, SolidWorks, or CATIA within 60 minutes. Judged on creativity, accuracy, and presentation. Submit digital files and screenshots.
                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/mech/cad')} >Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                         
                                         
                                             <div className="event-container"> {/* Use class names from external CSS */}
                                               <div className="image-side">
                                               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                                 <img className="event-image" src={img2} alt="Starlight Coding Event" />
                                               </div>
                                               <div className="text-side">
                                                 <h2 className="title">&lt; JAM/&gt;</h2>
                                                 <p className="description pb-3">
                                                 Speak on an announced topic for one minute without hesitation, repetition, or deviation. Judged on fluency, creativity, and time management.
                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/mech/jam')}>Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                             <QueryCard contacts={contacts} /> 
                                   
        </>
    )
}
export default Mechtech;