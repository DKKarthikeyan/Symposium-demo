import React from "react";
import '../assets/style/event3.css';


import img1 from '../assets/img/SH/img1.jpg'
import img2 from '../assets/img/SH/img2.jpg'
import { useNavigate } from "react-router-dom";

import QueryCard from "../Components/QueryCard";


function Shtech(){
    const navigate = useNavigate();
    const contacts = [
      { name: "Dr. V. Vijayanarayanan", number: "8148107008" },
      { name: "Mr. R. Ragland Rajkumar ", number: "7904427680" },
      { name: "Mr. S. Maris Yukeshwaran ", number: "9843078788" },
     
      { name: "Ms. G. Dharshana", number: "6383431307" },
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
                                                 <h2 className="title">&lt; Elocumania /&gt;</h2>
                                                 <p className="description pb-3">
                                                 Unleash the power of your words at Elocumania, the ultimate elocution competition! Dive into the world of green energy and inspire change with your ideas. This is your chance to showcase your eloquence, engage the audience, and make an impact. Speak your mind and captivate the crowd!
                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/sh/elo')} >Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                         
                                         
                                             <div className="event-container"> {/* Use class names from external CSS */}
                                               <div className="image-side">
                                               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                                 <img className="event-image" src={img2} alt="Starlight Coding Event" />
                                               </div>
                                               <div className="text-side">
                                                 <h2 className="title">&lt; Technozia /&gt;</h2>
                                                 <p className="description pb-3">
                                                 Bring your ideas to life at Technoizia, the ultimate platform to exhibit working models! Demonstrate your technical expertise and creativity by presenting an innovative, functional model that addresses real-world challenges. Impress the audience and judges with your ingenuity, problem-solving skills, and hands-on approach to technology. It's time to showcase the future!
                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/sh/tech')}>Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                             <QueryCard contacts={contacts} />  
        </>
    )
}
export default Shtech;