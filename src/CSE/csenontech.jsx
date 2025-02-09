import React from "react";
import '../assets/style/event3.css';
import pixelpunchline from '../assets/img/CSE/pixel-punchlines.jpg'
import multiverse from '../assets/img/CSE/multiverse-of-madness.jpg'
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

function csenontech() {
   const navigate = useNavigate();
   const contacts = [
  
    { name: "Mr R .Keerthi Haran", number: "9345996914" },
    { name: "Mr. C. Vishnu Balaji", number: "8072044568" },
    { name: "Ms. R. Akshal", number: "7418990030" },
    { name: "Ms. P. Sruthi", number: "7604872819" },
  ];
   return (
 
     <>
    <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>Events</h1>
     <div className="event-container"> {/* Use class names from external CSS */}
       <div className="image-side">
       <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
         <img className="event-image" src={pixelpunchline} alt="Starlight Coding Event" />
       </div>
       <div className="text-side">
         <h2 className="title">&lt; Pixel Punchline /&gt;</h2>
         <p className="description pb-3">
         A meme creation competition where the theme will be announced on the spot. Participants must create memes within the given time, focusing on creativity, humor, and relevance to the theme. They must bring their own mobile or laptop for designing.
         </p>
         <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/cse/pixelpunchlines')} >Read More &lt;-&gt;</a>
       </div>
     </div>
 
 
     <div className="event-container"> {/* Use class names from external CSS */}
       <div className="image-side">
       <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
         <img className="event-image" src={multiverse} alt="Starlight Coding Event" />
       </div>
       <div className="text-side">
         <h2 className="title">&lt; Multiverse Of Madness /&gt;</h2>
         <p className="description pb-3">
         Participants must work together to solve puzzles and complete fun tasks to progress through the challenge. Teams must stay together throughout the event and can only use the provided clues and items—no external tools or gadgets are allowed. The goal is to solve all puzzles and escape the room before time runs out.
         </p>
         <a className="btn btn-outline-warning border-3 read-more" onClick={()=>navigate('/cse/multiverse')}>Read More &lt;-&gt;</a>
       </div>
     </div>
    
 
 
     <QueryCard contacts={contacts} />
     </>
     
   );
}
export default csenontech;  