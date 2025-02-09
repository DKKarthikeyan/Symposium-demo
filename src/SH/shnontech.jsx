import React from "react";
import '../assets/style/event3.css';
import styled from 'styled-components';

import img3 from '../assets/img/SH/img3.jpg'
import img4 from '../assets/img/SH/img4.avif'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import QueryCard from "../Components/QueryCard";

function Shnontech(){
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
                                                 <img className="event-image" src={img3} alt="Starlight Coding Event" />
                                               </div>
                                               <div className="text-side">
                                                 <h2 className="title">&lt; Roadies /&gt;</h2>
                                                 <p className="description pb-3">
                                                 Step into the spotlight at Roadies, the ultimate stage for showcasing your diverse talents! Whether it’s singing, dancing, acting, face painting, or any other extraordinary skill, this is your chance to captivate the audience and impress the judges. Perform solo or as a team and let your creativity shine. Ready to rule the stage?
                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/sh/road')} >Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                         
                                         
                                             <div className="event-container"> {/* Use class names from external CSS */}
                                               <div className="image-side">
                                               <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
                                                 <img className="event-image" src={img4} alt="Starlight Coding Event" />
                                               </div>
                                               <div className="text-side">
                                                 <h2 className="title">&lt; Adferro /&gt;</h2>
                                                 <p className="description pb-3">
                                                 Join Ad Ferro, the ultimate advertising showdown! Use your creativity and marketing skills to conceptualize and pitch a compelling advertisement for a scientific product. Topics will be given on the spot, challenging your ability to think fast, strategize, and engage your audience. Sell your ideas, win the crowd, and become an advertising maestro!
                                                 </p>
                                                 <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/sh/ad')}>Read More &lt;-&gt;</a>
                                               </div>
                                             </div>
                                             <QueryCard contacts={contacts} />  
                                   
        </>
    )
}
export default Shnontech;