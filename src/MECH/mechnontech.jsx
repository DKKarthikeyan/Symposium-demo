import React from "react";
import '../assets/style/event3.css';

import img3 from '../assets/img/MECH/img3.jpg'
import img4 from '../assets/img/MECH/img4.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function Mechnontech(){
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
                                         <img className="event-image" src={img3} alt="Starlight Coding Event" />
                                       </div>
                                       <div className="text-side">
                                         <h2 className="title">&lt; Treasure Hunt /&gt;</h2>
                                         <p className="description pb-3">
                                         Teams of 3-5 members solve clues hidden around the campus. The team that solves all clues fastest wins. The event includes two rounds: Prelims & Finals.
                                         </p>
                                         <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/mech/hunt')} >Read More &lt;-&gt;</a>
                                       </div>
                                     </div>
                                 
                                 
                                     <div className="event-container"> {/* Use class names from external CSS */}
                                       <div className="image-side">
                                       <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                         <img className="event-image" src={img4} alt="Starlight Coding Event" />
                                       </div>
                                       <div className="text-side">
                                         <h2 className="title">&lt; Lights Camera Action /&gt;</h2>
                                         <p className="description pb-3">
                                         A live performance event where teams of 4-6 members present their creativity with props they manage themselves, adhering to a given theme. Judged on creativity, teamwork, and theme adherence.
                                         </p>
                                         <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/mech/action')}>Read More &lt;-&gt;</a>
                                       </div>
                                     </div>
                                     <QueryCard contacts={contacts} /> 
                                    
        </>
    )
}
export default Mechnontech;