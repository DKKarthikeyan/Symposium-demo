import React from "react";
import '../assets/style/event3.css';
import styled from 'styled-components';

import img1 from '../assets/img/EEE/img1.jpg'
import img2 from '../assets/img/EEE/img2.jpg'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import QueryCard from "../Components/QueryCard";
function Eeetech(){
    const navigate = useNavigate();
    const contacts = [
      { name: " Dr. K. Rajesh ", number: " 9942305401" },
      { name: "Mr. J. Jeffry  ", number: "9442583263" },
     
      { name: "Mr. P. Keerthiga ", number: "9080474770" },
     
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
                                 <h2 className="title">&lt; Tech Fusion /&gt;</h2>
                                 <p className="description pb-3">
                                 Tech Fusion is a dynamic symposium where experts and innovators converge to
explore cutting-edge technologies and their integration across industries. It fosters
collaboration and discussion on the latest trends and future tech solutions.
                                 </p>
                                 <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/eee/fusion')} >Read More &lt;-&gt;</a>
                               </div>
                             </div>
                         
                         
                             <div className="event-container"> {/* Use class names from external CSS */}
                               <div className="image-side">
                               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                 <img className="event-image" src={img2} alt="Starlight Coding Event" />
                               </div>
                               <div className="text-side">
                                 <h2 className="title">&lt; Junkyard /&gt;</h2>
                                 <p className="description pb-3">
                                 Junkyard is an interactive symposium that challenges participants to repurpose
discarded tech materials into functional innovations. It emphasizes creativity, sustainability, and
hands-on problem-solving in a collaborative environment.
                                 </p>
                                 <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/eee/junkyard')}>Read More &lt;-&gt;</a>
                               </div>
                             </div>
                             <QueryCard contacts={contacts} />
        </>
    )
}
export default Eeetech;