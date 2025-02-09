import React from "react";
import '../assets/style/event3.css';

import img3 from '../assets/img/EEE/img3.jpg'
import img4 from '../assets/img/EEE/img4.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";


function Eeenontech(){
     const navigate = useNavigate();
     const contacts = [
      { name: " Dr. K. Rajesh ", number: " 9942305401" },
      { name: "Mr. J. Jeffry  ", number: "9442583263" },
     
      { name: "Mr. P. Keerthiga ", number: "9080474770" },
     
      // { name: "Ms. G. Dharshana", number: "6383431307" },
    ];
    return(
        <>
        <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>Events</h1>
                     <div className="event-container"> {/* Use class names from external CSS */}
                       <div className="image-side">
                       <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                         <img className="event-image" src={img3} alt="Starlight Coding Event" />
                       </div>
                       <div className="text-side">
                         <h2 className="title">&lt; War Fashion Show /&gt;</h2>
                         <p className="description pb-3">
                         A lively event where participants showcase creative fashion designs, often
based on themed contrasts or &quot;wars&quot; of style. It’s a fun, competitive runway show highlighting
emerging designers and unique fashion statements.
                         </p>
                         <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/eee/fashion')} >Read More &lt;-&gt;</a>
                       </div>
                     </div>
                 
                 
                     <div className="event-container"> {/* Use class names from external CSS */}
                       <div className="image-side">
                       <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                         <img className="event-image" src={img4} alt="Starlight Coding Event" />
                       </div>
                       <div className="text-side">
                         <h2 className="title">&lt; Reels Mania /&gt;</h2>
                         <p className="description pb-3">
                         A fun, interactive event where participants create and showcase short, engaging
video content (reels). It celebrates creativity with challenges like comedy, dance, and talent,
with audience interaction and prizes for the most original entries.
                         </p>
                         <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/eee/reels')}>Read More &lt;-&gt;</a>
                       </div>
                     </div>
                    
                     <QueryCard contacts={contacts} />      
        </>
    )
}
export default Eeenontech;